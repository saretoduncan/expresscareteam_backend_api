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
exports.CaregiverRequirementsController = void 0;
const common_1 = require("@nestjs/common");
const caregiver_requirements_service_1 = require("./caregiver-requirements.service");
const multer_config_1 = require("../config/multer.config");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const carigiver_requirements_dtos_1 = require("../dtos/carigiver-requirements.dtos");
let CaregiverRequirementsController = class CaregiverRequirementsController {
    caregiverRequirementsService;
    constructor(caregiverRequirementsService) {
        this.caregiverRequirementsService = caregiverRequirementsService;
    }
    async uploadCaregiverRequirements(caregiverId, files) {
        if (!caregiverId.trim()) {
            throw new common_1.BadRequestException("Caregiver ID is required");
        }
        const requiredFields = [
            "backgroundCheck",
            "firstAid_cpr",
            "figurePrint",
            "safetyOrientation",
            "tuberculosisStepDate",
            "foodCard",
        ];
        for (const field of requiredFields) {
            if (!files[field]) {
                throw new common_1.BadRequestException(`${field} is required.`);
            }
        }
        return await this.caregiverRequirementsService.createCaregiverRequirements({
            backgroundCheck: files.backgroundCheck[0].path,
            caregiverId: caregiverId,
            firstAid_cpr: files.firstAid_cpr[0].path,
            figurePrint: files.figurePrint[0].path,
            safetyOrientation: files.safetyOrientation[0].path,
            foodCard: files.foodCard[0].path,
            tuberculosisStepDate: files.tuberculosisStepDate[0].path,
            longTermCare: files.longTermCare && files.longTermCare[0].path,
            nurseDelegation: files.nurseDelegation && files.nurseDelegation[0].path,
            dementiaSpecialist: files.dementiaSpecialist && files.dementiaSpecialist[0].path,
            mentalHealthSpeciality: files.mentalHealthSpeciality && files.mentalHealthSpeciality[0].path,
            administrationTrainingSpecialist: files.administrationTrainingSpecialist &&
                files.administrationTrainingSpecialist[0].path,
            continuingEducation: files.continuingEducation && files.continuingEducation[0].path,
            developmentDisability: files.developmentDisability && files.developmentDisability[0].path,
            diabetesSpecialtyTraining: files.diabetesSpecialtyTraining &&
                files.diabetesSpecialtyTraining[0].path,
        });
    }
    async getCaregiverRequirementsById(id) {
        if (!id.trim())
            throw new common_1.BadRequestException("Id is required");
        return await this.caregiverRequirementsService.getCaregiverRequirementsById(id);
    }
    async getCaregiverRequirementsByCaregiverId(caregiverId) {
        if (!caregiverId.trim())
            throw new common_1.BadRequestException("Caregiver ID is required");
        return await this.caregiverRequirementsService.getCaregiverRequirementsByCaregiverId(caregiverId);
    }
};
exports.CaregiverRequirementsController = CaregiverRequirementsController;
__decorate([
    (0, common_1.Post)("/upload"),
    (0, swagger_1.ApiQuery)({ name: "caregiverId", required: true }),
    (0, swagger_1.ApiBody)({ type: carigiver_requirements_dtos_1.UploadCaregiverRequirementsDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: "backgroundCheck", maxCount: 1 },
        { name: "firstAid_cpr", maxCount: 1 },
        { name: "figurePrint", maxCount: 1 },
        { name: "safetyOrientation", maxCount: 1 },
        { name: "tuberculosisStepDate", maxCount: 1 },
        { name: "longTermCare", maxCount: 1 },
        { name: "foodCard", maxCount: 1 },
        { name: "nurseDelegation", maxCount: 1 },
        { name: "dementiaSpecialist", maxCount: 1 },
        { name: "mentalHealthSpeciality", maxCount: 1 },
        { name: "administrationTrainingSpecialist", maxCount: 1 },
        { name: "continuingEducation", maxCount: 1 },
        { name: "developmentDisability", maxCount: 1 },
        { name: "diabetesSpecialtyTraining", maxCount: 1 },
    ], multer_config_1.mutlerConfig)),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    __param(0, (0, common_1.Query)("caregiverId")),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, carigiver_requirements_dtos_1.UploadCaregiverRequirementsDto]),
    __metadata("design:returntype", Promise)
], CaregiverRequirementsController.prototype, "uploadCaregiverRequirements", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CaregiverRequirementsController.prototype, "getCaregiverRequirementsById", null);
__decorate([
    (0, common_1.Get)("caregiver"),
    __param(0, (0, common_1.Query)("caregiverId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CaregiverRequirementsController.prototype, "getCaregiverRequirementsByCaregiverId", null);
exports.CaregiverRequirementsController = CaregiverRequirementsController = __decorate([
    (0, common_1.Controller)("caregiver-requirements"),
    __metadata("design:paramtypes", [caregiver_requirements_service_1.CaregiverRequirementsService])
], CaregiverRequirementsController);
//# sourceMappingURL=caregiver-requirements.controller.js.map