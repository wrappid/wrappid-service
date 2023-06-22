async function loginHelper(req, db, otherLogin) {
    let otpLogin = false;
    let urlLogin = false;
    // var isValidJOI = await authenticateJOI(req,"loginPOST",["body"])
    var emailOrPhone = req.body.emailOrPhone;
    var ob = clearValidatePhoneEmail(req.body.emailOrPhone);
    var whereOb = {};
    var resetPassword = false;
    var updatePassword = false;
    var verificationOb = {};
  
    if (otherLogin?.otpLogin) {
      otpLogin = true;
    } else if (otherLogin?.urlLogin) {
      urlLogin = true;
    }
    if (ob.type == constant.communication.EMAIL) {
      whereOb = { email: emailOrPhone };
      verificationOb = { emailVerified: true };
    } else if (ob.type == constant.communication.SMS) {
      verificationOb = { phoneVerified: true };
  
      whereOb = { phone: emailOrPhone };
    } else {
      console.log("Not a valid email or phone");
      return { status: 500, message: "Not a valid email or phone" };
    }
  
    //check if it is a reset password request
    if (req.query.reset) {
      console.log("Login with password reset mode");
      if (req.query.reset === "true") {
        resetPassword = true;
      } else {
        console.log("*********************************");
        console.log("RESET NOT IN CORRECT FORMAT");
        console.log("*********************************");
        return { status: 401, message: "Reset not in correct format" };
      }
    }
  
    let userDetails = await db.Users.findOne({
      where: whereOb,
    });
  
    if (!userDetails) {
      console.log("User does not exist");
      return { status: 400, message: "User does not exist" };
    } else if (!userDetails.isActive) {
      console.error("User not active");
      return { status: 401, message: "User not active...Contact admin" };
    } else {
      let userId = userDetails.id;
      let mail = userDetails.email;
      let phone = userDetails.phone;
      let userUpdateOb = {};
  
      // console.log("i am in >>>>>>>>>>>>>>>>>>>>>>>>>>>",userId)
      var personData = await db.Persons.findOne({
        attributes: ["id", "userInvitationToken"],
        where: { userId: userId },
      });
      let personId = personData.id;
      console.log("Person details fetched");
  
      if (otpLogin) {
        let otpCheck = await checkOtp(db, userId, req.body.otp);
        if (!otpCheck) {
          console.log("OTP match fail");
          return { status: 500, message: "OTP does not match" };
        } else {
          console.log("OTP match passed");
          if (resetPassword) {
            let passwordValid = resetPasswordCheck(
              req.body.password,
              userDetails
            );
            if (passwordValid?.success) {
              updatePassword = true;
              userUpdateOb["password"] = passwordValid.password;
            } else {
              return {
                status: 500,
                message: passwordValid.message,
              };
            }
          }
        }
      } else if (urlLogin) {
        let check = checkUrlLoginValidation(req, personData);
        if (check) {
          console.log("Validation done");
        } else {
          console.log("Validation failed");
          return { status: 401, message: "Invalid url token" };
        }
      } else if (!checkPassword(req.body.password, userDetails.password)) {
        console.error("Invalid password");
        return { status: 401, message: "Invalid password" };
      }
  
      deviceId = await getDeviceId(req);
      console.log("Device id fetched");
  
      let { refreshToken, accessToken } = genarateAccessToken(
        userId,
        mail,
        phone,
        personData,
        userDetails
      );
      console.log("Tokens generate done");
  
      let sessions = await db.SessionManager.findAll({
        where: {
          userId: userId,
        },
      });
  
      console.log("All sessions fetchd:", sessions.length);
  
      found = false;
      try {
        const result = await db.sequelize.transaction(async (t) => {
          //check first time login
          if (userDetails.firstLogin) {
            console.log("First time login detected");
            userUpdateOb["firstLogin"] = false;
          }
  
          if (userDetails.firstLogin || updatePassword) {
            var [n, r] = await db.Users.update(userUpdateOb, {
              where: {
                id: userId,
              },
              transaction: t,
            });
            if (n == 0) {
              throw "DB update error";
            } else {
              console.log("First time login updated");
            }
          }
  
          //for otplogin update personcontact verfication status
          if (otpLogin || urlLogin) {
            console.log("PersonContacts updating due to otplogin or urllogin");
  
            var [n, r] = await db.PersonContacts.update(
              {
                verified: true,
              },
              {
                where: {
                  personId: personId,
                  data: emailOrPhone,
                },
                transaction: t,
              }
            );
  
            if (n == 0) {
              console.error(
                "Person contact update not made, user id:",
                userId,
                ", contact:",
                emailOrPhone
              );
              throw "DB update error";
            } else {
              console.log("PersonContacts updated");
            }
          }
  
          //user emailphone verified status change
          if (
            userDetails.firstLogin ||
            (verificationOb.emailVerified && !personData.emailVerified) ||
            (verificationOb.phoneVerified && !personData.phoneVerified)
          ) {
            console.log("Persons table updating:", verificationOb);
            if (urlLogin) {
              verificationOb["userInvitationToken"] = null;
            }
  
            var [n, r] = await db.Persons.update(verificationOb, {
              where: {
                userId: userId,
              },
              transaction: t,
            });
            if (n == 0) {
              throw "DB update error";
            } else {
              console.log("Persons table updated");
            }
          }
  
          for (var s = 0; s < sessions.length; s++) {
            currSession = sessions[s];
            if (bcrypt.compareSync(deviceId, currSession.deviceId)) {
              console.log("*****************************");
              console.log("session found", currSession.id);
              console.log("*****************************");
              found = true;
  
              let [nrows, rows] = await db.SessionManager.update(
                { refreshToken: refreshToken },
                {
                  where: {
                    id: currSession.id,
                  },
                  transaction: t,
                }
              );
  
              if (nrows > 0) {
                console.log("Login Success");
                createLoginLogs(db, req.originalUrl, userId, req.body?.devInfo);
                return {
                  status: 200,
                  message: "Successfully login",
                  id: userId,
                  accessToken: accessToken,
                  refreshToken: refreshToken,
                  sessionId: currSession.id,
                };
              } else {
                console.error("Can not save refresh token", nrows);
                return { status: 500, message: "Database error" };
              }
            }
          }
  
          if (!found) {
            let newSession = await db.SessionManager.create(
              {
                refreshToken: refreshToken,
                userId: userId,
                deviceId: bcrypt.hashSync(deviceId, 9),
              },
              {
                transaction: t,
              }
            );
            console.log(
              "Login Success with New Device, session id: ",
              newSession.id
            );
            createLoginLogs(db, req.originalUrl, userId, req.body?.devInfo);
  
            return {
              status: 200,
              message: "Successfully login with New Device",
              id: userId,
              accessToken: accessToken,
              refreshToken: refreshToken,
              sessionId: newSession.id,
            };
          }
        });
  
        return result;
      } catch (err) {
        console.log("Error in login", err);
        return {
          status: 500,
          message: err.message || "Databse error",
        };
      }
    }
  }


  const validation = (schema) => async (req, res, next) => {
    try {
      // console.log(req.body)
      if (schema.body) {
        await schema.body.validate(req.body);
      }
      if (schema.query) {
        await schema.query.validate(req.query);
      }
      if (schema.params) {
        await schema.params.validate(req.params);
      }
      console.log("Validate successfully");
      return next();
    } catch (err) {
      console.log(err);
      return res.status(406).json({ message: err.errors ? err.errors[0] : err });
    }
  };