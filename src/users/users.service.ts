import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto, UserResponseDto } from "src/dtos/users.dtos";
import { PrismaService } from "src/prisma/prisma.service";
import { RolesService } from "src/roles/roles.service";
import * as bcrypt from "bcrypt";
@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly rolesServices: RolesService
  ) {}

  //create user
  async createUser(user: CreateUserDto): Promise<UserResponseDto> {
    try {
      const getUser = await this.prismaService.user.findUnique({
        where: {
          username: user.email,
        },
      });
      if (getUser) {
        throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
      }
      const getRole = await this.rolesServices.getRoleByName(user.role);
      const password = await bcrypt.hash(user.password, 10);
      const newUser = await this.prismaService.user.create({
        data: {
          username: user.email,
          password: password,
          roles: {
            connect: {
              id: getRole.id,
            },
          },
        },
        include: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      return newUser;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get user by id
  async getUserById(id: string): Promise<UserResponseDto> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { id },
        include: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      if (!user) {
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get user by username
  async getUserByUsername(username: string): Promise<UserResponseDto> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          username: username,
        },
        include: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      if (!user) {
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all users
  async getAllUsers(): Promise<UserResponseDto[]> {
    const users = await this.prismaService.user.findMany({
      include: {
        roles: true,
        caregiver: true,
        adultHomeRepresentative: true,
      },
    });
    if (users.length === 0) {
      throw new HttpException("No users found", HttpStatus.NOT_FOUND);
    }
    return users;
  }
  //update user password
  async updatePassword(id: string, password: string) {
    try {
      const user = await this.getUserById(id);
      const hashedPassword = await bcrypt.hash(password, 10);
      const updatedUser = await this.prismaService.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: hashedPassword,
        },
      });
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //add role to user
  async addRole(userId: string, roleId: string): Promise<UserResponseDto> {
    try {
      const user = await this.getUserById(userId);
      const role = await this.rolesServices.getRoleById(roleId);
      if (user.roles.includes(role)) {
        throw new HttpException(
          "User already has the role",
          HttpStatus.BAD_REQUEST
        );
      }
      const updateUser = await this.prismaService.user.update({
        where: {
          id: user.id,
        },
        data: {
          roles: {
            connect: {
              id: role.id,
            },
          },
        },
        include: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      return updateUser;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //revoke role from user
  revokeRole = async (
    userId: string,
    roleId: string
  ): Promise<UserResponseDto> => {
    try {
      const user = await this.getUserById(userId);
      const role = await this.rolesServices.getRoleById(roleId);
      if (!user.roles.includes(role)) {
        throw new HttpException(
          "User does not have the role",
          HttpStatus.BAD_REQUEST
        );
      }
      const updateUser = this.prismaService.user.update({
        where: {
          id: user.id,
        },
        data: {
          roles: {
            disconnect: {
              id: role.id,
            },
          },
        },
        include: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      return updateUser;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };
  //delete user
  async deleteUser(id: string) {
    try {
      const user = await this.getUserById(id);
      await this.prismaService.user.update({
        where: {
          id: user.id,
        },
        data: {
          roles: {
            set: [],
          },
          caregiver: {
            delete: true,
          },
          adultHomeRepresentative: {
            delete: true,
          },
        },
      });
      await this.prismaService.user.delete({
        where: {
          id: user.id,
        },
      });
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
