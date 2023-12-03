import { MiddlewareConsumer, Module } from "@nestjs/common";
import {
  DatabaseModule,
  LoggingMiddleware,
  RootModule,
} from "@wrappid/service-core";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [RootModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggingMiddleware)
  //     .forRoutes('*'); // Apply middleware to all routes
  // }
}
