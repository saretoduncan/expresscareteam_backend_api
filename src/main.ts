import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

import cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { RedisService } from "./redis/redis.service";
import session from "express-session";
import { DbRedisStore } from "./auth/db-redis-session.store";
import passport from "passport";
import { AuthSessionEntity } from "./auth/session.entity";
import { AppDataSource } from "./database/data-source";
import { doubleCsrf } from "csrf-csrf";

import { RequestWithSession } from "./auth/auth.controller";
import { DatabaseService } from "./database/database.service";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    credentials: true,
    origin: [
      "https://coral-happy-painfully.ngrok-free.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  });
  app.set("trust proxy", 1);
  app.use(cookieParser());

  const configService = app.get(ConfigService);

  app.use(
    session({
      store: app.get(DbRedisStore),
      secret: process.env.SESSION_SECRET!!,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: Number(configService.get<number>("SESSION_EXPIRY")),
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
      },
    }),
  );

  app.use(passport.initialize());

  app.use(passport.session());

  const { doubleCsrfProtection, generateCsrfToken, validateRequest } =
    doubleCsrf({
      getSecret: () => process.env.SESSION_SECRET!!,
      getSessionIdentifier: (req: Request) => req.session.id,
      cookieName: "x-csrf-token",
      cookieOptions: {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: Number(configService.get<number>("SESSION_EXPIRY")),
        path: "/",
      },

      ignoredMethods: ["GET", "HEAD", "OPTIONS"],
      getCsrfTokenFromRequest: (req: any) => {
        return req.headers["x-csrf-token"];
      },
    });

  app.use((req: any, res: any, next: any) => {
    req.generateCsrfToken = () => generateCsrfToken(req, res);
    req.validate = () => validateRequest(req);
    next();
  });
  app.use(doubleCsrfProtection);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle("Express Care Team API")
    .setDescription("Express care team API Documentation")
    .setVersion("1.0")
    .addBearerAuth({
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
      in: "header",
    })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, documentFactory);

  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  await app.listen(port, "0.0.0.0", () => {
    console.log(`server running on port ${port}`);
  });
}
bootstrap();
