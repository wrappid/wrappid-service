import { Controller, Get } from "@nestjs/common";
import { ModuleService } from "./module.service";

@Controller()
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get()
  getHello(): { name: string } {
    return this.moduleService.getHello("User");
  }
}
