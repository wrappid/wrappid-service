import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";

@Injectable()
export class ModuleService {
  getHello(name): { name: string } {
    return { name: `!!Hello ${name} From Wrappid Module!!` };
  }
}
