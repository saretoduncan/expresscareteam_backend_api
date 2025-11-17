import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { UsersService } from "./users/users.service";
import { RolesService } from "./roles/roles.service";
import { AdultHomeService } from "./adult-home/adult-home.service";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { AuthModule } from "./auth/auth.module";

import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { AdultHomeModule } from "./adult-home/adult-home.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule,

    UsersModule,

    RolesModule,

    AdultHomeModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
