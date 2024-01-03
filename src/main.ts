import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { INestApplication, INestApplicationContext } from "@nestjs/common";

/**
 * DO NOT TOUCH THIS FILE
 */
async function bootstrap() {
  /**
   * save in ApplicationContext
   * ApplicationContext initialize
   */
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // const router = app.getHttpServer()._events.request._router;

  // const applicationContext =
  //   await NestFactory.createApplicationContext(AppModule);
  // const s1 = ApplicationContext.getInstance(applicationContext);
  // expressListRoutes(router);
}
bootstrap();
