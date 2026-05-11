import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { RequestWithSession } from "src/auth/auth.controller";

@Injectable()
export class AuthenticateGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<RequestWithSession>();
    if (!req.isAuthenticated()) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
