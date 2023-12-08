import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./test.service";
import { Request } from "express";
import {
  BaseController,
  DatabaseService,
  ModelRegistry,
} from "@wrappid/service-core";

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
  checkUpload(@Req() req: Request, @Res() res: any): string {
    // console.log(req);
    console.log(res.locals.s3Url);
    return "hi";
  }

  @Get("all")
  async getAllAuthors(@Res() res: any): Promise<any> {
    let data = await this.databaseService.findAll("wrappid", "Author", {
      include: [{ model: ModelRegistry.getClass("Post") }],
    });
    res.status(200).json(data);
  }

  // @Get("alluser")
  // async getAllUsers(@Res() res): Promise<any> {
  //   let data = await this.databaseService.findAll("application", "User", {
  //     include: [{ model: ModelRegistry.getClass("Subject") }],
  //   });
  //   res.status(200).json(data);
  // }
}
