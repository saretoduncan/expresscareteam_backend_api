import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayloadDto } from "src/dtos/auth.dtos";
import { UsersService } from "src/users/users.service";
@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  "refreshJwt"
) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          if (!request || !request.cookies) return null;
          const key = process.env.REFRESH_TOKEN_KEY;
          if (!key) return null;

          return request.cookies[key];
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.REFRESH_TOKEN_SECRET!!,
    });
  }
  async validate(payload: JwtPayloadDto) {
    try {
      if (!payload.sub) {
        throw new UnauthorizedException("Invalid token");
      }
      const user = await this.userService.getUserById(payload.sub);
      return user;
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
  }
}
