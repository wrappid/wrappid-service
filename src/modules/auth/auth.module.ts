import { Module, OnModuleInit, MiddlewareConsumer } from "@nestjs/common";
import {
  BaseModule,
  DatabaseModule,
  DatabaseService,
  LoggingMiddleware,
  // S3UploadMiddleware,
} from "@wrappid/service-core";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

/**
 *
 *
 */
@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [], // Export AppModule to make it available for other modules
})
export class AuthModule extends BaseModule {
  constructor(private readonly databaseService: DatabaseService) {
    super();
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes("*");
    // consumer.apply(S3UploadMiddleware).forRoutes("auth/upload");
  }

  async onModuleInit() {
    console.log(`::===AuthModule has been Initialization===::`);
  }
}
