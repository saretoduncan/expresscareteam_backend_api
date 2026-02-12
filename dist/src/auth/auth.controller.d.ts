import { UserResponseDto } from "src/dtos/users.dtos";
import { AuthService } from "./auth.service";
import { AuthUserResponseDto, JwtPayloadDto, RefreshAccessTokenResponseDto, RegisterCaregiverDto, RegisterProviderDto, ResetPasswordRequestDto, UpdatePasswordRequestDto, VerifyResetPasswordOtp } from "src/dtos/auth.dtos";
import { Response } from "express";
interface RequestWithUser extends Request {
    user: UserResponseDto;
}
export interface RequestWithJwtPayload extends Request {
    user: JwtPayloadDto;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: RequestWithUser, res: Response): Promise<AuthUserResponseDto>;
    registerCaregiver(req: RegisterCaregiverDto, res: Response): Promise<AuthUserResponseDto>;
    registerProvider(req: RegisterProviderDto, res: Response): Promise<AuthUserResponseDto>;
    refreshToken(req: RequestWithUser, res: Response): Promise<RefreshAccessTokenResponseDto>;
    requestResetPasswordOtp(req: ResetPasswordRequestDto): Promise<void>;
    verifyResetPassword(req: VerifyResetPasswordOtp): Promise<RefreshAccessTokenResponseDto>;
    resetPassword(req: RequestWithJwtPayload, body: UpdatePasswordRequestDto): Promise<void>;
    logout(res: Response): Promise<void>;
}
export {};
