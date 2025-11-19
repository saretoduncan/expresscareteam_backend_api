import {
  Controller,
  Res,
  Request,
  HttpStatus,
  HttpCode,
  Post,
  UseGuards,
  Body,
} from "@nestjs/common";
import { UserResponseDto } from "src/dtos/users.dtos";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import {
  AuthUserResponseDto,
  LoginUserDto,
  RefreshAccessTokenResponseDto,
  RegisterCaregiverDto,
  RegisterProviderDto,
} from "src/dtos/auth.dtos";
import { Response } from "express";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
interface RequstWithUser extends Request {
  user: UserResponseDto;
}
@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard("local"))
  @ApiOperation({
    summary: "Authenticate user with email/username  and password",
  })
  //login
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 200,
    description: "Login successfull. Return JWT and user info.",
    type: AuthUserResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: "Unauthorized – invalid credentials",
  })
  @Post("login")
  async login(
    @Request() req: RequstWithUser,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = req.user;
    const loggedInUser = await this.authService.loginUser(user, res);
    return loggedInUser;
  }
  //register caregiver
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: "Register a new caregiver account",
    description:
      "Creates a new caregiver user account with the provided details.",
  })
  @ApiBody({ type: RegisterCaregiverDto })
  @ApiResponse({
    status: 201,
    description:
      "Caregiver registered successfully. Returns the authenticated user info and JWT.",
    type: AuthUserResponseDto,
  })
  @Post("register/caregiver")
  async registerCaregiver(
    @Body() req: RegisterCaregiverDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = await this.authService.registerCaregiver(req, res);
    return user;
  }

  //register provider
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: "Register a new provider account",
    description:
      "Creates a new provider user account with the provided details.",
  })
  @ApiBody({ type: RegisterProviderDto })
  @ApiResponse({
    status: 201,
    description:
      "Provider registered successfully. Returns the authenticated user info and JWT.",
    type: AuthUserResponseDto,
  })
  @Post("register/provider")
  async registerProvider(
    @Body() req: RegisterProviderDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = await this.authService.registerProvider(req, res);
    return user;
  }

  //
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: "Refresh Access Token",
    description: "create a new access token using the refresh token",
  })
  @ApiResponse({
    status: 200,
    description: "Access token refreshed successfully",
    type: RefreshAccessTokenResponseDto,
  })
  @Post("refreshAccessToken")
  async refreshToken(
    @Request() req: RequstWithUser,
    @Res({ passthrough: true }) res: Response
  ) {
    const token = await this.authService.refreshToken(
      req.user.username,
      req.user.id,
      req.user.roles.map((r) => r.name)
    );
    return token;
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: "Logout user",
    description: "Logs out the user and clears authentication cookies.",
  })
  @ApiResponse({
    status: 200,
    description: "User logged out successfully",
  })
  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    await this.authService.logout(res);
    return;
  }
}
