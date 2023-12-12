import { Module, OnModuleInit, MiddlewareConsumer } from "@nestjs/common";
import {
  BaseModule,
  DatabaseModule,
  DatabaseService,
  LoggingMiddleware,
  RedisCacheService,
  // S3UploadMiddleware,
} from "@wrappid/service-core";
import { AuthController } from "./test.controller";
import { AuthService } from "./test.service";

/**
 *
 *
 */
@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, RedisCacheService],
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
    consumer.apply(LoggingMiddleware).forRoutes("*");
    // consumer.apply(S3UploadMiddleware).forRoutes("auth/upload");
  }
}
