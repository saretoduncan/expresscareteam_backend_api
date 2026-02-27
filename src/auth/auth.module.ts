import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/users.entity";
import { RefreshJwtStrategy } from "src/strategy/refreshJwt.strategy";
import { AccessJwtStrategy } from "src/strategy/accessJwt.strategy";
import { ResetPasswordJwtStrategy } from "src/strategy/resetPasswordJwt.strategy";
import { SessionSerializer } from "./sessionSerializer.service";

@Global()
@Module({
  imports: [
    PassportModule.register({ session: true }),
    JwtModule.register({}),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    RefreshJwtStrategy,
    AccessJwtStrategy,
    ResetPasswordJwtStrategy,
    SessionSerializer,
  ],
  controllers: [AuthController],
  exports: [AccessJwtStrategy],
})
export class AuthModule {}
