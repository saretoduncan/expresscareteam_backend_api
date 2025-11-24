"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaregiverRequirementsModule = void 0;
const common_1 = require("@nestjs/common");
const caregiver_requirements_service_1 = require("./caregiver-requirements.service");
const caregiver_requirements_controller_1 = require("./caregiver-requirements.controller");
const typeorm_1 = require("@nestjs/typeorm");
const caregiver_requirements_entity_1 = require("./caregiver-requirements.entity");
const caregiver_entity_1 = require("../users/caregiver.entity");
const s3_service_1 = require("./s3.service");
let CaregiverRequirementsModule = class CaregiverRequirementsModule {
};
exports.CaregiverRequirementsModule = CaregiverRequirementsModule;
exports.CaregiverRequirementsModule = CaregiverRequirementsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([caregiver_requirements_entity_1.CaregiverRequirements, caregiver_entity_1.Caregiver])],
        providers: [caregiver_requirements_service_1.CaregiverRequirementsService, s3_service_1.S3Services],
        controllers: [caregiver_requirements_controller_1.CaregiverRequirementsController],
        exports: [caregiver_requirements_service_1.CaregiverRequirementsService],
    })
], CaregiverRequirementsModule);
//# sourceMappingURL=caregiver-requirements.module.js.map