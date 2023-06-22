const {constant } = require("../constants/server.constant");
const databaseActions = require("../database/actions.database");
const otpGenerator = require("otp-generator");
var wrappidConf = require("../../../wrappid.conf.json")
var otpLength = wrappidConf["otpLength"];
const COMMUNICATION_EMAIL = constant.communication.EMAIL;

/**
 * This functions does the following:
 * 1. clear and lower case param
 * 2. check with email and phone regex
 * 
 * @param {*} text 
 * @returns {valid, text}
 */
module.exports = clearValidatePhoneEmail = (text) => {
    if (text[0] == "'") {
      text = text.slice(1);
      text = text.toLowerCase();
    }
    let valid = String(text).match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  
    if (valid) {
      return { valid: valid, type: constant.communication.EMAIL };
    } else if (!valid) {
      valid = String(text).match(
        /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
      );
      if (valid) {
        return { valid: valid, type: constant.communication.SMS };
      } else {
        return { valid: valid, type: "" };
      }
    }
  
    return [valid, text];
  }

  async function communicate(
    reciepients = [],
    type = COMMUNICATION_EMAIL,
    template = null,
    dataList = [],
    otpFlag = false,
    transaction = null,
    requesterId = null
  ) {
    //   console.log("IN COMMUNICATE", transaction, otpFlag);
    var templateId = null;
    var templateName = null;
    var templateOb = null;
    if (typeof template === "string") {
      templateName = template;
    } else if (typeof template === "number") {
      templateId = template;
    }
  // databaseactions.findone
    if (templateId) {
      // databaseActions.findOne("application", "Users", { where: whereOb })
      templateOb = await databaseActions.findByPk("application", "CommunicationTemplates", {templateId} );
      if (templateOb._status !== entityStatus.APPROVED) {
        templateOb = null;
      }
    } else if (templateName) {
      templateOb = await databaseActions.findByPk("application", "CommunicationTemplates", {
        where: {
          name: templateName,
          _status: constant.entityStatus.APPROVED,
        },
       }) ;
    }
  
    if (!templateOb) {
      console.error("Template not found:", template);
      return {
        success: false,
        error: "No template found",
      };
    }
  
    console.log("Template found", templateOb.id);
  
    if (!Array.isArray(reciepients)) {
      console.log("Reciepient object turned into array");
      reciepients = [reciepients];
    }
  
    for (var i = 0; i < reciepients.length; i++) {
      var dataOb = dataList[i];
  
      if (otpFlag) {
        var otp = null;
        if (!dataList[i] || (dataList[i] && !dataList[i].otp)) {
          otp = otpGenerator.generate(otpLength, {
            specialChars: false,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
          });
          dataOb = {
            ...dataList[i],
            variable: { otp },
          };
          console.log("OTP AUTO GENERATED", dataOb);
        } else {
          console.log("OTP :", dataOb);
          otp = dataList[i]?.variable?.otp;
        }
      }
  
      var dataObFinal = {
        ...dataOb,
        templateId: templateOb.id,
        status: "pending",
        _status: constant.entityStatus.NEW,
        createdBy: requesterId,
      };
      var newCom = null;
      if (type === COMMUNICATION_EMAIL) {
        dataObFinal = {
          ...dataObFinal,
          userId: reciepients[i].id,
          to: reciepients[i].email,
        };
        newCom = await db.MailComms.create(dataObFinal, {
          transaction: transaction ? transaction : null,
        });
        console.log("Mail com created");
      } else if (type == COMMUNICATION_SMS) {
        dataObFinal = {
          ...dataObFinal,
          userId: reciepients[i].id,
          to: reciepients[i].phone,
        };
        newCom = await db.SmsComms.create(dataObFinal, {
          transaction: transaction ? transaction : null,
        });
        console.log("SMS com created");
      } else if (type == COMMUNICATION_WHATSAPP) {
        if (reciepients[i]?.id) {
          dataObFinal["userId"] = reciepients[i].id;
        }
        dataObFinal = {
          ...dataObFinal,
          to: reciepients[i].phone,
        };
        newCom = await db.WhatsAppComm.create(dataObFinal, {
          transaction: transaction ? transaction : null,
        });
        console.log("Whatsapp com created");
      }
      if (otpFlag) {
        var updateOldOtp = await db.Otps.update(
          { isActive: false },
          {
            where: {
              userId: reciepients[i].id,
            },
            transaction: transaction ? transaction : null,
          }
        );
        console.log("Old otp entries updated");
  
        var entry = { otp, userId: reciepients[i].id };
        if (type === COMMUNICATION_EMAIL) {
          entry["mailCommId"] = newCom.id;
        } else if (type === COMMUNICATION_SMS) {
          entry["smsCommId"] = newCom.id;
        } else if (type === COMMUNICATION_WHATSAPP) {
          entry["whatsAppCommId"] = newCom.id;
        } else {
          console.error("Communication type not implemented:", type);
          if (transaction) {
            throw "Communication type not implemented";
          } else {
            return {
              success: false,
              error: "Communication type not implemented:",
            };
          }
        }
  
        var otpEntry = await db.Otps.create(entry, {
          transaction: transaction ? transaction : null,
        });
        console.log("New  otp entry created");
      }
  
      /**
       * @todo: should be removed and call directly form queue subscriber
       */
      var ob = await sendMessage(
        dataObFinal.to,
        type,
        templateOb,
        newCom.id,
        dataObFinal,
        transaction,
        requesterId
      );
      if (!ob.success) {
        if (transaction) {
          throw ob.error;
        } else {
          return ob;
        }
      }
    }
  
    return { success: true, error: false };
  }

  async function getDeviceId(req) {
    // console.log("mac_ip", mac_ip)
    var detector = new DeviceDetector({
      clientIndexes: true,
      deviceIndexes: true,
      deviceAliasCode: true,
    });
    var result = detector.detect(req.headers["user-agent"]);
    console.log("Result:: ", result);
    var ip = await getIP(req);
    // console.log('ip:: ', ip)
    var con = result.device.id + ip;
    con = con.trim();
    // hashedId =  await bcrypt.hashSync(con, 10)
    return con;
  }

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
  
  // module.exports = {
  //   clearValidatePhoneEmail,
  //   getDeviceId,
  //   communicate,
  //   loginHelper
  // };