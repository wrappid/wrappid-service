import { Controller, Get } from "@nestjs/common";
import { WhatsAppService } from "./whatsapp.service";
import { BaseController, ControllerRegistry } from "@wrappid/service-core";

@Controller("whatsapp")
export class WhatsappController extends BaseController {
  constructor(private readonly whatsAppService: WhatsAppService) {
    super();
  }
  @Get("sentsms")
  async getHello(): Promise<void> {
    return await this.whatsAppService.send_message();
  }
}
ControllerRegistry.register("WhatsappController", WhatsappController);
