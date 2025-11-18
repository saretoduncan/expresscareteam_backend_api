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
exports.AdultHomeRepresentative = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const adult_home_entity_1 = require("../adult-home/adult-home.entity");
let AdultHomeRepresentative = class AdultHomeRepresentative {
    id;
    firstName;
    lastName;
    email;
    phoneNumber;
    jobTitle;
    userId;
    adultHomeId;
    user;
    adultHome;
};
exports.AdultHomeRepresentative = AdultHomeRepresentative;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "jobTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdultHomeRepresentative.prototype, "adultHomeId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User, user => user.adultHomeRepresentative),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", users_entity_1.User)
], AdultHomeRepresentative.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => adult_home_entity_1.AdultHome, home => home.reps),
    (0, typeorm_1.JoinColumn)({ name: 'adultHomeId' }),
    __metadata("design:type", adult_home_entity_1.AdultHome)
], AdultHomeRepresentative.prototype, "adultHome", void 0);
exports.AdultHomeRepresentative = AdultHomeRepresentative = __decorate([
    (0, typeorm_1.Entity)("adult_home_representatives")
], AdultHomeRepresentative);
//# sourceMappingURL=adult-home-representative.entity.js.map