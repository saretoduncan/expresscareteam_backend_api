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
exports.CaregiverRequirementsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const caregiver_requirements_entity_1 = require("./caregiver-requirements.entity");
const typeorm_2 = require("@nestjs/typeorm");
const caregiver_entity_1 = require("../users/caregiver.entity");
let CaregiverRequirementsService = class CaregiverRequirementsService {
    caregiverRequirementsRepo;
    caregiverRepo;
    constructor(caregiverRequirementsRepo, caregiverRepo) {
        this.caregiverRequirementsRepo = caregiverRequirementsRepo;
        this.caregiverRepo = caregiverRepo;
    }
    async createCaregiverRequirements(caregiverRequirements) {
        try {
            const caregiver = await this.caregiverRepo.findOne({
                where: {
                    id: caregiverRequirements.caregiverId,
                },
                relations: {
                    requirements: true,
                },
            });
            if (!caregiver)
                throw new common_1.HttpException("Caregiver not found", common_1.HttpStatus.NOT_FOUND);
            const newCaregiverRequirement = this.caregiverRequirementsRepo.create({
                administrationTrainingSpecialist: caregiverRequirements.administrationTrainingSpecialist,
                backgroundCheck: caregiverRequirements.backgroundCheck,
                continuingEducation: caregiverRequirements.continuingEducation,
                dementiaSpecialist: caregiverRequirements.dementiaSpecialist,
                developmentDisability: caregiverRequirements.developmentDisability,
                diabetesSpecialtyTraining: caregiverRequirements.diabetesSpecialtyTraining,
                firstAid_cpr: caregiverRequirements.firstAid_cpr,
                figurePrint: caregiverRequirements.figurePrint,
                foodCard: caregiverRequirements.foodCard,
                longTermCare: caregiverRequirements.longTermCare,
                mentalHealthSpeciality: caregiverRequirements.mentalHealthSpeciality,
                nurseDelegation: caregiverRequirements.nurseDelegation,
                safetyOrientation: caregiverRequirements.safetyOrientation,
                tuberculosisStepDate: caregiverRequirements.tuberculosisStepDate,
                caregiverId: caregiver.id,
            });
            return await this.caregiverRequirementsRepo.save(newCaregiverRequirement);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCaregiverRequirementsById(id) {
        try {
            const caregiverRequirements = await this.caregiverRequirementsRepo.findOne({
                where: {
                    id: id,
                },
                relations: {
                    caregiver: true,
                },
            });
            if (!caregiverRequirements) {
                throw new common_1.HttpException("Requirements not found", common_1.HttpStatus.NOT_FOUND);
            }
            return caregiverRequirements;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCaregiverRequirementsByCaregiverId(caregiverId) {
        try {
            const caregiverRequirements = await this.caregiverRequirementsRepo.findOne({
                relations: { caregiver: true },
                where: {
                    caregiverId: caregiverId,
                },
            });
            if (!caregiverRequirements)
                throw new common_1.NotFoundException("Requirements not found");
            return caregiverRequirements;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateCaregiverRequirements(id, caregiverRequirements) {
        try {
            const updated = await this.caregiverRequirementsRepo.preload({
                id: id,
                ...caregiverRequirements,
            });
            if (!updated)
                throw new common_1.NotFoundException("Requirements not found");
            return await this.caregiverRequirementsRepo.save(updated);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteCaregiverRequirements(id) {
        try {
            const deleted = await this.caregiverRequirementsRepo.delete(id);
            if (!deleted) {
                throw new common_1.NotFoundException("Requirements not found");
            }
            return;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getfilesFromgs(filename) {
    }
};
exports.CaregiverRequirementsService = CaregiverRequirementsService;
exports.CaregiverRequirementsService = CaregiverRequirementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(caregiver_requirements_entity_1.CaregiverRequirements)),
    __param(1, (0, typeorm_2.InjectRepository)(caregiver_entity_1.Caregiver)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], CaregiverRequirementsService);
//# sourceMappingURL=caregiver-requirements.service.js.map