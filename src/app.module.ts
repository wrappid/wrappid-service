import { MiddlewareConsumer, Module } from "@nestjs/common";
import {
  BaseModule,
  ClassRegistry,
  DatabaseModule,
  DatabaseService,
  LoggingMiddleware,
  ModelRegistry,
  RootModule,
} from "@wrappid/service-core";
import { AuthModule } from "./modules/auth/auth.module";
import { ModelCtor } from "sequelize-typescript";
import { join } from "path";

@Module({
  imports: [RootModule, DatabaseModule, AuthModule],
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
    console.log(`===`, modelArray, `====`);
    this.databaseService.addModels(modelArray as ModelCtor[], "wrappid");
  }

  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggingMiddleware)
  //     .forRoutes('*'); // Apply middleware to all routes
  // }
}
