import { MiddlewareConsumer, Module } from "@nestjs/common";
import {
  BaseModule,
  DatabaseModule,
  DatabaseService,
  RootModule,
  ModelRegistry,
  ApplicationContext,
  LoggingMiddleware,
  BaseController,
  ControllerRegistry,
  EntityRegistry,
} from "@wrappid/service-core";
import { ModelCtor } from "sequelize-typescript";
import { join } from "path";
import { TestModule } from "./modules/test/test.module";
import { WhatsappModule } from "./modules/whatsapp/whatsapp.module";
import { Reflector } from "@nestjs/core";
import { AuthController } from "./modules/test/test.controller";
import { log } from "console";

@Module({
  imports: [RootModule, DatabaseModule, TestModule, WhatsappModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule extends BaseModule {
  constructor(private readonly databaseService: DatabaseService) {
    super();
  }
  async onCoreModuleInit(): Promise<void> {
    console.log(`::===AppModule::onCoreModuleInit START===::`);

    const modelArray = EntityRegistry.getRegistry();
    console.log(modelArray);

    const registryEntityData = Array.from(modelArray.values()).map(
      ({ registryEntity }) => registryEntity
    );
    console.log(`registryEntityData::`, ...registryEntityData);

    const connection = await this.databaseService.getConnection("wrappid");
    await connection.setOptions({
      entities: [...registryEntityData],
    });
    await connection
      .initialize()
      .then(() => {
        console.log(`Data Source has been initialized!`);
      })
      .catch((err) => {
        console.error(`Error during Data Source initialization ${err}`);
      });
    const Users = EntityRegistry.getRegistryEntity("Routes");
    const userData = await connection.manager.find(Users);
    // console.log(userData);
    // console.log(connection);

    // ModelRegistry.initialize([join(__dirname, "./")]);
    // const modelArray = ModelRegistry.getClasses();
    // console.log(`::==`, modelArray, `===::`);
    // this.databaseService.addModels(modelArray as ModelCtor[], "wrappid");
    // // console.log(this.databaseService.getConnection("wrappid"));
    // this.databaseService.associateModels();
    // WrControllerRegistry.initialize([join(__dirname, "./")]);
    // console.log(ControllerRegistry.getRegistry());

    console.log(`::===AppModule::onCoreModuleInit END===::`);
  }

  onCoreModuleDestroy(): void {}
  async onCoreApplicationBootstrap(): Promise<void> {}
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggingMiddleware).forRoutes("*"); // Apply middleware to all routes
  // }
}
