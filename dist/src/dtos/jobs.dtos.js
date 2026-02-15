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
exports.JobApplicationResponseDto = exports.JobsDtoRes = exports.JobApplicationStatusRequestDto = exports.CreateJobApplicationDto = exports.IsJobFilledDtoReq = exports.UpdateJobDto = exports.PostJobDtoReq = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const job_entity_1 = require("../jobs/job.entity");
const job_application_entity_1 = require("../jobs/job_application.entity");
class PostJobDtoReq {
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
    adult_home_id;
}
exports.PostJobDtoReq = PostJobDtoReq;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: job_entity_1.EJOBROLE,
        example: job_entity_1.EJOBROLE.HCA,
        description: "Role required for the job(HCA or CNA)",
    }),
    (0, class_validator_1.IsEnum)(job_entity_1.EJOBROLE),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "job_role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: job_entity_1.EJOBTYPE,
        example: job_entity_1.EJOBTYPE.FULL_TIME,
        description: "Type of job (full-time or part-time)",
    }),
    (0, class_validator_1.IsEnum)(job_entity_1.EJOBTYPE),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "job_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2026-02-10",
        description: "Job start date (YYYY-MM-DD)",
    }),
    (0, class_validator_1.IsISO8601)({ strict: false }),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: "2026-02-20",
        description: "Job end date (YYYY-MM-DD)",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsISO8601)({ strict: false }),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "08:00",
        description: "Shift start time (HH:mm)",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "shift_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "17:00",
        description: "Shift end time (HH:mm)",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "shift_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "150.00",
        description: "Payment rate per shift/hour",
    }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "payment_rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        minimum: 1,
        description: "Number of staff needed to fill the shift",
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PostJobDtoReq.prototype, "staff_needed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ["CPR", "ICU"],
        description: "Required certificates for the job",
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PostJobDtoReq.prototype, "certificates_needed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: true,
        description: "Marks whether the job is urgent",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PostJobDtoReq.prototype, "is_urgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "c8b2f9a4-91c3-4f11-ae3a-6a99b6b6f222",
        description: "Adult home / facility ID",
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PostJobDtoReq.prototype, "adult_home_id", void 0);
class UpdateJobDto extends (0, swagger_1.PartialType)(PostJobDtoReq) {
}
exports.UpdateJobDto = UpdateJobDto;
class IsJobFilledDtoReq {
    isJobFilled;
}
exports.IsJobFilledDtoReq = IsJobFilledDtoReq;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: "update job status if it its field",
        type: Boolean,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], IsJobFilledDtoReq.prototype, "isJobFilled", void 0);
class CreateJobApplicationDto {
    caregiver_id;
    job_id;
}
exports.CreateJobApplicationDto = CreateJobApplicationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "9f2c3d6a-8a9e-4c6a-bc77-123456789abc",
        description: "Caregiver ID applying for the job",
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateJobApplicationDto.prototype, "caregiver_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "3b7a1f10-91c2-4a1b-9f3d-abcdef123456",
        description: "Job ID being applied for",
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateJobApplicationDto.prototype, "job_id", void 0);
class JobApplicationStatusRequestDto {
    applicationId;
    homeId;
    caregiverId;
}
exports.JobApplicationStatusRequestDto = JobApplicationStatusRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "c8b2f9f4-91c3-4f11-ae3a-6a99b6b6f222",
        description: "Job application ID ",
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], JobApplicationStatusRequestDto.prototype, "applicationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "c8b2f9a4-91c3-4f11-ae3a-6a99b6b6f222",
        description: "Adult home / facility ID",
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], JobApplicationStatusRequestDto.prototype, "homeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "9f2c3d6a-8a9e-4c6a-bc77-123456789abc",
        description: "Caregiver ID applying for the job",
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], JobApplicationStatusRequestDto.prototype, "caregiverId", void 0);
class JobsDtoRes {
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
    createdAt;
    updatedAt;
}
exports.JobsDtoRes = JobsDtoRes;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobsDtoRes.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobsDtoRes.prototype, "job_role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: job_entity_1.EJOBTYPE }),
    __metadata("design:type", String)
], JobsDtoRes.prototype, "job_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], JobsDtoRes.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], JobsDtoRes.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobsDtoRes.prototype, "shift_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobsDtoRes.prototype, "shift_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobsDtoRes.prototype, "payment_rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], JobsDtoRes.prototype, "staff_needed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], JobsDtoRes.prototype, "certificates_needed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], JobsDtoRes.prototype, "is_urgent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], JobsDtoRes.prototype, "is_filled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], JobsDtoRes.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], JobsDtoRes.prototype, "updatedAt", void 0);
class JobApplicationResponseDto {
    id;
    caregiver_id;
    job_id;
    status;
    appliedAt;
    acceptedAt;
    rejectedAt;
    updatedAt;
}
exports.JobApplicationResponseDto = JobApplicationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobApplicationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobApplicationResponseDto.prototype, "caregiver_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobApplicationResponseDto.prototype, "job_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: job_application_entity_1.EAPPLICATIONSTATUS }),
    __metadata("design:type", String)
], JobApplicationResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], JobApplicationResponseDto.prototype, "appliedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Object)
], JobApplicationResponseDto.prototype, "acceptedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Object)
], JobApplicationResponseDto.prototype, "rejectedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], JobApplicationResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=jobs.dtos.js.map