import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
// import { RootModule } from "@wrappid/service-core";
/**
 * DO NOT TOUCH THIS FILE
 */
async function bootstrap() {
  const App = await NestFactory.create(AppModule);
  await App.listen(3000);
}

bootstrap();
