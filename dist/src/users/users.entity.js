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
exports.User = void 0;
const caregiver_entity_1 = require("./caregiver.entity");
const roles_entity_1 = require("../roles/roles.entity");
const typeorm_1 = require("typeorm");
const adult_home_representative_entity_1 = require("./adult-home-representative.entity");
let User = class User {
    id;
    username;
    password;
    caregiver;
    adultHomeRepresentative;
    roles;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => caregiver_entity_1.Caregiver, (caregiver) => caregiver.user, { cascade: true }),
    __metadata("design:type", caregiver_entity_1.Caregiver)
], User.prototype, "caregiver", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => adult_home_representative_entity_1.AdultHomeRepresentative, (homeRep) => homeRep.user, {
        cascade: true,
    }),
    __metadata("design:type", adult_home_representative_entity_1.AdultHomeRepresentative)
], User.prototype, "adultHomeRepresentative", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => roles_entity_1.Roles, (role) => role.users, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: "users" })
], User);
//# sourceMappingURL=users.entity.js.map