import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/users.entity";

@Module({
  imports: [PassportModule, JwtModule.register({}), TypeOrmModule.forFeature([User])],
  providers: [AuthService, LocalStrategy],
  controllers:[AuthController]
})
export class AuthModule {}
