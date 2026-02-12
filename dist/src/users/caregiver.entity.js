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
exports.Caregiver = void 0;
const caregiver_requirements_entity_1 = require("../caregiver-requirements/caregiver-requirements.entity");
const job_application_entity_1 = require("../jobs/job_application.entity");
const users_entity_1 = require("./users.entity");
const typeorm_1 = require("typeorm");
let Caregiver = class Caregiver {
    id;
    firstName;
    lastName;
    email;
    dateOfBirth;
    gender;
    phoneNumber;
    city;
    state;
    street;
    zipcode;
    userId;
    user;
    requirements;
    JobApplications;
    createdAt;
    updatedAt;
};
exports.Caregiver = Caregiver;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Caregiver.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Caregiver.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz" }),
    __metadata("design:type", Date)
], Caregiver.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Caregiver.prototype, "zipcode", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Caregiver.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User, (user) => user.caregiver),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", users_entity_1.User)
], Caregiver.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => caregiver_requirements_entity_1.CaregiverRequirements, (requirements) => requirements.caregiver),
    __metadata("design:type", caregiver_requirements_entity_1.CaregiverRequirements)
], Caregiver.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => job_application_entity_1.JobApplications, (application) => application),
    __metadata("design:type", Array)
], Caregiver.prototype, "JobApplications", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Caregiver.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Caregiver.prototype, "updatedAt", void 0);
exports.Caregiver = Caregiver = __decorate([
    (0, typeorm_1.Entity)({ name: "caregivers" })
], Caregiver);
//# sourceMappingURL=caregiver.entity.js.map