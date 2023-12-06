import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";
import { BaseController, DatabaseService } from "@wrappid/service-core";

@Controller("auth")
export class AuthController extends BaseController {
  constructor(
    private readonly authService: AuthService,
    private readonly databaseService: DatabaseService
  ) {
    super();
  }

  /**
   * @description
   *
   * @param req
   * @returns
   */
  @Post("checkLoginOrRegister")
  checkLoginOrRegister(@Req() req: Request): Promise<any> {
    return this.authService.checkLoginOrRegister(req);
  }

  @Post("upload")
  checkUpload(@Req() req: Request, @Res() res): string {
    // console.log(req);
    console.log(res.locals.s3Url);
    return "hi";
  }

  @Get("all")
  getAllUsers(@Req() req: Request, @Res() res): Promise<any[]> {
    return this.databaseService.findAll("wrappid", "User");
    // console.log(`===`, userData);
    // return userData;
  }
}
