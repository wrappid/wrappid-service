const fetch = require("node-fetch");
var querystring = require("querystring");
const env = process.env.NODE_ENV || "development";
var config = require("../../config/config.json")[env];
const {
  validatePhone,
} = require("./communication.validator");

async function sentSms(ob) {
  var phone = ob.phone;
  var message = ob.message;
  var smsProvider = config.smsProvider;

  //textlocal
  // mes_body = querystring.stringify({
  //   sender: smsProvider.sender,
  //   apikey: smsProvider.apiKey,
  //   numbers: phone,
  //   message: message,
  // });
  try {
    if (validatePhone(phone)) {
      /**
       * Textlocal
       */
      // var smsRes = await fetch(smsProvider.url, {
      //   method: "post",
      //   headers: {
      //     "Content-Length": mes_body.length,
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      //   body: mes_body,
      // });
      // d = await smsRes.json();
      /**
       * Textlocal
       */
      // if (d.status == "failure") {
      //   console.error("error: can not send otp", d);
      //   return { status: 500, message: "OTP sent errorvia sms" };
      // } else {
      //   console.log("OTP sent via sms");
      //   return { status: 200, message: "OTP sent via sms" };
      // }

      /**
       * Kit19
       */
      var kit19Url = smsProvider.url;
      var finalUrl = kit19Url.replace("#phone", phone);
      finalUrl = finalUrl.replace("#message", message);
      console.log(finalUrl);
      var smsRes = await fetch(finalUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (smsRes.status === 200) {
        console.log("OTP sent via sms");
        return { status: 200, message: "OTP sent via sms" };
      } else {
        console.error("error: can not send otp", smsRes);
        return { status: 500, message: "OTP sent errorvia sms" };
      }
    } else {
      console.error("Invalid phone", phone);
      return { status: 500, message: "Invalid phone" };
    }
  } catch (error) {
    console.error("OTP sent errorvia sms", error);
    return { status: 500, message: "OTP sent errorvia sms" };
  }
}

module.exports = {
  sentSms,
};
