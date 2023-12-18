import { Module } from "@nestjs/common";
import { WhatsappController } from "./whatsapp.controller";
import { WhatsAppService } from "./whatsapp.service";
import { BaseModule } from "@wrappid/service-core";

@Module({
  imports: [],
  controllers: [WhatsappController],
  providers: [WhatsAppService],
  exports: [],
})
export class WhatsappModule extends BaseModule {
  onCoreModuleInit(): void {}
  onCoreModuleDestroy(): void {}
  onCoreApplicationBootstrap(): void {}
}
