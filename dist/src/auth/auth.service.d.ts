import { JwtService } from "@nestjs/jwt";
import { AdultHomeService } from "src/adult-home/adult-home.service";
import { AuthUserResponseDto, RegisterCaregiverDto, RegisterProviderDto } from "src/dtos/auth.dtos";
import { UserResponseDto } from "src/dtos/users.dtos";
import { UsersService } from "src/users/users.service";
import { Response } from "express";
import { User } from "src/users/users.entity";
import { Repository } from "typeorm";
export declare class AuthService {
    private readonly userService;
    private readonly adultHomeService;
    private readonly jwtService;
    private readonly userRepo;
    constructor(userService: UsersService, adultHomeService: AdultHomeService, jwtService: JwtService, userRepo: Repository<User>);
    private signJwtToken;
    private signRefresherToken;
    private setCookie;
    registerCaregiver(registerCaregiverDto: RegisterCaregiverDto, res: Response): Promise<AuthUserResponseDto>;
    registerProvider(registerProviderDto: RegisterProviderDto, res: Response): Promise<AuthUserResponseDto>;
    loginUser(user: UserResponseDto, res: Response): Promise<AuthUserResponseDto>;
    validateUser(username: string, password: string): Promise<any>;
    updatePassword(password: string, userId: string): Promise<void>;
    logout(res: Response): Promise<void>;
}
