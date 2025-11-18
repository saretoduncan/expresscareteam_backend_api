import { UserResponseDto } from "src/dtos/users.dtos";
import { AuthService } from "./auth.service";
import { AuthUserResponseDto, RegisterCaregiverDto, RegisterProviderDto } from "src/dtos/auth.dtos";
import { Response } from "express";
interface RequstWithUser extends Request {
    user: UserResponseDto;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: RequstWithUser, res: Response): Promise<AuthUserResponseDto>;
    registerCaregiver(req: RegisterCaregiverDto, res: Response): Promise<AuthUserResponseDto>;
    registerProvider(req: RegisterProviderDto, res: Response): Promise<AuthUserResponseDto>;
    logout(res: Response): Promise<void>;
}
export {};
