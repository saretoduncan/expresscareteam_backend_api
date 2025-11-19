import { AuthGuard } from "@nestjs/passport";

export class RefreshJwtGuard extends AuthGuard("refreshJwt") {}
export class AccessJwtGuard extends AuthGuard("accessJwt") {}
