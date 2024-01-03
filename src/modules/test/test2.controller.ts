import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./test.service";
import { Request } from "express";
import {
  BaseController,
  DatabaseService,
  Kit19SmsCommunicationService,
  RedisCacheService,
  WhatsappSmsCommunicationService,
  MailSmsCommunicationService,
  ControllerRegistry,
} from "@wrappid/service-core";

@Controller("auth")
export class TestController extends BaseController {
  /*
  constructor(
    private readonly authService: AuthService,
    private readonly databaseService: DatabaseService,
    private readonly redisCacheService: RedisCacheService,
    private readonly kit19SmsCommunicationService: Kit19SmsCommunicationService,
    private readonly whatsappSmsCommunicationService: WhatsappSmsCommunicationService,
    private readonly mailSmsCommunicationService: MailSmsCommunicationService
  ) {
    super();
  }

  @Get("sentsms")
  async sentSMS(@Res() res: any): Promise<any> {
    let data = this.kit19SmsCommunicationService.communication();
    res.status(200).json(data);
  }

  @Get("sentwhatsapp")
  async sentWhatsapp(@Res() res: any): Promise<any> {
    let data = this.whatsappSmsCommunicationService.communication();
    res.status(200).json(data);
  }

  @Get("sentemail")
  async sentEmail(@Res() res: any): Promise<any> {
    try {
      this.mailSmsCommunicationService.communication();
      res.status(200).json({ message: "sent successfully!!" });
    } catch (error) {
      res.status(200).json({ message: error });
    }
  }

  /**
   * @description
   *
   * @param req
   * @returns
   */

  /*
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

  @Get("allwrappid")
  async getAllWrappidAuthors(@Res() res: any): Promise<any> {
    let data = await this.databaseService.findAll("wrappid", "wrappid", "Post");
    res.status(200).json(data);
  }

  @Get("allapplication")
  async getAllApplicationAuthors(@Res() res: any): Promise<any> {
    let data = await this.databaseService.findAll(
      "application",
      "wrappid",
      "Post"
    );
    res.status(200).json(data);
  }

  async getUsers(req: Request, res: Response) {
    return "getUsers called!!";
  }
*/
  // @Get("alluser")
  // async getAllUsers(@Res() res): Promise<any> {
  //   let data = await this.databaseService.findAll("application", "User", {
  //     include: [{ model: ModelRegistry.getClass("Subject") }],
  //   });
  //   res.status(200).json(data);
  // }

  getUsers(): string {
    return "Hello From GET API Routes!!!";
  }
  testAPI(req: Request, res: Response): string {
    return "Hello From testAPI  Routes!!!";
  }
}

ControllerRegistry.register("TestController", TestController);
