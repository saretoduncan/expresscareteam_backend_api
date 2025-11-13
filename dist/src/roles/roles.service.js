"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RolesService = class RolesService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createRole(role) {
        const existingRole = await this.prismaService.role.findUnique({
            where: {
                name: role,
            },
        });
        if (existingRole) {
            throw new common_1.HttpException("Role already exists", common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const newRole = await this.prismaService.role.create({
                data: {
                    name: role,
                },
            });
            return newRole;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getRoleByName(role) {
        try {
            const getrole = await this.prismaService.role.findUnique({
                where: {
                    name: role,
                },
            });
            if (!getrole) {
                throw new common_1.HttpException("Role not found", common_1.HttpStatus.NOT_FOUND);
            }
            return getrole;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getRoleById(id) {
        try {
            const role = await this.prismaService.role.findUnique({
                where: {
                    id: id,
                },
            });
            if (!role) {
                throw new common_1.HttpException("Role not found", common_1.HttpStatus.NOT_FOUND);
            }
            return role;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllRoles() {
        try {
            const roles = await this.prismaService.role.findMany();
            if (roles.length === 0) {
                throw new common_1.HttpException("No roles found", common_1.HttpStatus.NOT_FOUND);
            }
            else {
                return roles;
            }
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateRole(id, role) {
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
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteRole(id) {
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
                throw new common_1.HttpException("Role not found", common_1.HttpStatus.NOT_FOUND);
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
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
//# sourceMappingURL=roles.service.js.map