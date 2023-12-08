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

@Module({
  imports: [RootModule, DatabaseModule, TestModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule extends BaseModule {
  constructor(private readonly databaseService: DatabaseService) {
    super();
  }

  onModuleInit() {
    console.log(`::===AppModule has been Initialization===::`);
    ModelRegistry.initialize([join(__dirname, "./")]);
    const modelArray = ModelRegistry.getClasses();
    console.log(`::==`, modelArray, `===::`);
    this.databaseService.addModels(modelArray as ModelCtor[], "wrappid");
    // console.log(this.databaseService.getConnection("wrappid"));
    this.databaseService.associateModels();
    //
  }

  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggingMiddleware)
  //     .forRoutes('*'); // Apply middleware to all routes
  // }
}
