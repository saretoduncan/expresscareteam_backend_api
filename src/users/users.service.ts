import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {
  CreateAdultHomeRepresentativeRequestDto,
  CreateCaregiverDto,
  CreateUserDto,
  UserResponseDto,
} from "src/dtos/users.dtos";
import { PrismaService } from "src/prisma/prisma.service";
import { RolesService } from "src/roles/roles.service";
import * as bcrypt from "bcrypt";
import { RoleEnum } from "src/common/enums";
import { AdultHomeService } from "src/adult-home/adult-home.service";
@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly rolesServices: RolesService,
    private readonly adultHomeService: AdultHomeService
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
          adultHomeRepresentative: {
            include: {
              adultHome: true,
            },
          },
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
          adultHomeRepresentative: {
            include: {
              adultHome: true,
            },
          },
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
        adultHomeRepresentative: {
          include: {
            adultHome: true,
          },
        },
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
  //add caregiver
  async addCaregiver(caregiver: CreateCaregiverDto): Promise<UserResponseDto> {
    try {
      const user = await this.getUserById(caregiver.userId);
      const caregiverRole = await this.getUserByUsername(RoleEnum.CAREGIVER);
      const updatedUser = await this.prismaService.user.update({
        where: {
          id: user.id,
        },
        data: {
          caregiver: {
            create: {
              firstName: caregiver.firstName,
              lastName: caregiver.lastName,
              email: caregiver.email,
              dateOfBirth: caregiver.dateOfBirth,
              gender: caregiver.gender,
              phoneNumber: caregiver.phoneNumber,
              city: caregiver.city,
              state: caregiver.state,
              street: caregiver.street,
              zipcode: caregiver.zipcode,
            },
          },
          roles: {
            connect: {
              id: caregiverRole.id,
            },
          },
        },
        include: {
          caregiver: true,
          adultHomeRepresentative: true,
          roles: true,
        },
      });
      return updatedUser;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all caregiver
  async getAllCaregivers(): Promise<UserResponseDto[]> {
    try {
      const caregivers = await this.prismaService.user.findMany({
        where: {
          roles: {
            some: {
              name: RoleEnum.CAREGIVER,
            },
          },
        },
        include: {
          caregiver: true,
          adultHomeRepresentative: true,
          roles: true,
        },
      });
      return caregivers;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //update caregiver
  async updateCaregiver(caregiver: CreateCaregiverDto) {
    try {
      const user = await this.getUserById(caregiver.userId);
      const updateCaregiver = await this.prismaService.user.update({
        where: {
          id: user.id,
        },
        data: {
          caregiver: {
            update: {
              firstName: caregiver.firstName,
              lastName: caregiver.lastName,
              email: caregiver.email,
              dateOfBirth: caregiver.dateOfBirth,
              gender: caregiver.gender,
              phoneNumber: caregiver.phoneNumber,
              city: caregiver.city,
              state: caregiver.state,
              street: caregiver.street,
              zipcode: caregiver.zipcode,
            },
          },
        },
      });
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //createHomeRep
  async createHomeRep(
    createHomeRepDto: CreateAdultHomeRepresentativeRequestDto
  ): Promise<UserResponseDto> {
    try {
      const user = await this.getUserById(createHomeRepDto.userId);
      const getHome = await this.adultHomeService.getAdultHomeById(
        createHomeRepDto.adultHomeId
      );
      const homeRepRole = await this.rolesServices.getRoleByName(
        RoleEnum.HOMEREPRESENTATIVE
      );

      const updateUser = await this.prismaService.user.update({
        where: {
          id: user.id,
        },
        include: {
          adultHomeRepresentative: true,
          roles: true,
          caregiver: true,
        },
        data: {
          adultHomeRepresentative: {
            create: {
              firstName: createHomeRepDto.firstName,
              lastName: createHomeRepDto.lastName,
              email: createHomeRepDto.email,
              phoneNumber: createHomeRepDto.phoneNumber,
              adultHomeId: getHome.id,
              jobTitle: createHomeRepDto.jobTitle,
            },
          },
          roles: {
            connect: {
              id: homeRepRole.id,
            },
          },
        },
      });
      return updateUser;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all homeRep
  async getAllHomeRep(): Promise<UserResponseDto[]> {
    try {
      const reps = await this.prismaService.user.findMany({
        where: {
          roles: {
            some: {
              name: RoleEnum.HOMEREPRESENTATIVE,
            },
          },
        },
        include: {
          caregiver: true,
          adultHomeRepresentative: {
            include: {
              adultHome: true,
            },
          },
          roles: true,
        },
      });
      return reps;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
