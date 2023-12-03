import { Module, OnModuleInit, MiddlewareConsumer } from "@nestjs/common";
import {
  DatabaseModule,
  DatabaseService,
  LoggingMiddleware,
} from "@wrappid/service-core";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Users } from "./models/Users.model";
import { PersonContacts } from "./models/PersonContacts.model";
import { Persons } from "./models/Persons.model";
import { Roles } from "./models/Roles.model";

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [], // Export AppModule to make it available for other modules
})
export class AuthModule implements OnModuleInit {
  constructor(private readonly databaseService: DatabaseService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes("*");
  }
  async onModuleInit() {
    console.log(`::===AuthModule has been Initialization===::`);
    await this.databaseService.addModels(
      [Users, PersonContacts, Persons, Roles],
      "application"
    );
  }
}
