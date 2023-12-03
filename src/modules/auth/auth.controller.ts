import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";
import { BaseController } from "@wrappid/service-core";

@Controller("auth")
export class AuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
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
}
