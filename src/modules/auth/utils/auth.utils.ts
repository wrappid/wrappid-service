import { ConfigConstant } from "@wrappid/service-core";



const COMMUNICATION_EMAIL = ConfigConstant.commType.EMAIL;
const COMMUNICATION_SMS = ConfigConstant.commType.SMS;
const COMMUNICATION_WHATSAPP = ConfigConstant.commType.WHATSAPP;
const COMMUNICATION_PUSH_NOTIFICATION = ConfigConstant.commType.NOTIFICATION;

function clearValidatePhoneEmail(text) {
    let t = text;
    if (t[0] == "'") {
      t = t.slice(1);
      t = t.toLowerCase();
    }
    let f = String(t).match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  
    if (f) {
      return { valid: f, type: COMMUNICATION_EMAIL };
    } else if (!f) {
      f = String(t).match(
        /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
      );
      if (f) {
        return { valid: f, type: COMMUNICATION_SMS };
      } else {
        return { valid: f, type: "" };
      }
    }
  
    return [f, t];
  }



module.exports = {
  clearValidatePhoneEmail,
  COMMUNICATION_EMAIL,
  COMMUNICATION_SMS,
  COMMUNICATION_WHATSAPP,
  COMMUNICATION_PUSH_NOTIFICATION,
};