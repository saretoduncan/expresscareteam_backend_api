import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser());
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  const config = new DocumentBuilder().setTitle('Express Care Team API')
  .setDescription("Express care team API Documentation")
  .setVersion("1.0")
  .addBearerAuth()
  .build();
  const documentFactory = ()=>SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api-docs', app, documentFactory)
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
