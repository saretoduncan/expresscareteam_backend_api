import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from "@nestjs/common";
import { JobsService } from "./jobs.service";
import {
  CreateJobApplicationDto,
  IsJobFilledDtoReq,
  JobApplicationResponseDto,
  JobsDtoRes,
  PostJobDtoReq,
  UpdateJobDto,
} from "src/dtos/jobs.dtos";

import { RequestWithJwtPayload } from "src/auth/auth.controller";
import { AccessJwtGuard } from "src/guards/index.guards";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  //post job
  @UseGuards(AccessJwtGuard)
  @Post("/")
  async postJob(@Body() createJobDto: PostJobDtoReq): Promise<JobsDtoRes> {
    return await this.jobsService.createJobs(createJobDto);
  }
  //get all jobs
  @Get("/")
  async getAllJobs(): Promise<JobsDtoRes[]> {
    return await this.jobsService.getAllJobs();
  }
  //get job by id
  @Get("/jobId")
  async getJobById(@Query("jobId") id: string): Promise<JobsDtoRes> {
    if (!id || id.trim().length == 0)
      throw new BadRequestException("Job id is required");

    return await this.jobsService.getJobById(id);
  }
  //get all jobs by home
  @Get("/home")
  async getAllJobsByHome(
    @Query("homeId") adultHomeId: string,
  ): Promise<JobsDtoRes[]> {
    if (!adultHomeId || adultHomeId.trim().length == 0)
      throw new BadRequestException("Home id is required");
    return await this.jobsService.getAllJobsByHome(adultHomeId);
  }
  //get all jobs by home and status
  @Get("/home/status")
  async getAllJobsByHomeAndStatus(
    @Query("homeId") adultHomeId: string,
    @Query("isFilled") isFilled: boolean,
  ): Promise<JobsDtoRes[]> {
    if (!adultHomeId || adultHomeId.trim().length == 0) {
      throw new BadRequestException("Home id is required");
    }
    if (
      isFilled === undefined ||
      isFilled === null ||
      typeof isFilled !== "boolean"
    ) {
      throw new BadRequestException(
        "isFilled is require and should be a boolean value (true or false)",
      );
    }

    return await this.jobsService.getAllJobsByHomeAndStatus(
      adultHomeId,
      isFilled,
    );
  }
  //update job
  @Put("/update")
  async updateJob(
    @Query("jobId") jobId: string,
    @Query("homeId") adultHomeId: string,
    @Body() updateJobDto: UpdateJobDto,
    @Request() req: RequestWithJwtPayload,
  ): Promise<JobsDtoRes> {
    if (!jobId || jobId.trim().length == 0) {
      throw new BadRequestException("Job id is required");
    }
    if (!adultHomeId || adultHomeId.trim().length == 0) {
      throw new BadRequestException("Home id is required");
    }
    return await this.jobsService.updateJobById(
      jobId,
      adultHomeId,
      req.user.sub,
      updateJobDto,
    );
  }
  //update job status
  @Patch("/update/isFilled")
  async updateJobStatus(
    @Query("jobId") jobId: string,
    @Query("homeId") adultHomeId: string,
    @Body() isFilledDtoReq: IsJobFilledDtoReq,
    @Request() req: RequestWithJwtPayload,
  ): Promise<JobsDtoRes> {
    if (!jobId || jobId.trim().length == 0) {
      throw new BadRequestException("Job id is required");
    }
    if (!adultHomeId || adultHomeId.trim().length == 0) {
      throw new BadRequestException("Home id is required");
    }
    return await this.jobsService.updateJobStatus(
      jobId,
      adultHomeId,
      req.user.sub,
      isFilledDtoReq.isJobFilled,
    );
  }

  @Post("/application")
  async makeApplication(
    @Body() jobApplicationReq: CreateJobApplicationDto,
  ): Promise<JobApplicationResponseDto> {
    return await this.jobsService.makeApplication(
      jobApplicationReq.job_id,
      jobApplicationReq.caregiver_id,
    );
  }
  @Get("/application/id")
  async getApplicationById(
    @Query("applicationId") jobApplicationId: string,
  ): Promise<JobApplicationResponseDto> {
    if (!jobApplicationId || jobApplicationId.trim().length == 0) {
      throw new BadRequestException("Job application id is required");
    }
    return await this.jobsService.getApplicationById(jobApplicationId);
  }
  //get application by job
  @Get("/application/job")
  async getAllApplicationsByJob(
    @Query("jobId") jobId: string,
  ): Promise<JobApplicationResponseDto[]> {
    if (jobId.trim().length == 0) {
      throw new BadRequestException("Job id is required");
    }
    return await this.jobsService.getAllApplicationsByJob(jobId);
  }
  //get application by caregiver
  @Get("/application/caregiver")
  async getAllApplicationsByCaregiver(
    @Query("caregiverId") caregiverId: string,
  ): Promise<JobApplicationResponseDto[]> {
    if (caregiverId.trim().length == 0) {
      throw new BadRequestException("Caregiver id is required");
    }
    return await this.jobsService.getAllApplicationsByCaregiver(caregiverId);
  }

  //accept job application
  @Patch("/application/accept")
  async acceptJobApplication(
    @Query("applicationId") jobApplicationId: string,
    @Query("homeId") adultHomeId: string,
    @Query("caregiverId") caregiverId: string,
    @Request() req: RequestWithJwtPayload,
  ) {
    if (!jobApplicationId || jobApplicationId.trim().length == 0) {
      throw new BadRequestException("Job application id is required");
    }
    if (!caregiverId || caregiverId.trim().length == 0) {
      throw new BadRequestException("Caregiver id is required");
    }
    if (!adultHomeId || adultHomeId.trim().length == 0) {
      throw new BadRequestException("Home id is required");
    }
    return await this.jobsService.acceptApplication(
      jobApplicationId,
      caregiverId,
      req.user.sub,
      adultHomeId,
    );
  }
  //reject job application

  @Patch("/application/accept")
  async rejectJobApplication(
    @Query("applicationId") jobApplicationId: string,
    @Query("homeId") adultHomeId: string,
    @Query("caregiverId") caregiverId: string,
    @Request() req: RequestWithJwtPayload,
  ) {
    if (!jobApplicationId || jobApplicationId.trim().length == 0) {
      throw new BadRequestException("Job application id is required");
    }
    if (!caregiverId || caregiverId.trim().length == 0) {
      throw new BadRequestException("Caregiver id is required");
    }
    if (!adultHomeId || adultHomeId.trim().length == 0) {
      throw new BadRequestException("Home id is required");
    }
    return await this.jobsService.rejectApplication(
      jobApplicationId,
      caregiverId,
      req.user.sub,
      adultHomeId,
    );
  }
}
