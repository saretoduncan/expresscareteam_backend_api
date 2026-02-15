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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jobs_service_1 = require("./jobs.service");
const jobs_dtos_1 = require("../dtos/jobs.dtos");
const index_guards_1 = require("../guards/index.guards");
const roles_guards_1 = require("../guards/roles.guards");
const hasRoles_decorators_1 = require("../decorators/hasRoles.decorators");
const enums_1 = require("../common/enums");
let JobsController = class JobsController {
    jobsService;
    constructor(jobsService) {
        this.jobsService = jobsService;
    }
    async postJob(createJobDto) {
        return await this.jobsService.createJobs(createJobDto);
    }
    async getAllJobs() {
        return await this.jobsService.getAllJobs();
    }
    async getJobById(id) {
        if (!id || id.trim().length == 0)
            throw new common_1.BadRequestException("Job id is required");
        return await this.jobsService.getJobById(id);
    }
    async getAllJobsByHome(adultHomeId) {
        if (!adultHomeId || adultHomeId.trim().length == 0)
            throw new common_1.BadRequestException("Home id is required");
        return await this.jobsService.getAllJobsByHome(adultHomeId);
    }
    async getAllJobsByHomeAndStatus(adultHomeId, isFilled) {
        if (!adultHomeId || adultHomeId.trim().length == 0) {
            throw new common_1.BadRequestException("Home id is required");
        }
        if (isFilled === undefined ||
            isFilled === null ||
            typeof isFilled !== "boolean") {
            throw new common_1.BadRequestException("isFilled is require and should be a boolean value (true or false)");
        }
        return await this.jobsService.getAllJobsByHomeAndStatus(adultHomeId, isFilled);
    }
    async updateJob(jobId, adultHomeId, updateJobDto, req) {
        if (!jobId || jobId.trim().length == 0) {
            throw new common_1.BadRequestException("Job id is required");
        }
        if (!adultHomeId || adultHomeId.trim().length == 0) {
            throw new common_1.BadRequestException("Home id is required");
        }
        return await this.jobsService.updateJobById(jobId, adultHomeId, req.user.sub, updateJobDto);
    }
    async updateJobStatus(jobId, adultHomeId, isFilledDtoReq, req) {
        if (!jobId || jobId.trim().length == 0) {
            throw new common_1.BadRequestException("Job id is required");
        }
        if (!adultHomeId || adultHomeId.trim().length == 0) {
            throw new common_1.BadRequestException("Home id is required");
        }
        return await this.jobsService.updateJobStatus(jobId, adultHomeId, req.user.sub, isFilledDtoReq.isJobFilled);
    }
    async makeApplication(jobApplicationReq) {
        return await this.jobsService.makeApplication(jobApplicationReq.job_id, jobApplicationReq.caregiver_id);
    }
    async getApplicationById(jobApplicationId) {
        if (!jobApplicationId || jobApplicationId.trim().length == 0) {
            throw new common_1.BadRequestException("Job application id is required");
        }
        return await this.jobsService.getApplicationById(jobApplicationId);
    }
    async getAllApplicationsByJob(jobId) {
        if (jobId.trim().length == 0) {
            throw new common_1.BadRequestException("Job id is required");
        }
        return await this.jobsService.getAllApplicationsByJob(jobId);
    }
    async getAllApplicationsByCaregiver(caregiverId) {
        if (caregiverId.trim().length == 0) {
            throw new common_1.BadRequestException("Caregiver id is required");
        }
        return await this.jobsService.getAllApplicationsByCaregiver(caregiverId);
    }
    async acceptJobApplication(req, jobApplicationStatus) {
        return await this.jobsService.acceptApplication(jobApplicationStatus.applicationId, jobApplicationStatus.caregiverId, req.user.sub, jobApplicationStatus.homeId);
    }
    async rejectJobApplication(req, jobApplicationStatus) {
        return await this.jobsService.rejectApplication(jobApplicationStatus.applicationId, jobApplicationStatus.caregiverId, req.user.sub, jobApplicationStatus.homeId);
    }
};
exports.JobsController = JobsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Create a new job" }),
    (0, swagger_1.ApiBody)({ type: jobs_dtos_1.PostJobDtoReq }),
    (0, swagger_1.ApiResponse)({ status: 201, type: jobs_dtos_1.JobsDtoRes }),
    (0, hasRoles_decorators_1.HasRoles)(enums_1.RoleEnum.HOMEREPRESENTATIVE),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard, roles_guards_1.RolesGuard),
    (0, common_1.Post)("/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jobs_dtos_1.PostJobDtoReq]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "postJob", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all jobs" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [jobs_dtos_1.JobsDtoRes] }),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard),
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getAllJobs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get job by id" }),
    (0, swagger_1.ApiQuery)({ name: "jobId", type: String, required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, type: jobs_dtos_1.JobsDtoRes }),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard),
    (0, common_1.Get)("/jobId"),
    __param(0, (0, common_1.Query)("jobId", new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getJobById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all jobs by home" }),
    (0, swagger_1.ApiQuery)({ name: "homeId", type: String, required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [jobs_dtos_1.JobsDtoRes] }),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard),
    (0, common_1.Get)("/home"),
    __param(0, (0, common_1.Query)("homeId", new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getAllJobsByHome", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all jobs by home and status" }),
    (0, swagger_1.ApiQuery)({ name: "homeId", type: String, required: true }),
    (0, swagger_1.ApiQuery)({ name: "isFilled", type: Boolean, required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [jobs_dtos_1.JobsDtoRes] }),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard),
    (0, common_1.Get)("/home/status"),
    __param(0, (0, common_1.Query)("homeId", new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Query)("isFilled")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getAllJobsByHomeAndStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update job details" }),
    (0, swagger_1.ApiQuery)({ name: "jobId", type: String, required: true }),
    (0, swagger_1.ApiQuery)({ name: "homeId", type: String, required: true }),
    (0, swagger_1.ApiBody)({ type: jobs_dtos_1.UpdateJobDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: jobs_dtos_1.JobsDtoRes }),
    (0, hasRoles_decorators_1.HasRoles)(enums_1.RoleEnum.HOMEREPRESENTATIVE),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard, roles_guards_1.RolesGuard),
    (0, common_1.Patch)("/update"),
    __param(0, (0, common_1.Query)("jobId", new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Query)("homeId", new common_1.ParseUUIDPipe())),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, jobs_dtos_1.UpdateJobDto, Object]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "updateJob", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Update job filled status" }),
    (0, swagger_1.ApiQuery)({ name: "jobId", type: String, required: true }),
    (0, swagger_1.ApiQuery)({ name: "homeId", type: String, required: true }),
    (0, swagger_1.ApiBody)({ type: jobs_dtos_1.IsJobFilledDtoReq }),
    (0, swagger_1.ApiResponse)({ status: 200, type: jobs_dtos_1.JobsDtoRes }),
    (0, hasRoles_decorators_1.HasRoles)(enums_1.RoleEnum.HOMEREPRESENTATIVE),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard, roles_guards_1.RolesGuard),
    (0, common_1.Patch)("/update/isFilled"),
    __param(0, (0, common_1.Query)("jobId", new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Query)("homeId", new common_1.ParseUUIDPipe())),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, jobs_dtos_1.IsJobFilledDtoReq, Object]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "updateJobStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Apply for a job" }),
    (0, swagger_1.ApiBody)({ type: jobs_dtos_1.CreateJobApplicationDto }),
    (0, swagger_1.ApiResponse)({ status: 201, type: jobs_dtos_1.JobApplicationResponseDto }),
    (0, hasRoles_decorators_1.HasRoles)(enums_1.RoleEnum.CAREGIVER),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard, roles_guards_1.RolesGuard),
    (0, common_1.Post)("/application"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jobs_dtos_1.CreateJobApplicationDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "makeApplication", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get application by id" }),
    (0, swagger_1.ApiQuery)({ name: "applicationId", type: String, required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, type: jobs_dtos_1.JobApplicationResponseDto }),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard),
    (0, common_1.Get)("/application/id"),
    __param(0, (0, common_1.Query)("applicationId", new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getApplicationById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all applications by job" }),
    (0, swagger_1.ApiQuery)({ name: "jobId", type: String, required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [jobs_dtos_1.JobApplicationResponseDto] }),
    (0, hasRoles_decorators_1.HasRoles)(enums_1.RoleEnum.ADMIN, enums_1.RoleEnum.HOMEREPRESENTATIVE),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard, roles_guards_1.RolesGuard),
    (0, common_1.Get)("/application/job"),
    __param(0, (0, common_1.Query)("jobId", new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getAllApplicationsByJob", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Get all applications by caregiver" }),
    (0, swagger_1.ApiQuery)({ name: "caregiverId", type: String, required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [jobs_dtos_1.JobApplicationResponseDto] }),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard),
    (0, common_1.Get)("/application/caregiver"),
    __param(0, (0, common_1.Query)("caregiverId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getAllApplicationsByCaregiver", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Accept a job application" }),
    (0, swagger_1.ApiBody)({ type: jobs_dtos_1.JobApplicationStatusRequestDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: jobs_dtos_1.JobApplicationResponseDto }),
    (0, hasRoles_decorators_1.HasRoles)(enums_1.RoleEnum.HOMEREPRESENTATIVE),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard, roles_guards_1.RolesGuard),
    (0, common_1.Patch)("/application/accept"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, jobs_dtos_1.JobApplicationStatusRequestDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "acceptJobApplication", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Reject a job application" }),
    (0, swagger_1.ApiBody)({ type: jobs_dtos_1.JobApplicationStatusRequestDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: jobs_dtos_1.JobApplicationResponseDto }),
    (0, hasRoles_decorators_1.HasRoles)(enums_1.RoleEnum.HOMEREPRESENTATIVE),
    (0, common_1.UseGuards)(index_guards_1.AccessJwtGuard, roles_guards_1.RolesGuard),
    (0, common_1.Patch)("/application/reject"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, jobs_dtos_1.JobApplicationStatusRequestDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "rejectJobApplication", null);
exports.JobsController = JobsController = __decorate([
    (0, swagger_1.ApiTags)("Jobs"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("jobs"),
    __metadata("design:paramtypes", [jobs_service_1.JobsService])
], JobsController);
//# sourceMappingURL=jobs.controller.js.map