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
exports.UploadCaregiverRequirementsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UploadCaregiverRequirementsDto {
    backgroundCheck;
    firstAid_cpr;
    figurePrint;
    safetyOrientation;
    tuberculosisStepDate;
    longTermCare;
    foodCard;
    nurseDelegation;
    dementiaSpecialist;
    mentalHealthSpeciality;
    administrationTrainingSpecialist;
    continuingEducation;
    developmentDisability;
    diabetesSpecialtyTraining;
}
exports.UploadCaregiverRequirementsDto = UploadCaregiverRequirementsDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Background check document (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "backgroundCheck", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "First Aid and CPR certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "firstAid_cpr", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Fingerprint clearance document (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "figurePrint", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Safety orientation certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "safetyOrientation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Tuberculosis step date document (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "tuberculosisStepDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Long-term care training certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "longTermCare", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "Food card certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "foodCard", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Nurse delegation certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "nurseDelegation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Dementia specialist certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "dementiaSpecialist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Mental health specialty document (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "mentalHealthSpeciality", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Administration training specialist certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "administrationTrainingSpecialist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Continuing education certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "continuingEducation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Development disability training certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "developmentDisability", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        required: false,
        description: "Diabetes specialty training certificate (PDF only)",
        type: "string",
        format: "binary",
    }),
    __metadata("design:type", Array)
], UploadCaregiverRequirementsDto.prototype, "diabetesSpecialtyTraining", void 0);
//# sourceMappingURL=carigiver-requirements.dtos.js.map