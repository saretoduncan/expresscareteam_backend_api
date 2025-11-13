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
exports.AdultHomeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdultHomeService = class AdultHomeService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createAdultHome(createAdultHomeDto) {
        try {
            const home = await this.prismaService.adultHome.findUnique({
                where: {
                    email: createAdultHomeDto.email,
                },
                include: {
                    reps: true,
                },
            });
            if (home) {
                throw new Error("Home already exists");
            }
            const newHome = await this.prismaService.adultHome.create({
                data: {
                    email: createAdultHomeDto.email,
                    name: createAdultHomeDto.name,
                    phone: createAdultHomeDto.phone,
                    city: createAdultHomeDto.city,
                    state: createAdultHomeDto.state,
                    street: createAdultHomeDto.street,
                    zipcode: createAdultHomeDto.zipcode,
                    website: createAdultHomeDto.website,
                },
                include: {
                    reps: true,
                },
            });
            return newHome;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAdultHomeById(id) {
        try {
            const home = await this.prismaService.adultHome.findUnique({
                where: {
                    id,
                },
                include: {
                    reps: true,
                },
            });
            if (!home) {
                throw new common_1.HttpException("Home not found", common_1.HttpStatus.NOT_FOUND);
            }
            return home;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllAdultHomes() {
        try {
            const homes = await this.prismaService.adultHome.findMany({
                include: {
                    reps: true,
                },
            });
            if (!homes) {
                throw new common_1.HttpException("No homes found", common_1.HttpStatus.NOT_FOUND);
            }
            return homes;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateHome(id, createAdultHomeDto) {
        try {
            const home = await this.getAdultHomeById(id);
            const updatedHome = await this.prismaService.adultHome.update({
                where: {
                    id: home.id,
                },
                data: {
                    name: createAdultHomeDto.name,
                    email: createAdultHomeDto.email,
                    phone: createAdultHomeDto.phone,
                    city: createAdultHomeDto.city,
                    state: createAdultHomeDto.state,
                    zipcode: createAdultHomeDto.zipcode,
                    street: createAdultHomeDto.street,
                    website: createAdultHomeDto.website,
                },
                include: {
                    reps: true,
                },
            });
            return updatedHome;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AdultHomeService = AdultHomeService;
exports.AdultHomeService = AdultHomeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdultHomeService);
//# sourceMappingURL=adult-home.service.js.map