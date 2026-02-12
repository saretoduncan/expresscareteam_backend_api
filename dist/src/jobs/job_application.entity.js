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
exports.JobApplications = exports.EAPPLICATIONSTATUS = void 0;
const typeorm_1 = require("typeorm");
const job_entity_1 = require("./job.entity");
const caregiver_entity_1 = require("../users/caregiver.entity");
var EAPPLICATIONSTATUS;
(function (EAPPLICATIONSTATUS) {
    EAPPLICATIONSTATUS["PENDING"] = "PENDING";
    EAPPLICATIONSTATUS["ACCEPTED"] = "ACCEPTED";
    EAPPLICATIONSTATUS["REJECTED"] = "REJECTED";
})(EAPPLICATIONSTATUS || (exports.EAPPLICATIONSTATUS = EAPPLICATIONSTATUS = {}));
let JobApplications = class JobApplications {
    id;
    caregiver_id;
    caregiver;
    job_id;
    job;
    status;
    appliedAt;
    acceptedAt;
    rejectedAt;
    updatedAt;
};
exports.JobApplications = JobApplications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], JobApplications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobApplications.prototype, "caregiver_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => caregiver_entity_1.Caregiver, (caregiver) => caregiver.JobApplications, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "caregiver_id" }),
    __metadata("design:type", caregiver_entity_1.Caregiver)
], JobApplications.prototype, "caregiver", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobApplications.prototype, "job_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => job_entity_1.JobsEntity, (job) => job.JobApplications, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "jobId" }),
    __metadata("design:type", job_entity_1.JobsEntity)
], JobApplications.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: EAPPLICATIONSTATUS,
        default: EAPPLICATIONSTATUS.PENDING,
    }),
    __metadata("design:type", String)
], JobApplications.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], JobApplications.prototype, "appliedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Object)
], JobApplications.prototype, "acceptedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Object)
], JobApplications.prototype, "rejectedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], JobApplications.prototype, "updatedAt", void 0);
exports.JobApplications = JobApplications = __decorate([
    (0, typeorm_1.Entity)({ name: "job_applications" })
], JobApplications);
//# sourceMappingURL=job_application.entity.js.map