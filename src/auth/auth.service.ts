import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdultHomeService } from "src/adult-home/adult-home.service";
import { RoleEnum } from "src/common/enums";
import {
  AuthUserResponseDto,
  RefreshAccessTokenResponseDto,
  RegisterCaregiverDto,
  RegisterProviderDto,
} from "src/dtos/auth.dtos";
import { UserResponseDto } from "src/dtos/users.dtos";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly adultHomeService: AdultHomeService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}
  //sigh jwt token
  private async signJwtToken(
    username: string,
    id: string,
    roles: string[],
    secret: string,
    expireTime: string
  ) {
    return await this.jwtService.signAsync(
      { username: username, sub: id, roles: roles },
      { expiresIn: Number(expireTime), secret: secret }
    );
  }
  //sign refresh token
  private async signRefresherToken(
    username: string,
    id: string,
    roles: string[]
  ) {
    return await this.signJwtToken(
      username,
      id,
      roles,
      process.env.REFRESH_TOKEN_SECRET!!,
      process.env.REFRESH_TOKEN_EXPIRY_TIME!!
    );
  }
  //set cookie
  private setCookie(res: Response, token: string) {
    res.cookie(process.env.REFRESH_TOKEN_KEY!!, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: Number(process.env.REFRESH_TOKEN_EXPIRY_TIME!!),
      path: "/",
    });
  }
  //create caregiver
  async registerCaregiver(
    registerCaregiverDto: RegisterCaregiverDto,
    res: Response
  ): Promise<AuthUserResponseDto> {
    try {
      const newUser = await this.userService.createUser({
        email: registerCaregiverDto.email,
        password: registerCaregiverDto.password,
        role: RoleEnum.CAREGIVER,
      });
      const newCaregiver = await this.userService.addCaregiver({
        firstName: registerCaregiverDto.firstName,
        lastName: registerCaregiverDto.lastName,
        dateOfBirth: registerCaregiverDto.dateOfBirth,
        email: newUser.username,
        gender: registerCaregiverDto.gender,
        phoneNumber: registerCaregiverDto.phoneNumber,
        city: registerCaregiverDto.city,
        state: registerCaregiverDto.state,
        street: registerCaregiverDto.street,
        zipcode: registerCaregiverDto.zipcode,
        userId: newUser.id,
      });
      const accessToken = await this.signJwtToken(
        newUser.username,
        newUser.id,
        newUser.roles.map((role) => role.name),
        process.env.ACCESS_TOKEN_SECRET!!,
        process.env.ACCESS_TOKEN_EXPIRY_TIME!!
      );
      const refreshToken = await this.signRefresherToken(
        newUser.username,
        newUser.id,
        newUser.roles.map((role) => role.name)
      );
      this.setCookie(res, refreshToken);
      return { ...newCaregiver, accessToken };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //create provider
  async registerProvider(
    registerProviderDto: RegisterProviderDto,
    res: Response
  ): Promise<AuthUserResponseDto> {
    try {
      const [newUser, newHome] = await Promise.all([
        this.userService.createUser({
          email: registerProviderDto.email,
          password: registerProviderDto.password,
          role: RoleEnum.HOMEREPRESENTATIVE,
        }),
        this.adultHomeService.createAdultHome({
          name: registerProviderDto.adult_home_name,
          email: registerProviderDto.adult_home_email,
          phone: registerProviderDto.adult_home_phone,
          city: registerProviderDto.adult_home_city,
          state: registerProviderDto.adult_home_state,
          street: registerProviderDto.adult_home_street,
          zipcode: registerProviderDto.adult_home_zipcode,
          website: registerProviderDto.adult_home_website,
        }),
      ]);
      const newHomeRep = await this.userService.createHomeRep({
        firstName: registerProviderDto.first_name,
        lastName: registerProviderDto.last_name,
        email: newUser.username,
        phoneNumber: registerProviderDto.phone_number,
        jobTitle: registerProviderDto.job_title,
        userId: newUser.id,
        adultHomeId: newHome.id,
      });

      const accessToken = await this.signJwtToken(
        newUser.username,
        newUser.id,
        newUser.roles.map((role) => role.name),
        process.env.ACCESS_TOKEN_SECRET!!,
        process.env.ACCESS_TOKEN_EXPIRY_TIME!!
      );
      const refreshToken = await this.signRefresherToken(
        newUser.username,
        newUser.id,
        newUser.roles.map((role) => role.name)
      );
      this.setCookie(res, refreshToken);

      return { ...newHomeRep, accessToken };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //login
  async loginUser(
    user: UserResponseDto,
    res: Response
  ): Promise<AuthUserResponseDto> {
    try {
      const accessToken = await this.signJwtToken(
        user.username,
        user.id,
        user.roles.map((role) => role.name),
        process.env.ACCESS_TOKEN_SECRET!!,
        process.env.ACCESS_TOKEN_EXPIRY_TIME!!
      );

      const refreshToken = await this.signRefresherToken(
        user.username,
        user.id,
        user.roles.map((role) => role.name)
      );
      this.setCookie(res, refreshToken);

      return { ...user, accessToken };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async validateUser(username: string, password: string): Promise<any> {
    try {
      username = username.trim();
      if (!username)
        throw new HttpException(
          "USERNAME field cannot be left empty",
          HttpStatus.BAD_REQUEST
        );
      const user = await this.userRepo.findOne({
        where: {
          username: username,
        },

        relations: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      console.log(user);
      if (!user) {
        throw new HttpException(
          "User is not registered with us",
          HttpStatus.UNAUTHORIZED
        );
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return null;
      }
      const { password: Pass, ...restUser } = user;

      return restUser;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //refresh access token
  async refreshToken(
    username: string,
    id: string,
    roles: string[]
  ): Promise<RefreshAccessTokenResponseDto> {
    try {
      const accessToken = await this.signJwtToken(
        username,
        id,
        roles,
        process.env.ACCESS_TOKEN_SECRET!!,
        process.env.ACCESS_TOKEN_EXPIRY_TIME!!
      );
      return {
        accessToken: accessToken,
      };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //update password
  async updatePassword(password: string, userId: string) {
    try {
      await this.userService.updatePassword(userId, password);
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //logout
  async logout(res: Response) {
    res.clearCookie(process.env.REFRESH_TOKEN_KEY!!);
    return;
  }
}
