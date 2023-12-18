import { Module } from "@nestjs/common";
import {
  BaseModule,
  DatabaseModule,
  DatabaseService,
  RootModule,
  ModelRegistry,
} from "@wrappid/service-core";
import { ModelCtor } from "sequelize-typescript";
import { join } from "path";
import { TestModule } from "./modules/test/test.module";
import { WhatsappModule } from "./modules/whatsapp/whatsapp.module";

@Module({
  imports: [RootModule, DatabaseModule, TestModule, WhatsappModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule extends BaseModule {
  onCoreModuleInit(): void {
    console.log(`::===AppModule::onCoreModuleInit START===::`);
    ModelRegistry.initialize([join(__dirname, "./")]);
    const modelArray = ModelRegistry.getClasses();
    console.log(`::==`, modelArray, `===::`);
    this.databaseService.addModels(modelArray as ModelCtor[], "wrappid");
    // console.log(this.databaseService.getConnection("wrappid"));
    this.databaseService.associateModels();
    console.log(`::===AppModule::onCoreModuleInit END===::`);
  }
  onCoreModuleDestroy(): void {}
  onCoreApplicationBootstrap(): void {}
  constructor(private readonly databaseService: DatabaseService) {
    super();
  }

  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggingMiddleware)
  //     .forRoutes('*'); // Apply middleware to all routes
  // }
}
