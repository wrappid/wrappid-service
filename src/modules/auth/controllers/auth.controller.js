const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");
const { clearValidatePhoneEmail, getDeviceId } = require("../../../wrappid/communication/helper");
const env = process.env.NODE_ENV || "test";
const config = require("../../../wrappid/config/provider.config");
const accessTokenSecret = config.jwt.accessTokenSecret;
const refreshAccessTokenSecret = config.jwt.refreshAccessTokenSecret;
const expTime = config.jwt.expTime;
const expTimeRefreshToken = config.jwt.expTimeRefreshToken;
const databaseActions = require("../../../wrappid/database/actions.database");

// databaseActions.findAll("application", "testdatas", {})

const DeviceDetector = require("node-device-detector");
const {
  communicate,
} = require("../../../wrappid/communication/helper");
const {constant} = require("../../../wrappid/constants/server.constant");
const { loginHelper } = require("../../../wrappid/communication/helper");
const { entityStatus } = require("../../../wrappid/constants/server.constant");
const databaseProvider = require("../../../wrappid/database/provider.database")
const { validateAndGetAuthType } = require("../functions/auth.functions");
// const postCheckLoginOrRegister =
//   require("../util/yupValidationSchema").postCheckLoginOrRegister;
// const login = require("../util/yupValidationSchema").login;
// const postLoginWithOtp =
//   require("../util/yupValidationSchema").postLoginWithOtp;
// const postLogoutSchema =
//   require("../util/yupValidationSchema").postLogoutSchema;
// const refreshTokenSchema =
//   require("../util/yupValidationSchema").refreshTokenSchema;
// const getIpSchema = require("../util/yupValidationSchema").getIpSchema;
// const resetpasswordSchema =
//   require("../util/yupValidationSchema").resetpasswordSchema;
// const changePasswordSchema =
//   require("../util/yupValidationSchema").changePasswordSchema;

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.checkLoginOrRegister = async (req, res) => {
  try {
    /**
     * @todo
     * 
     * 1. validate email or phone
     * 2. get type [EMAIL or PHONE]
     */
    // ---------------------  
    let emailOrPhone = req.body.emailOrPhone;
    let whereOB = validateAndGetAuthType(emailOrPhone);

    const data = await databaseActions.findOne("application", "Users", { where: whereOB });
    console.log(data);

    /* if (data) {
        if (req.query && req.query.loginWithOtp && req.query.loginWithOtp == 1 || data.firstLogin) {
              const result = await databaseProvider.application.sequelize.transaction(async (t) => {
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
            console.log(`Don't know what to do ${"......."}`);
          
        } else {
            console.log("User found", data.id);
            const personData = await databaseActions.findOne("application", "Users", { where: whereOb });
            console.log(personData);
            res.status(200).json({
                message: "User Found",
                data: {
                    name: personData.firstName + " " + personData.middleName + " " + personData.lastName,
                    photoUrl: personData.photoUrl,
                    isVerified: personData.isVerified,
                },
            });
        }
    } else {
        
    } */
    return res.status(200).json({ message: "Check login or register working.", data });
  } catch (error) {
      console.error("checkLoginOrRegister Error: ", error);
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