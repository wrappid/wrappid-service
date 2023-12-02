import { MiddlewareConsumer, Module } from "@nestjs/common";
import { DatabaseModule, LoggingMiddleware, RootModule } from "@wrappid/service-core";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
// import { AppModule } from "@wrappid/service-core";

@Module({
  imports: [RootModule, UsersModule, DatabaseModule],
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
