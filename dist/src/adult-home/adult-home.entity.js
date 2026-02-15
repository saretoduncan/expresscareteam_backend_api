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
exports.AdultHome = void 0;
const job_entity_1 = require("../jobs/job.entity");
const adult_home_representative_entity_1 = require("../users/adult-home-representative.entity");
const typeorm_1 = require("typeorm");
let AdultHome = class AdultHome {
    id;
    name;
    email;
    phone;
    city;
    state;
    street;
    zipcode;
    website;
    homeDescription;
    representative;
    jobs;
    createdAt;
    updatedAt;
};
exports.AdultHome = AdultHome;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], AdultHome.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHome.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], AdultHome.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHome.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHome.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHome.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHome.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHome.prototype, "zipcode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdultHome.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "text" }),
    __metadata("design:type", String)
], AdultHome.prototype, "homeDescription", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => adult_home_representative_entity_1.AdultHomeRepresentative, (rep) => rep.adultHome),
    __metadata("design:type", adult_home_representative_entity_1.AdultHomeRepresentative)
], AdultHome.prototype, "representative", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => job_entity_1.JobsEntity, (job) => job.adult_home),
    __metadata("design:type", Array)
], AdultHome.prototype, "jobs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], AdultHome.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], AdultHome.prototype, "updatedAt", void 0);
exports.AdultHome = AdultHome = __decorate([
    (0, typeorm_1.Entity)({ name: "adult_homes" })
], AdultHome);
//# sourceMappingURL=adult-home.entity.js.map