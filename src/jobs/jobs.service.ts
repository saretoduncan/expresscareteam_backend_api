import {
  BadRequestException,
  ForbiddenException,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JobsEntity } from "./job.entity";
import { Repository } from "typeorm";
import { EAPPLICATIONSTATUS, JobApplications } from "./job_application.entity";
import { PostJobDtoReq, UpdateJobDto } from "src/dtos/jobs.dtos";
import { AdultHomeService } from "src/adult-home/adult-home.service";
import { UsersService } from "src/users/users.service";
import { RoleEnum } from "src/common/enums";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobsEntity)
    private readonly jobRepo: Repository<JobsEntity>,
    @InjectRepository(JobApplications)
    private readonly jobApplicationRepo: Repository<JobApplications>,
    private readonly adultHomeService: AdultHomeService,
    private readonly userService: UsersService,
  ) {}
  //create a job
  async createJobs(createJobDto: PostJobDtoReq): Promise<JobsEntity> {
    const isAdultHome = await this.adultHomeService.getAdultHomeById(
      createJobDto.adult_home_id,
    );

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

  //get all jobs
  async getAllJobs(): Promise<JobsEntity[]> {
    return await this.jobRepo.find();
  }

  //get job by id
  async getJobById(id: string): Promise<JobsEntity> {
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
      throw new HttpException("Job not found", HttpStatus.NOT_FOUND);
    }
    return job;
  }
  //getAllJobsByHome
  async getAllJobsByHome(adultHomeId: string): Promise<JobsEntity[]> {
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
  //get all jobs by home and status
  async getAllJobsByHomeAndStatus(
    adultHomeId: string,
    isFilled: boolean,
  ): Promise<JobsEntity[]> {
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
  //updateJob
  async updateJobById(id: string, homeId: string,homeRepUserId:string, updateJobDto: UpdateJobDto) {
    const job = await this.getJobById(id);
     if (!job.adult_home.reps.some((val) => val.userId === homeRepUserId)) {
      throw new ForbiddenException(
        "You are not allowed to implement to implement this functionality",
      );
    }
    if (job.adult_home_id !== homeId) {
      throw new BadRequestException("Job doesn't belong to this home");
    }
    if (
      updateJobDto.adult_home_id &&
      updateJobDto.adult_home_id !== undefined &&
      updateJobDto.adult_home_id !== job.adult_home_id
    ) {
      throw new BadRequestException("Job doesn't belong to this home");
    }
    const updateJob = this.jobRepo.merge(job, updateJobDto);
    return await this.jobRepo.save(updateJob);
  }

  //close job
  async updateJobStatus(
    id: string,
    homeId: string,
    homeRepUserId: string,
    isJobFilled: boolean,
  ) {
    const job = await this.getJobById(id);
    if (!job.adult_home.reps.some((val) => val.userId === homeRepUserId)) {
      throw new ForbiddenException(
        "You are not allowed to implement to implement this functionality",
      );
    }
    if (homeId !== job.adult_home_id) {
      throw new BadRequestException("Job doesn't belong to provided home");
    }
    job.is_filled = isJobFilled;
    return await this.jobRepo.save(job);
  }
  //deleteJob
  async deleteJobById(id: string) {
    const job = await this.getJobById(id);
    return await this.jobRepo.remove(job);
  }

  //create an application
  async makeApplication(
    jobId: string,
    caregiverId: string,
  ): Promise<JobApplications> {
    const job = await this.getJobById(jobId);
    const caregiver = await this.userService.getUserById(caregiverId);
    if (!caregiver.caregiver) {
      throw new BadRequestException("User is not a caregiver");
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
      throw new BadRequestException("You've already applied for this job.");
    }
    const newApplication = this.jobApplicationRepo.create({
      job: job,
      caregiver: caregiver,
    });
    return await this.jobApplicationRepo.save(newApplication);
  }
  //get application by id
  async getApplicationById(jobApplicationId: string): Promise<JobApplications> {
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
      throw new NotFoundException("Job application not found");
    }
    return application;
  }
  //get all applications by job
  async getAllApplicationsByJob(jobId: string): Promise<JobApplications[]> {
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
  //get all applications by caregiver
  async getAllApplicationsByCaregiver(
    caregiverId: string,
  ): Promise<JobApplications[]> {
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

  //update job application accepted status
  async acceptApplication(
    jobApplicationId: string,
    caregiverId: string,
    homeRepUserId: string,
    homeId: string,
  ): Promise<JobApplications> {
    const application = await this.getApplicationById(jobApplicationId);
    if (
      !application.job.adult_home.reps.some(
        (val) => val.userId === homeRepUserId,
      )
    ) {
      throw new ForbiddenException(
        "You are not allowed to implement to implement this functionality",
      );
    }
    if (application.caregiver_id !== caregiverId) {
      throw new BadRequestException(
        "this application doesn't belong to this caregiver",
      );
    }
    if (application.job.adult_home_id !== homeId) {
      throw new BadRequestException(
        "this application doesn't belong the job posted by this home",
      );
    }
    application.status = EAPPLICATIONSTATUS.ACCEPTED;
    application.acceptedAt = new Date();
    return await this.jobApplicationRepo.save(application);
  }
  // update job rejection status
  async rejectApplication(
    jobApplicationId: string,
    caregiverId: string,
    homeRepUserId: string,
    homeId: string,
  ): Promise<JobApplications> {
    const application = await this.getApplicationById(jobApplicationId);
    if (
      !application.job.adult_home.reps.some(
        (val) => val.userId === homeRepUserId,
      )
    ) {
      throw new ForbiddenException(
        "You are not allowed to implement to implement this functionality",
      );
    }
    if (application.caregiver_id !== caregiverId) {
      throw new BadRequestException(
        "this application doesn't belong to this caregiver",
      );
    }

    if (application.job.adult_home_id !== homeId) {
      throw new BadRequestException(
        "this application doesn't belong the job posted by this home",
      );
    }

    application.status = EAPPLICATIONSTATUS.REJECTED;
    application.rejectedAt = new Date();
    return await this.jobApplicationRepo.save(application);
  }
  //update job pending status
  async updateResetApplicationStatus(
    jobApplicationId: string,
    homeRepUserId: string,
  ): Promise<JobApplications> {
    const application = await this.getApplicationById(jobApplicationId);
    if (
      !application.job.adult_home.reps.some(
        (val) => val.userId === homeRepUserId,
      )
    ) {
      throw new ForbiddenException(
        "You are not allowed to implement to implement this functionality",
      );
    }
    application.status = EAPPLICATIONSTATUS.PENDING;
    application.rejectedAt = null;
    application.acceptedAt = null;
    return await this.jobApplicationRepo.save(application);
  }

  //delete job application
  async deleteJobApplication(jobApplicationRepo): Promise<void> {
    const application = await this.getApplicationById(jobApplicationRepo);

    await this.jobApplicationRepo.remove(application);
  }
}
