const { databaseActions, communicationUtils } = require("../../../wrappid/index");
/**
 * This function help us to determine
 * whether the auth type is 
 * EMAIL or PHONE 
 * and 
 * validate it
 * 
 * @returns 
 */
const validateAndGetAuthType = (emailOrPhone) => {
    var ob = communicationUtils.clearValidatePhoneEmail(emailOrPhone);
      if (ob.type === constant.communication.EMAIL)
          whereOb = { email: emailOrPhone };
      else if (ob.type === constant.communication.SMS)
          whereOb = { phone: emailOrPhone };
      else {
          console.log("Not a valid email or phone");
          res.status(500).json({ message: "Not a valid email or phone" });
          return whereOB;
      }
};

module.exports = {
    validateAndGetAuthType
};