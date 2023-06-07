/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.checkLoginOrRegister = async (req, res) => {
    try {
        // var isValidJOI = await authenticateJOI(req,"checkLoginOrRegisterPOST",["body","query"])
        var emailOrPhone = req.body.emailOrPhone;
        var ob = clearValidatePhoneEmail(req.body.emailOrPhone);
        var whereOb = {};
        if (ob.type === constant.communication.EMAIL)
            whereOb = { email: emailOrPhone };
        else if (ob.type === constant.communication.SMS)
            whereOb = { phone: emailOrPhone };
        else {
            console.log("Not a valid email or phone");
            res.status(500).json({ message: "Not a valid email or phone" });
            return;
        }

        db.Users.findOne({
            where: whereOb,
        })
            .then(async (data) => {
                try {
                    if (data) {
                        if (
                            (req.query &&
                                req.query.loginWithOtp &&
                                req.query.loginWithOtp == 1) ||
                            data.firstLogin
                        ) {
                            const result = await db.sequelize.transaction(async (t) => {
                                var comRes = await communicate(
                                    data,
                                    ob.type,
                                    ob.type === constant.communication.EMAIL
                                        ? constant.communication.SENT_OTP_MAIL_EN
                                        : ob.type === constant.communication.SMS
                                            ? constant.communication.SENT_OTP_SMS_EN
                                            : null,
                                    [],
                                    (otpFlag = true),
                                    (transaction = t)
                                );
                                if (comRes.success) {
                                    if (data.firstLogin) {
                                        console.log(
                                            "OTP sent for registered user for first login"
                                        );
                                        res.status(201).json({
                                            message:
                                                "OTP sent for registered user for first login",
                                        });
                                    } else {
                                        console.log("OTP sent for registered user");
                                        res
                                            .status(200)
                                            .json({ message: "OTP sent for registered user" });
                                    }
                                } else {
                                    throw "Can't send OTP right now";
                                }
                            });
                        } else {
                            console.log("User found", data.id);
                            var personData = await db.Persons.findOne({
                                where: {
                                    userId: data.id,
                                },
                            });

                            res.status(200).json({
                                message: "User Found",
                                data: {
                                    name:
                                        personData.firstName +
                                        " " +
                                        personData.middleName +
                                        " " +
                                        personData.lastName,
                                    photoUrl: personData.photoUrl,
                                    isVerified: personData.isVerified,
                                },
                            });
                        }
                    } else {
                        console.log("Sent OTP to unregistered user: ", ob.type);
                        if (ob.valid) {
                            var userBody = whereOb;
                            try {
                                const result = await db.sequelize.transaction(async (t) => {
                                    var r = await db.Roles.findOne({
                                        where: { role: "doctor" },
                                    });
                                    var u = await db.Users.create(
                                        {
                                            ...userBody,
                                            roleId: r.id,
                                            firstLogin: true,
                                        },
                                        { transaction: t }
                                    );
                                    console.log("User Created", u.id);

                                    var p = await db.Persons.create(
                                        {
                                            ...userBody,
                                            profileId: Date.now(),
                                            userId: u.id,
                                            /**
                                             * @todo
                                             * added for phase 0.5
                                             */
                                            isVerified: true,
                                        },
                                        { transaction: t }
                                    );
                                    console.log("Person Created", u.id);

                                    var p = await db.PersonContacts.create(
                                        {
                                            data: emailOrPhone,
                                            type:
                                                ob.type === constant.communication.EMAIL
                                                    ? constant.contact.EMAIL
                                                    : constant.contact.PHONE,
                                            personId: p.id,
                                            _status: entityStatus.ACTIVE,
                                        },
                                        { transaction: t }
                                    );
                                    console.log("Person contact Created", p.id);

                                    var comRes = await communicate(
                                        u,
                                        ob.type,
                                        ob.type === constant.communication.EMAIL
                                            ? constant.communication.SENT_OTP_MAIL_EN
                                            : ob.type === constant.communication.SMS
                                                ? constant.communication.SENT_OTP_SMS_EN
                                                : null,
                                        [],
                                        (otpFlag = true),
                                        (transaction = t)
                                    );
                                    console.log("COM res", comRes);
                                    if (comRes.success) {
                                        console.log("OTP sent for unregistered user");
                                        res
                                            .status(201)
                                            .json({ message: "OTP sent for unregistered user" });
                                    } else {
                                        throw "Can't send OTP right no";
                                    }
                                });
                            } catch (error) {
                                console.error("internal error", error);
                                res.status(500).json({ message: "Internal error" });
                            }
                        } else {
                            console.error("Not a valid mail or phone:", emailOrPhone);
                            res.status(405).json({ message: "Not valid phone or email" });
                        }
                    }
                } catch (err) {
                    console.log("Error in check register", err);
                    res.status(500).json({ message: err });
                }
            })
            .catch((err) => {
                console.log("Error in check register", err);
                res.status(500).json({ message: err });
            });
    } catch (error) {
        console.error("checkLoginOrRegister Error:: ", error);
        res.status(500).json({ message: error.message });
    }
}
  // login
