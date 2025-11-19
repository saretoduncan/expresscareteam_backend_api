import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {
  CreateAdultHomeRepresentativeRequestDto,
  CreateCaregiverDto,
  CreateUserDto,
  UserResponseDto,
} from "src/dtos/users.dtos";

import { RolesService } from "src/roles/roles.service";
import * as bcrypt from "bcrypt";
import { RoleEnum } from "src/common/enums";
import { AdultHomeService } from "src/adult-home/adult-home.service";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Caregiver } from "./caregiver.entity";
import { AdultHomeRepresentative } from "./adult-home-representative.entity";
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Caregiver) private caregiverRepo: Repository<Caregiver>,
    @InjectRepository(AdultHomeRepresentative)
    private adultHomeRepRepo: Repository<AdultHomeRepresentative>,

    private readonly rolesServices: RolesService,
    private readonly adultHomeService: AdultHomeService
  ) {}

  //create user
  async createUser(user: CreateUserDto): Promise<UserResponseDto> {
    try {
      const getUser = await this.userRepo.findOne({
        where: {
          username: user.email,
        },
      });

      if (getUser) {
        throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
      }
      const getRole = await this.rolesServices.getRoleByName(user.role);
      
      const password = await bcrypt.hash(user.password, 10);
      const newUser = this.userRepo.create({
        username: user.email,
        password: password,
      });
     
      newUser.roles= [getRole];
      
      const savedUser = await this.userRepo.save(newUser);
      return await this.getUserById(savedUser.id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get user by id
  async getUserById(id: string): Promise<UserResponseDto> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id,
        },
        relations: ["roles", "caregiver", "adultHomeRepresentative"],
      });
      if (!user) {
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      }
      return {
        username: user.username,
        id: user.id,
        roles: user.roles,
        caregiver: user.caregiver ?? null,
        adultHomeRepresentative: user.adultHomeRepresentative ?? null,
      };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get user by username
  async getUserByUsername(username: string): Promise<UserResponseDto> {
    try {
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
      if (!user) {
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      }
      return {
        username: user.username,
        id: user.id,
        adultHomeRepresentative: user.adultHomeRepresentative ?? null,
        caregiver: user.caregiver ?? null,
        roles: user.roles,
      };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all users
  async getAllUsers(): Promise<UserResponseDto[]> {
    const users = await this.userRepo.find();
    if (users.length === 0) {
      throw new HttpException("No users found", HttpStatus.NOT_FOUND);
    }
    return users;
  }
  //update user password
  async updatePassword(id: string, password: string) {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: id,
        },
        relations: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
       
      });
      if (!user)
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await this.userRepo.save(user);
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //add role to user
  async addRole(userId: string, roleId: string): Promise<UserResponseDto> {
    try {
      const user = await this.userRepo.findOne({
        where: { id: userId },
        relations: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      if (!user)
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      const role = await this.rolesServices.getRoleById(roleId);
      if (user.roles.includes(role)) {
        throw new HttpException(
          "User already has the role",
          HttpStatus.BAD_REQUEST
        );
      }
      user.roles.push(role);
      const updateUser = await this.userRepo.save(user);
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
      const user = await this.userRepo.findOne({
        where: { id: userId },
        relations: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      if (!user)
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      const role = await this.rolesServices.getRoleById(roleId);
      if (!user.roles.includes(role)) {
        throw new HttpException(
          "User does not have the role",
          HttpStatus.BAD_REQUEST
        );
      }
      user.roles = user.roles.filter((r) => r.id === role.id);
      const updateUser = await this.userRepo.save(user);
      return updateUser;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };
  //delete user
  async deleteUser(id: string) {
    try {
      const user = await this.userRepo.findOne({
        where: { id },
        relations: {
          adultHomeRepresentative: true,
          caregiver: true,
          roles: true,
        },
      });
      if (!user)
        throw new HttpException(
          "User to be deleted not found",
          HttpStatus.BAD_REQUEST
        );

      await this.userRepo.delete(user.id);
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //add caregiver
  async addCaregiver(caregiver: CreateCaregiverDto): Promise<UserResponseDto> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: caregiver.userId,
        },
        relations: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      if (!user)
        throw new HttpException("User not created yet", HttpStatus.NOT_FOUND);

      const newCaregiver = this.caregiverRepo.create({
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
        userId: caregiver.userId,
      });

      user.caregiver = newCaregiver;
      return await this.userRepo.save(user);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all caregiver
  async getAllCaregivers(): Promise<UserResponseDto[]> {
    try {
      // const caregivers = await this.userRepo
      //   .createQueryBuilder("user")
      //   .leftJoinAndSelect("user.roles", "role")
      //   .leftJoinAndSelect("user.caregiver", "caregiver")
      //   .leftJoinAndSelect("user.adultHomeRepresentative", "rep")
      //   .leftJoinAndSelect("rep.adultHome", "home")
      //   .where("role.name = :roleName", { roleName: RoleEnum.CAREGIVER })
      //   .getMany();

      const caregivers = await this.userRepo.find({
        relations: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
        where: {
          roles: {
            name: RoleEnum.CAREGIVER,
          },
        },
      });

      // The password field has `select: false` in the entity, so it's already excluded.
      // If you needed to manually transform, you could map the results.
      return caregivers.map((user) => {
        const { password, ...result } = user;
        return result;
      });
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //update caregiver
  async updateCaregiver(caregiver: CreateCaregiverDto) {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: caregiver.userId,
        },
        relations: {
          roles: true,
          caregiver: true,
          adultHomeRepresentative: true,
        },
      });
      if (!user)
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
      if (user.caregiver) {
        user.username = caregiver.email;
        user.caregiver.firstName = caregiver.firstName;
        user.caregiver.lastName = caregiver.lastName;
        user.caregiver.dateOfBirth = caregiver.dateOfBirth;
        user.caregiver.gender = caregiver.gender;
        user.caregiver.phoneNumber = caregiver.phoneNumber;
        user.caregiver.city = caregiver.city;
        user.caregiver.email = caregiver.email;
        user.caregiver.state = caregiver.state;
        user.caregiver.street = caregiver.street;
        user.caregiver.zipcode = caregiver.zipcode;
      } else {
        const createCaregiver = this.caregiverRepo.create({
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
        });
        user.caregiver = createCaregiver;
      }
      return await this.userRepo.save(user);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //createHomeRep
  async createHomeRep(
    createHomeRepDto: CreateAdultHomeRepresentativeRequestDto
  ): Promise<UserResponseDto> {
    try {
      const user = await this.userRepo.findOne({
        where: {
          id: createHomeRepDto.userId,
        },
        relations: { adultHomeRepresentative: true, roles: true },
      });
      if (!user)
        throw new HttpException("User not created yet", HttpStatus.NOT_FOUND);

      const getHome = await this.adultHomeService.getAdultHomeById(
        createHomeRepDto.adultHomeId
      );
      const homeRepRole = await this.rolesServices.getRoleByName(
        RoleEnum.HOMEREPRESENTATIVE
      );
      user.adultHomeRepresentative = this.adultHomeRepRepo.create({
        firstName: createHomeRepDto.firstName,
        lastName: createHomeRepDto.lastName,
        email: createHomeRepDto.email,
        phoneNumber: createHomeRepDto.phoneNumber,
        jobTitle: createHomeRepDto.jobTitle,
        adultHomeId: getHome.id,
      });
      const savedUser = await this.userRepo.save(user);
      const {password, ...result}=savedUser
      return result
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all homeRep
  async getAllHomeRep(): Promise<UserResponseDto[]> {
    try {
      const homeReps = await this.userRepo.find({
        where: {
          roles: {
            name: RoleEnum.HOMEREPRESENTATIVE,
          },
        },
        relations: {
          roles: true,
          adultHomeRepresentative: true,
        },
      });
      return homeReps;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
