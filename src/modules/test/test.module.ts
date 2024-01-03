import { Module, OnModuleInit, MiddlewareConsumer } from "@nestjs/common";
import {
  BaseModule,
  DatabaseModule,
  DatabaseService,
  Kit19SmsCommunicationService,
  LoggingMiddleware,
  MailSmsCommunicationService,
  RedisCacheService,
  WhatsappSmsCommunicationService,
  // S3UploadMiddleware,
} from "@wrappid/service-core";
import { CustomRouteMatchingMiddleware } from "./routeMapping.middleware";
import { AuthController } from "./test.controller";
import { TestController } from "./test2.controller";
import { AuthService } from "./test.service";

/**
 *
 *
 */
@Module({
  imports: [DatabaseModule],
  controllers: [AuthController, TestController],
  providers: [
    AuthService,
    RedisCacheService,
    Kit19SmsCommunicationService,
    WhatsappSmsCommunicationService,
    MailSmsCommunicationService,
  ],
  exports: [], // Export AppModule to make it available for other modules
})
export class TestModule extends BaseModule {
  onCoreModuleInit(): void {}
  onCoreModuleDestroy(): void {}
  onCoreApplicationBootstrap(): void {}
  constructor(private readonly databaseService: DatabaseService) {
    super();
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomRouteMatchingMiddleware).forRoutes("*");
    consumer.apply(LoggingMiddleware).forRoutes("*");
  }
}
