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
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const job_entity_1 = require("./job.entity");
const typeorm_2 = require("typeorm");
const job_application_entity_1 = require("./job_application.entity");
const adult_home_service_1 = require("../adult-home/adult-home.service");
const users_service_1 = require("../users/users.service");
let JobsService = class JobsService {
    jobRepo;
    jobApplicationRepo;
    adultHomeService;
    userService;
    constructor(jobRepo, jobApplicationRepo, adultHomeService, userService) {
        this.jobRepo = jobRepo;
        this.jobApplicationRepo = jobApplicationRepo;
        this.adultHomeService = adultHomeService;
        this.userService = userService;
    }
    async createJobs(createJobDto) {
        const isAdultHome = await this.adultHomeService.getAdultHomeById(createJobDto.adult_home_id);
        const newJob = this.jobRepo.create({
            job_role: createJobDto.job_role,
            job_type: createJobDto.job_type,
            start_date: createJobDto.start_date,
            end_date: createJobDto.end_date,
            shift_start: createJobDto.shift_start,
            shift_end: createJobDto.shift_end,
            payment_rate: createJobDto.payment_rate,
            staff_needed: createJobDto.staff_needed,
            certificates_needed: createJobDto.certificates_needed,
            is_urgent: createJobDto.is_urgent,
            adult_home: isAdultHome,
            description: createJobDto.description,
        });
        return await this.jobRepo.save(newJob);
    }
    async getAllJobs() {
        return await this.jobRepo.find();
    }
    async getJobById(id) {
        const job = await this.jobRepo.findOne({
            where: {
                id: id,
            },
            relations: {
                adult_home: {
                    reps: {
                        user: true,
                    },
                },
            },
        });
        if (!job) {
            throw new common_1.HttpException("Job not found", common_1.HttpStatus.NOT_FOUND);
        }
        return job;
    }
    async getAllJobsByHome(adultHomeId) {
        const jobs = await this.jobRepo.find({
            where: {
                adult_home_id: adultHomeId,
            },
            relations: {
                adult_home: true,
            },
        });
        return jobs;
    }
    async getAllJobsByHomeAndStatus(adultHomeId, isFilled) {
        const jobs = await this.jobRepo.find({
            where: {
                adult_home_id: adultHomeId,
                is_filled: isFilled,
            },
            relations: {
                adult_home: true,
            },
        });
        return jobs;
    }
    async updateJobById(id, homeId, homeRepUserId, updateJobDto) {
        const job = await this.getJobById(id);
        if (!job.adult_home.reps.some((val) => val.userId === homeRepUserId)) {
            throw new common_1.ForbiddenException("You are not allowed to implement to implement this functionality");
        }
        if (job.adult_home_id !== homeId) {
            throw new common_1.BadRequestException("Job doesn't belong to this home");
        }
        if (updateJobDto.adult_home_id &&
            updateJobDto.adult_home_id !== undefined &&
            updateJobDto.adult_home_id !== job.adult_home_id) {
            throw new common_1.BadRequestException("Job doesn't belong to this home");
        }
        const updateJob = this.jobRepo.merge(job, updateJobDto);
        return await this.jobRepo.save(updateJob);
    }
    async updateJobStatus(id, homeId, homeRepUserId, isJobFilled) {
        const job = await this.getJobById(id);
        if (!job.adult_home.reps.some((val) => val.userId === homeRepUserId)) {
            throw new common_1.ForbiddenException("You are not allowed to implement to implement this functionality");
        }
        if (homeId !== job.adult_home_id) {
            throw new common_1.BadRequestException("Job doesn't belong to provided home");
        }
        job.is_filled = isJobFilled;
        return await this.jobRepo.save(job);
    }
    async deleteJobById(id) {
        const job = await this.getJobById(id);
        return await this.jobRepo.remove(job);
    }
    async makeApplication(jobId, caregiverId) {
        const job = await this.getJobById(jobId);
        const caregiver = await this.userService.getUserById(caregiverId);
        if (!caregiver.caregiver) {
            throw new common_1.BadRequestException("User is not a caregiver");
        }
        const application = await this.jobApplicationRepo.findOne({
            where: {
                job: {
                    adult_home: true,
                },
                caregiver: caregiver,
            },
        });
        if (application) {
            throw new common_1.BadRequestException("You've already applied for this job.");
        }
        const newApplication = this.jobApplicationRepo.create({
            job: job,
            caregiver: caregiver,
        });
        return await this.jobApplicationRepo.save(newApplication);
    }
    async getApplicationById(jobApplicationId) {
        const application = await this.jobApplicationRepo.findOne({
            where: {
                id: jobApplicationId,
            },
            relations: {
                job: {
                    adult_home: {
                        reps: {
                            user: true,
                        },
                    },
                },
                caregiver: true,
            },
        });
        if (!application) {
            throw new common_1.NotFoundException("Job application not found");
        }
        return application;
    }
    async getAllApplicationsByJob(jobId) {
        const job = await this.getJobById(jobId);
        const applications = await this.jobApplicationRepo.find({
            where: {
                job: job,
            },
            relations: {
                job: {
                    adult_home: true,
                },
                caregiver: true,
            },
        });
        return applications;
    }
    async getAllApplicationsByCaregiver(caregiverId) {
        const caregiver = await this.userService.getUserById(caregiverId);
        const application = await this.jobApplicationRepo.find({
            where: {
                caregiver: caregiver,
            },
            relations: {
                job: {
                    adult_home: true,
                },
                caregiver: true,
            },
        });
        return application;
    }
    async acceptApplication(jobApplicationId, caregiverId, homeRepUserId, homeId) {
        const application = await this.getApplicationById(jobApplicationId);
        if (!application.job.adult_home.reps.some((val) => val.userId === homeRepUserId)) {
            throw new common_1.ForbiddenException("You are not allowed to implement to implement this functionality");
        }
        if (application.caregiver_id !== caregiverId) {
            throw new common_1.BadRequestException("this application doesn't belong to this caregiver");
        }
        if (application.job.adult_home_id !== homeId) {
            throw new common_1.BadRequestException("this application doesn't belong the job posted by this home");
        }
        application.status = job_application_entity_1.EAPPLICATIONSTATUS.ACCEPTED;
        application.acceptedAt = new Date();
        return await this.jobApplicationRepo.save(application);
    }
    async rejectApplication(jobApplicationId, caregiverId, homeRepUserId, homeId) {
        const application = await this.getApplicationById(jobApplicationId);
        if (!application.job.adult_home.reps.some((val) => val.userId === homeRepUserId)) {
            throw new common_1.ForbiddenException("You are not allowed to implement to implement this functionality");
        }
        if (application.caregiver_id !== caregiverId) {
            throw new common_1.BadRequestException("this application doesn't belong to this caregiver");
        }
        if (application.job.adult_home_id !== homeId) {
            throw new common_1.BadRequestException("this application doesn't belong the job posted by this home");
        }
        application.status = job_application_entity_1.EAPPLICATIONSTATUS.REJECTED;
        application.rejectedAt = new Date();
        return await this.jobApplicationRepo.save(application);
    }
    async updateResetApplicationStatus(jobApplicationId, homeRepUserId) {
        const application = await this.getApplicationById(jobApplicationId);
        if (!application.job.adult_home.reps.some((val) => val.userId === homeRepUserId)) {
            throw new common_1.ForbiddenException("You are not allowed to implement to implement this functionality");
        }
        application.status = job_application_entity_1.EAPPLICATIONSTATUS.PENDING;
        application.rejectedAt = null;
        application.acceptedAt = null;
        return await this.jobApplicationRepo.save(application);
    }
    async deleteJobApplication(jobApplicationRepo) {
        const application = await this.getApplicationById(jobApplicationRepo);
        await this.jobApplicationRepo.remove(application);
    }
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_entity_1.JobsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(job_application_entity_1.JobApplications)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        adult_home_service_1.AdultHomeService,
        users_service_1.UsersService])
], JobsService);
//# sourceMappingURL=jobs.service.js.map