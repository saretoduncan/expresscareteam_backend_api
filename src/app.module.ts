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

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    AuthModule,

    UsersModule,

    RolesModule,

    AdultHomeModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
 
})
export class AppModule {}
