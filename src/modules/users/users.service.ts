import { Injectable } from "@nestjs/common";
import { DatabaseService } from "@wrappid/service-core";

@Injectable()
export class UsersService {
  //Get sequelize connection instance for differnce database
  constructor(
    private readonly databaseService:DatabaseService
  ) {}
  async findAllUsers(): Promise<any> {
    return this.databaseService.findAll('wrappid-database1','Users');
  }
  async findAllStudents(): Promise<any> {
    return this.databaseService.findAll('wrappid-database2','Students');

  }
}
