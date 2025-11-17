import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RolesResponseDto } from "src/dtos/roles.dtos";
import { Roles } from "./roles.entity";
import { Repository } from "typeorm";

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Roles) private roleRepo: Repository<Roles>) {}
  //create role
  async createRole(role: string): Promise<RolesResponseDto> {
    const existingRole = await this.roleRepo.findOne({
      where: {
        name: role,
      },
    });
    if (existingRole) {
      throw new HttpException("Role already exists", HttpStatus.BAD_REQUEST);
    }
    try {
      const newRole = this.roleRepo.create({
        name: role,
      });

      return await this.roleRepo.save(newRole);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //update roles by name
  async getRoleByName(role: string): Promise<Roles> {
    try {
      const getrole = await this.roleRepo.findOne({
        where: {
          name: role,
        },
      });
      if (!getrole) {
        throw new HttpException("Role not found", HttpStatus.NOT_FOUND);
      }
      return getrole;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get role by id
  async getRoleById(id: string): Promise<Roles> {
    try {
      const role = await this.roleRepo.findOne({
        where: {
          id: id,
        },
      });
      if (!role) {
        throw new HttpException("Role not found", HttpStatus.NOT_FOUND);
      }
      return role;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //get all roles
  async getAllRoles(): Promise<RolesResponseDto[]> {
    try {
      const roles = await this.roleRepo.find();
      if (roles.length === 0) {
        throw new HttpException("No roles found", HttpStatus.NOT_FOUND);
      } else {
        return roles;
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //update role name
  async updateRole(id: string, role: string): Promise<RolesResponseDto> {
    try {
      const getRole = await this.getRoleById(id);
      getRole.name = role;

      const updateRole = await this.roleRepo.save(getRole);
      return updateRole;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //delete role
  async deleteRole(id: string) {
    try {
      const role = await this.roleRepo.findOne({
        where: {
          id: id,
        },
      });
      if (!role) {
        throw new HttpException("Role not found", HttpStatus.NOT_FOUND);
      }

      await this.roleRepo.delete(id);
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
