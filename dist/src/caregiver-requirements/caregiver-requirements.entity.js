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
exports.CaregiverRequirements = void 0;
const caregiver_entity_1 = require("../users/caregiver.entity");
const typeorm_1 = require("typeorm");
let CaregiverRequirements = class CaregiverRequirements {
    id;
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
    caregiverId;
    caregiver;
};
exports.CaregiverRequirements = CaregiverRequirements;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "backgroundCheck", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "firstAid_cpr", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "figurePrint", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "safetyOrientation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "tuberculosisStepDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "longTermCare", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "foodCard", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "nurseDelegation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "dementiaSpecialist", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "mentalHealthSpeciality", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "administrationTrainingSpecialist", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "continuingEducation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "developmentDisability", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "diabetesSpecialtyTraining", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], CaregiverRequirements.prototype, "caregiverId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => caregiver_entity_1.Caregiver, (caregiver) => caregiver.requirements, { cascade: ['insert', 'update'] }),
    (0, typeorm_1.JoinColumn)({ name: "caregiverId" }),
    __metadata("design:type", caregiver_entity_1.Caregiver)
], CaregiverRequirements.prototype, "caregiver", void 0);
exports.CaregiverRequirements = CaregiverRequirements = __decorate([
    (0, typeorm_1.Entity)({ name: "caregiver-requirements" })
], CaregiverRequirements);
//# sourceMappingURL=caregiver-requirements.entity.js.map