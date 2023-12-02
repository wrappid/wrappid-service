import { Module, OnModuleInit } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { DatabaseModule, DatabaseService } from "@wrappid/service-core";
import { Users } from "./models/user.model";
import { Students } from "./models/students.model";

@Module({
  imports:[DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements OnModuleInit {
  constructor(
    private readonly databaseService:DatabaseService,
    ){}
  async onModuleInit() {
  console.log(`::===UsersModule has been Initialization===::`);
  await this.databaseService.addModels([Students, Users],'wrappid-database2');
  }
  
}
