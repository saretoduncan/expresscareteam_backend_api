import { UserResponseDto } from "src/dtos/users.dtos";
import { AuthService } from "./auth.service";
import { AuthUserResponseDto, RefreshAccessTokenResponseDto, RegisterCaregiverDto, RegisterProviderDto } from "src/dtos/auth.dtos";
import { Response } from "express";
interface RequestWithUser extends Request {
    user: UserResponseDto;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: RequestWithUser, res: Response): Promise<AuthUserResponseDto>;
    registerCaregiver(req: RegisterCaregiverDto, res: Response): Promise<AuthUserResponseDto>;
    registerProvider(req: RegisterProviderDto, res: Response): Promise<AuthUserResponseDto>;
    refreshToken(req: RequestWithUser, res: Response): Promise<RefreshAccessTokenResponseDto>;
    logout(res: Response): Promise<void>;
}
export {};
