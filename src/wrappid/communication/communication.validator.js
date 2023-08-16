const {
    validateEmail,
    validatePhone,
  } = require("./../utils/yupValidationSchema");
  
  module.exports = {
    validateEmail: (email) => {
      try {
        return validateEmail.validate(email) ? true : false;
      } catch (error) {
        return false;
      }
    },
    validatePhone: (phone) => {
      try {
        return validatePhone.validate(phone) ? true : false;
      } catch (error) {
        return false;
      }
    },
  };
  