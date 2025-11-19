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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("../roles/roles.service");
const bcrypt = require("bcrypt");
const enums_1 = require("../common/enums");
const adult_home_service_1 = require("../adult-home/adult-home.service");
const users_entity_1 = require("./users.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const caregiver_entity_1 = require("./caregiver.entity");
const adult_home_representative_entity_1 = require("./adult-home-representative.entity");
let UsersService = class UsersService {
    userRepo;
    caregiverRepo;
    adultHomeRepRepo;
    rolesServices;
    adultHomeService;
    constructor(userRepo, caregiverRepo, adultHomeRepRepo, rolesServices, adultHomeService) {
        this.userRepo = userRepo;
        this.caregiverRepo = caregiverRepo;
        this.adultHomeRepRepo = adultHomeRepRepo;
        this.rolesServices = rolesServices;
        this.adultHomeService = adultHomeService;
    }
    async createUser(user) {
        try {
            const getUser = await this.userRepo.findOne({
                where: {
                    username: user.email,
                },
            });
            if (getUser) {
                throw new common_1.HttpException("User already exists", common_1.HttpStatus.BAD_REQUEST);
            }
            const getRole = await this.rolesServices.getRoleByName(user.role);
            const password = await bcrypt.hash(user.password, 10);
            const newUser = this.userRepo.create({
                username: user.email,
                password: password,
            });
            newUser.roles = [getRole];
            const savedUser = await this.userRepo.save(newUser);
            return await this.getUserById(savedUser.id);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserById(id) {
        try {
            const user = await this.userRepo.findOne({
                where: {
                    id,
                },
                relations: ["roles", "caregiver", "adultHomeRepresentative"],
            });
            if (!user) {
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
            }
            return {
                username: user.username,
                id: user.id,
                roles: user.roles,
                caregiver: user.caregiver ?? null,
                adultHomeRepresentative: user.adultHomeRepresentative ?? null,
            };
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserByUsername(username) {
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
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
            }
            return {
                username: user.username,
                id: user.id,
                adultHomeRepresentative: user.adultHomeRepresentative ?? null,
                caregiver: user.caregiver ?? null,
                roles: user.roles,
            };
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllUsers() {
        const users = await this.userRepo.find();
        if (users.length === 0) {
            throw new common_1.HttpException("No users found", common_1.HttpStatus.NOT_FOUND);
        }
        return users;
    }
    async updatePassword(id, password) {
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
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
            await this.userRepo.save(user);
            return;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async addRole(userId, roleId) {
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
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
            const role = await this.rolesServices.getRoleById(roleId);
            if (user.roles.includes(role)) {
                throw new common_1.HttpException("User already has the role", common_1.HttpStatus.BAD_REQUEST);
            }
            user.roles.push(role);
            const updateUser = await this.userRepo.save(user);
            return updateUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    revokeRole = async (userId, roleId) => {
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
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
            const role = await this.rolesServices.getRoleById(roleId);
            if (!user.roles.includes(role)) {
                throw new common_1.HttpException("User does not have the role", common_1.HttpStatus.BAD_REQUEST);
            }
            user.roles = user.roles.filter((r) => r.id === role.id);
            const updateUser = await this.userRepo.save(user);
            return updateUser;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
    async deleteUser(id) {
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
                throw new common_1.HttpException("User to be deleted not found", common_1.HttpStatus.BAD_REQUEST);
            await this.userRepo.delete(user.id);
            return;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async addCaregiver(caregiver) {
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
                throw new common_1.HttpException("User not created yet", common_1.HttpStatus.NOT_FOUND);
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
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllCaregivers() {
        try {
            const caregivers = await this.userRepo.find({
                relations: {
                    roles: true,
                    caregiver: true,
                    adultHomeRepresentative: true,
                },
                where: {
                    roles: {
                        name: enums_1.RoleEnum.CAREGIVER,
                    },
                },
            });
            return caregivers.map((user) => {
                const { password, ...result } = user;
                return result;
            });
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCaregiver(caregiver) {
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
                throw new common_1.HttpException("User not found", common_1.HttpStatus.NOT_FOUND);
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
            }
            else {
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
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createHomeRep(createHomeRepDto) {
        try {
            const user = await this.userRepo.findOne({
                where: {
                    id: createHomeRepDto.userId,
                },
                relations: { adultHomeRepresentative: true, roles: true },
            });
            if (!user)
                throw new common_1.HttpException("User not created yet", common_1.HttpStatus.NOT_FOUND);
            const getHome = await this.adultHomeService.getAdultHomeById(createHomeRepDto.adultHomeId);
            const homeRepRole = await this.rolesServices.getRoleByName(enums_1.RoleEnum.HOMEREPRESENTATIVE);
            user.adultHomeRepresentative = this.adultHomeRepRepo.create({
                firstName: createHomeRepDto.firstName,
                lastName: createHomeRepDto.lastName,
                email: createHomeRepDto.email,
                phoneNumber: createHomeRepDto.phoneNumber,
                jobTitle: createHomeRepDto.jobTitle,
                adultHomeId: getHome.id,
            });
            const savedUser = await this.userRepo.save(user);
            const { password, ...result } = savedUser;
            return result;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllHomeRep() {
        try {
            const homeReps = await this.userRepo.find({
                where: {
                    roles: {
                        name: enums_1.RoleEnum.HOMEREPRESENTATIVE,
                    },
                },
                relations: {
                    roles: true,
                    adultHomeRepresentative: true,
                },
            });
            return homeReps;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_2.InjectRepository)(caregiver_entity_1.Caregiver)),
    __param(2, (0, typeorm_2.InjectRepository)(adult_home_representative_entity_1.AdultHomeRepresentative)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        roles_service_1.RolesService,
        adult_home_service_1.AdultHomeService])
], UsersService);
//# sourceMappingURL=users.service.js.map