import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RolesResponseDto } from "src/dtos/roles.dtos";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RolesService {
  constructor(private readonly prismaService: PrismaService) {}
  //create role
  async createRole(role: string): Promise<RolesResponseDto> {
    const existingRole = await this.prismaService.role.findUnique({
      where: {
        name: role,
      },
    });
    if (existingRole) {
      throw new HttpException("Role already exists", HttpStatus.BAD_REQUEST);
    }
    try {
      const newRole = await this.prismaService.role.create({
        data: {
          name: role,
        },
      });
      return newRole;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //update roles by name
  async getRoleByName(role: string): Promise<RolesResponseDto> {
    try {
      const getrole = await this.prismaService.role.findUnique({
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
  async getRoleById(id: string): Promise<RolesResponseDto> {
    try {
      const role = await this.prismaService.role.findUnique({
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
      const roles = await this.prismaService.role.findMany();
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
      await this.getRoleById(id);
      const updateRole = this.prismaService.role.update({
        where: {
          id: id,
        },
        data: {
          name: role,
        },
      });
      return updateRole;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  //delete role
  async deleteRole(id: string) {
    try {
      const role = await this.prismaService.role.findUnique({
        where: {
          id: id,
        },
        include: {
          users: true,
        },
      });
      if (!role) {
        throw new HttpException("Role not found", HttpStatus.NOT_FOUND);
      }
      await this.prismaService.role.update({
        where: { id },
        data: {
          users: {
            set: [],
          },
        },
      });
      await this.prismaService.role.delete({
        where: {
          id: id,
        },
      });
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
