import { Module } from "@nestjs/common";
import { RootModule } from "@wrappid/service-core";
// import { AppModule } from "@wrappid/service-core";

@Module({
  imports: [RootModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
