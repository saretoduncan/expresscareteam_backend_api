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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const roles_service_1 = require("../roles/roles.service");
const bcrypt = require("bcrypt");
const enums_1 = require("../common/enums");
const adult_home_service_1 = require("../adult-home/adult-home.service");
let UsersService = class UsersService {
    prismaService;
    rolesServices;
    adultHomeService;
    constructor(prismaService, rolesServices, adultHomeService) {
        this.prismaService = prismaService;
        this.rolesServices = rolesServices;
        this.adultHomeService = adultHomeService;
    }
    async createUser(user) {
        try {
            const getUser = await this.prismaService.user.findUnique({
                where: {
                    username: user.email,
                },
            });
            if (getUser) {
                throw new common_1.HttpException("User already exists", common_1.HttpStatus.BAD_REQUEST);
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
                omit: {
                    password: true,
                },
            });
            return newUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserById(id) {
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
                omit: {
                    password: true,
                },
            });
            if (!user) {
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
            }
            return user;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserByUsername(username) {
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
                omit: {
                    password: true,
                },
            });
            if (!user) {
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
            }
            return user;
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllUsers() {
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
            omit: {
                password: true,
            },
        });
        if (users.length === 0) {
            throw new common_1.HttpException("No users found", common_1.HttpStatus.NOT_FOUND);
        }
        return users;
    }
    async updatePassword(id, password) {
        try {
            const user = await this.getUserById(id);
            const hashedPassword = await bcrypt.hash(password, 10);
            await this.prismaService.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    password: hashedPassword,
                },
            });
            return;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async addRole(userId, roleId) {
        try {
            const user = await this.getUserById(userId);
            const role = await this.rolesServices.getRoleById(roleId);
            if (user.roles.includes(role)) {
                throw new common_1.HttpException("User already has the role", common_1.HttpStatus.BAD_REQUEST);
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
                omit: {
                    password: true,
                },
            });
            return updateUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    revokeRole = async (userId, roleId) => {
        try {
            const user = await this.getUserById(userId);
            const role = await this.rolesServices.getRoleById(roleId);
            if (!user.roles.includes(role)) {
                throw new common_1.HttpException("User does not have the role", common_1.HttpStatus.BAD_REQUEST);
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
                omit: {
                    password: true,
                },
            });
            return updateUser;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
    async deleteUser(id) {
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
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async addCaregiver(caregiver) {
        try {
            const user = await this.getUserById(caregiver.userId);
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
                            dateOfBirth: new Date(caregiver.dateOfBirth),
                            gender: caregiver.gender,
                            phoneNumber: caregiver.phoneNumber,
                            city: caregiver.city,
                            state: caregiver.state,
                            street: caregiver.street,
                            zipcode: caregiver.zipcode,
                        },
                    },
                },
                include: {
                    caregiver: true,
                    adultHomeRepresentative: true,
                    roles: true,
                },
                omit: {
                    password: true,
                },
            });
            return updatedUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllCaregivers() {
        try {
            const caregivers = await this.prismaService.user.findMany({
                where: {
                    roles: {
                        some: {
                            name: enums_1.RoleEnum.CAREGIVER,
                        },
                    },
                },
                include: {
                    caregiver: true,
                    adultHomeRepresentative: true,
                    roles: true,
                },
                omit: {
                    password: true,
                },
            });
            return caregivers;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCaregiver(caregiver) {
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
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createHomeRep(createHomeRepDto) {
        try {
            const user = await this.getUserById(createHomeRepDto.userId);
            const getHome = await this.adultHomeService.getAdultHomeById(createHomeRepDto.adultHomeId);
            const homeRepRole = await this.rolesServices.getRoleByName(enums_1.RoleEnum.HOMEREPRESENTATIVE);
            const updateUser = await this.prismaService.user.update({
                where: {
                    id: user.id,
                },
                include: {
                    adultHomeRepresentative: true,
                    roles: true,
                    caregiver: true,
                },
                omit: { password: true },
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
                },
            });
            return updateUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllHomeRep() {
        try {
            const reps = await this.prismaService.user.findMany({
                where: {
                    roles: {
                        some: {
                            name: enums_1.RoleEnum.HOMEREPRESENTATIVE,
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
                omit: {
                    password: true,
                },
            });
            return reps;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        roles_service_1.RolesService,
        adult_home_service_1.AdultHomeService])
], UsersService);
//# sourceMappingURL=users.service.js.map