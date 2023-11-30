import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { UsersService } from "./users.service";
import { exampleValidationSchema } from "./validation/example.validation";
import { ValidationPipe } from "@wrappid/service-core";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) {}
  @Get('postgres')
  findAllPostgres(): Promise<any> {
    return this.usersService.findAllUsers();
  }
  @Post('validation')
  @UsePipes(new ValidationPipe(exampleValidationSchema))
  valid(@Body() createUserDto:any): string {
    console.log(`||===`,createUserDto,`===||`);
    return 'This is validation API ';
  }

  @Get('nestJs')
  findAllNestJs(): Promise<any> {
    return this.usersService.findAllStudents();
  }
}
