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
import { RegisterCaregiverDto, RegisterProviderDto } from "src/dtos/auth.dtos";
import { Response } from "express";
interface RequstWithUser extends Request {
  user: UserResponseDto;
}
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(
    @Request() req: RequstWithUser,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = req.user;
    const loggedInUser = await this.authService.loginUser(user, res);
    return loggedInUser;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post("register/caregiver")
  async registerCaregiver(
    @Body() req: RegisterCaregiverDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = await this.authService.registerCaregiver(req, res);
    return user;
  }
  @HttpCode(HttpStatus.CREATED)
  @Post("register/provider")
  async registerProvider(
    @Body() req: RegisterProviderDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = await this.authService.registerProvider(req, res);
    return user;
  }
  @HttpCode(HttpStatus.OK)
  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    await this.authService.logout(res);
    return;
  }
}
