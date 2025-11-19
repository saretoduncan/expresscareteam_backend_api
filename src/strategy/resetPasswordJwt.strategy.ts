import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayloadDto } from "src/dtos/auth.dtos";

@Injectable()
export class ResetPasswordJwtStrategy extends PassportStrategy(
  Strategy,
  "resetPasswordJwt"
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.RESET_PASSWORD_TOKEN_SECRET!!,
    });
  }
  validate(payload: JwtPayloadDto) {
    
    try {
     
      if (!payload.sub || !payload.username || !payload.roles) {
        throw new UnauthorizedException("invalid access token");
      }
      return payload;
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
  }
}
