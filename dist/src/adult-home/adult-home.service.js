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
exports.AdultHomeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const adult_home_entity_1 = require("./adult-home.entity");
const typeorm_2 = require("typeorm");
let AdultHomeService = class AdultHomeService {
    adultHomeRepo;
    constructor(adultHomeRepo) {
        this.adultHomeRepo = adultHomeRepo;
    }
    async createAdultHome(createAdultHomeDto) {
        try {
            const home = await this.adultHomeRepo.findOne({
                where: {
                    email: createAdultHomeDto.email,
                },
                relations: {
                    reps: true,
                },
            });
            if (home) {
                throw new Error("Home using provided email already exists");
            }
            const newHome = this.adultHomeRepo.create({
                name: createAdultHomeDto.name,
                city: createAdultHomeDto.city,
                email: createAdultHomeDto.email,
                phone: createAdultHomeDto.phone,
                state: createAdultHomeDto.state,
                street: createAdultHomeDto.street,
                website: createAdultHomeDto.website,
                zipcode: createAdultHomeDto.zipcode,
                homeDescription: createAdultHomeDto.homeDescription
            });
            await this.adultHomeRepo.save(newHome);
            return newHome;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAdultHomeById(id) {
        try {
            const home = await this.adultHomeRepo.findOne({
                where: {
                    id: id,
                },
                relations: {
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
            const homes = await this.adultHomeRepo.find();
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
            home.name = createAdultHomeDto.name;
            home.city = createAdultHomeDto.city;
            home.email = createAdultHomeDto.email;
            home.phone = createAdultHomeDto.phone;
            home.state = createAdultHomeDto.state;
            home.street = createAdultHomeDto.street;
            home.website = createAdultHomeDto.website;
            home.zipcode = createAdultHomeDto.zipcode;
            return this.adultHomeRepo.save(home);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AdultHomeService = AdultHomeService;
exports.AdultHomeService = AdultHomeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(adult_home_entity_1.AdultHome)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdultHomeService);
//# sourceMappingURL=adult-home.service.js.map