import { Injectable } from "@nestjs/common";
import { BaseService } from "@wrappid/service-core";

import WhatsApp from "whatsapp";
import {
  ComponentTypesEnum,
  LanguagesEnum,
  ParametersTypesEnum,
} from "whatsapp/build/types/enums";
import { MessageTemplateObject } from "whatsapp/build/types/messages";
interface WAConfigType {
  WA_BASE_URL: string;
  M4D_APP_ID: string;
  M4D_APP_SECRET: string;
  WA_PHONE_NUMBER_ID: number;
  WA_BUSINESS_ACCOUNT_ID: string;
  CLOUD_API_VERSION: string;
  CLOUD_API_ACCESS_TOKEN: string;
  WEBHOOK_ENDPOINT: string;
  WEBHOOK_VERIFICATION_TOKEN: string;
  LISTENER_PORT: number;
  DEBUG: boolean;
  MAX_RETRIES_AFTER_WAIT: number;
  REQUEST_TIMEOUT: number;
}

@Injectable()
export class WhatsAppService extends BaseService {
  async send_message() {
    try {
      const config: WAConfigType = {
        WA_BASE_URL: "graph.facebook.com",
        M4D_APP_ID: "429054109053612",
        M4D_APP_SECRET: "",
        WA_PHONE_NUMBER_ID: 102308052747189,
        WA_BUSINESS_ACCOUNT_ID: "107155225588091",
        CLOUD_API_VERSION: "v17.0",
        CLOUD_API_ACCESS_TOKEN:
          "EAAGGOPHCcqwBOz9eeCuwwGZBlh47ZBYnjNj6EYNBfJEqXL3hBOQhR0cBps0L4UITzrjvgZC2X46iT8YF1KTILFRQSAunEOhS1I99GbIGbXMY2yYGKm0GZAPSCINtsz6pqTQbtuZBWGmf1aabFjJ5VjoFiTGLZBdT4GlZAUXglKnSIzrErxXUGCiZByNJf8udya5aZBgVsfwxQnNbmzIv6W9gDEDwFMlTO0g0cgxQZD",
        WEBHOOK_ENDPOINT: "",
        WEBHOOK_VERIFICATION_TOKEN: "",
        LISTENER_PORT: 3000,
        MAX_RETRIES_AFTER_WAIT: 30,
        REQUEST_TIMEOUT: 20000,
        DEBUG: true,
      };
      // Your test sender phone number
      const wa = new WhatsApp(102308052747189);
      console.log("====================================");
      // console.log(wa.config);
      console.log("====================================");

      const recipient_number = 918777083276;

      const body: MessageTemplateObject<ComponentTypesEnum> = {
        name: "hello_world",
        language: {
          policy: "deterministic",
          code: LanguagesEnum.English_US,
        },
      };
      const sent_text_message = wa.messages.template(body, recipient_number);
      await sent_text_message
        .then((res) => {
          console.log(`=========================`);
          console.log(res.rawResponse());
          console.log(`=========================`);
        })
        .catch((error) => {
          console.log(`###########################`);
          console.log(error);
          console.log(`###########################`);
        });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }
}