module.exports.login = async (req, res) => {
    try {
        let data = await loginHelper(req, db);
        res.status(data.status).json(data);
      } catch (error) {
        console.error("login Error:: ", error);
        res.status(500).json({ message: error.message });
      }
}
 // login with otp or reset password
module.exports.loginWithOtp = async (req, res) => {
    try {
        let data = await loginHelper(req, db, { otpLogin: true });
        res.status(data.status).json(data);
      } catch (error) {
        console.error("loginWithOtp Error:: ", error);
        res.status(500).json({ message: error.message });
      }
}

 // login with url
module.exports.loginWithUrl = async (req, res) => {
    try {
        let data = await loginHelper(req, db, { urlLogin: true });
        res.status(data.status).json(data);
      } catch (error) {
        console.error("loginWithOtp Error:: ", error);
        res.status(500).json({ message: error.message });
      }
}
  // logout
  module.exports.logout = async (req, res) => {
    try {
        console.error("user:: ", req.user);
        deviceId = await getDeviceId(req);
        sessions = await db.SessionManager.findAll({
          where: {
            userId: req.user.userId,
          },
        });
        for (var s = 0; s < sessions.length; s++) {
          currSession = sessions[s];
          if (bcrypt.compareSync(deviceId, currSession.deviceId)) {
            [nrows, rows] = await db.SessionManager.update(
              { refreshToken: "" },
              {
                where: {
                  id: currSession.id,
                },
              }
            );
            if (nrows > 0) {
              console.log("Successfully logged out");
              res.status(200).json({ message: "Successfully logged out" });
            } else {
              console.error("Database error in logout");
              res.status(500).json({ message: "Database error" });
            }
            break;
          }
        }
      } catch (err) {
        console.error("Database error in logout", err);
        res.status(500).json({ message: "Database error" });
      }
  }

  module.exports.getIP = async (req,res) => {
    var detector = new DeviceDetector({
      clientIndexes: true,
      deviceIndexes: true,
      deviceAliasCode: true,
    });
    var result = detector.detect(req.headers["user-agent"]);
    devId = await getDeviceId(req);
    res.status(200).json({ devId: devId, result: result });
  }

  module.exports.refreshToken = async (req, res) => {
    try {
        jwt.verify(
          req.body.refreshToken,
          refreshAccessTokenSecret,
          async (err, user) => {
            if (err) {
              console.error("Refresh token expired");
              return res.status(401).json({ message: "Refresh token expired" });
            }
            var userId = user.userId;
            // var isValidJOI = await authenticateJOI(req,"refreshtokenPOST",["body"])
            // if(isValidJOI.validFlag){
            deviceId = await getDeviceId(req);
            sessions = await db.SessionManager.findAll({
              where: {
                userId: userId,
              },
            });
            for (var s = 0; s < sessions.length; s++) {
              currSession = sessions[s];
              if (bcrypt.compareSync(deviceId, currSession.deviceId)) {
                const token = req.body.refreshToken;
                const refreshToken = currSession.refreshToken;
                console.log("Session:", currSession.id);
                if (!token) {
                  return res.status(401).json({ message: "Invalid request" });
                }
                if (refreshToken != token) {
                  console.error("Wrong refresh token");
                  return res
                    .status(401)
                    .json({ message: "unauthorised access" });
                }

                var userDetails = await db.Users.findOne({
                  where: {
                    id: userId,
                  },
                });
                const accessToken = jwt.sign(
                  {
                    userId: userDetails.id,
                    email: userDetails.email,
                    phone: userDetails.phone,
                    roleId: userDetails.roleId,
                  },
                  accessTokenSecret,
                  { expiresIn: expTime }
                );
                console.log("Access token refreshed");
                return res.status(200).json({
                  accessToken: accessToken,
                });
              } else {
                // token is not from the device you are requesting
                return res.status(401).json({
                  message: "token is not from the device you are requesting",
                });
              }
            }
          }
        );
      } catch (err) {
        console.error("Database error in refresh token", err);
        res.status(500).json({ message: "Database error" });
      }
  }

  module.exports.clientLoginInformation = async (req, res) => { try {
    const loginLogs = await db.LoginLogs.findAll({
      order: [["createdAt", "DESC"]],
    });
    let data = {};
    if (loginLogs && loginLogs[0]) {
      data.currentLog = loginLogs[0];
    }
    if (loginLogs && loginLogs[1]) {
      data.oldLog = loginLogs[1];
    }
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }

  }