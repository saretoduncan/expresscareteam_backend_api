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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roles_entity_1 = require("./roles.entity");
const typeorm_2 = require("typeorm");
const enums_1 = require("../common/enums");
let RolesService = class RolesService {
    roleRepo;
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    onModuleInit() {
        const createSeedRoles = async () => {
            const roles = [
                { name: enums_1.RoleEnum.ADMIN },
                { name: enums_1.RoleEnum.CAREGIVER },
                { name: enums_1.RoleEnum.HOMEREPRESENTATIVE },
            ];
            for (const role of roles) {
                const exists = await this.roleRepo.findOne({
                    where: {
                        name: role.name,
                    },
                });
                if (!exists) {
                    await this.roleRepo.save(role);
                }
            }
        };
        createSeedRoles();
    }
    async createRole(role) {
        const existingRole = await this.roleRepo.findOne({
            where: {
                name: role,
            },
        });
        if (existingRole) {
            throw new common_1.HttpException("Role already exists", common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const newRole = this.roleRepo.create({
                name: role,
            });
            return await this.roleRepo.save(newRole);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getRoleByName(role) {
        try {
            const getrole = await this.roleRepo.findOne({
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
            const role = await this.roleRepo.findOne({
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
            const roles = await this.roleRepo.find();
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
            const getRole = await this.getRoleById(id);
            getRole.name = role;
            const updateRole = await this.roleRepo.save(getRole);
            return updateRole;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteRole(id) {
        try {
            const role = await this.roleRepo.findOne({
                where: {
                    id: id,
                },
            });
            if (!role) {
                throw new common_1.HttpException("Role not found", common_1.HttpStatus.NOT_FOUND);
            }
            await this.roleRepo.delete(id);
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
    __param(0, (0, typeorm_1.InjectRepository)(roles_entity_1.Roles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map