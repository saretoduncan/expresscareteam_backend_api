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
exports.JobsEntity = exports.EJOBROLE = exports.EJOBTYPE = void 0;
const adult_home_entity_1 = require("../adult-home/adult-home.entity");
const typeorm_1 = require("typeorm");
const job_application_entity_1 = require("./job_application.entity");
var EJOBTYPE;
(function (EJOBTYPE) {
    EJOBTYPE["PART_TIME"] = "PART_TIME";
    EJOBTYPE["FULL_TIME"] = "FULL_TIME";
    EJOBTYPE["FILL_IN"] = "FILL_IN";
})(EJOBTYPE || (exports.EJOBTYPE = EJOBTYPE = {}));
var EJOBROLE;
(function (EJOBROLE) {
    EJOBROLE["HCA"] = "HCA";
    EJOBROLE["CNA"] = "CNA";
})(EJOBROLE || (exports.EJOBROLE = EJOBROLE = {}));
let JobsEntity = class JobsEntity {
    id;
    job_role;
    job_type;
    start_date;
    end_date;
    shift_start;
    shift_end;
    payment_rate;
    staff_needed;
    certificates_needed;
    is_urgent;
    is_filled;
    adult_home_id;
    adult_home;
    JobApplications;
    createdAt;
    updatedAt;
};
exports.JobsEntity = JobsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], JobsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: EJOBROLE }),
    __metadata("design:type", String)
], JobsEntity.prototype, "job_role", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobsEntity.prototype, "job_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], JobsEntity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", Date)
], JobsEntity.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "time" }),
    __metadata("design:type", String)
], JobsEntity.prototype, "shift_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "time" }),
    __metadata("design:type", String)
], JobsEntity.prototype, "shift_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 5, scale: 2 }),
    __metadata("design:type", String)
], JobsEntity.prototype, "payment_rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Number }),
    __metadata("design:type", Number)
], JobsEntity.prototype, "staff_needed", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true }),
    __metadata("design:type", Array)
], JobsEntity.prototype, "certificates_needed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], JobsEntity.prototype, "is_urgent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], JobsEntity.prototype, "is_filled", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JobsEntity.prototype, "adult_home_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => adult_home_entity_1.AdultHome, (adult_home) => adult_home.jobs),
    (0, typeorm_1.JoinColumn)({ name: "adult_home_id" }),
    __metadata("design:type", adult_home_entity_1.AdultHome)
], JobsEntity.prototype, "adult_home", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => job_application_entity_1.JobApplications, (application) => application.job),
    __metadata("design:type", Array)
], JobsEntity.prototype, "JobApplications", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], JobsEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], JobsEntity.prototype, "updatedAt", void 0);
exports.JobsEntity = JobsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "jobs" })
], JobsEntity);
//# sourceMappingURL=job.entity.js.map