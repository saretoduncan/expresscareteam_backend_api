import {
  BadRequestException,
  Body,
  Controller,
  Get,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBody,
} from "@nestjs/swagger";
import { JobsService } from "./jobs.service";
import {
  CreateJobApplicationDto,
  IsJobFilledDtoReq,
  JobApplicationResponseDto,
  JobApplicationStatusRequestDto,
  JobsDtoRes,
  PostJobDtoReq,
  UpdateJobDto,
} from "src/dtos/jobs.dtos";

import { RequestWithJwtPayload } from "src/auth/auth.controller";
import { AccessJwtGuard } from "src/guards/index.guards";
import { RolesGuard } from "src/guards/roles.guards";
import { HasRoles } from "src/decorators/hasRoles.decorators";
import { RoleEnum } from "src/common/enums";


@ApiTags("Jobs")
@ApiBearerAuth()
@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @ApiOperation({ summary: "Create a new job" })
  @ApiBody({ type: PostJobDtoReq })
  @ApiResponse({ status: 201, type: JobsDtoRes })
  @HasRoles(RoleEnum.HOMEREPRESENTATIVE)
  @UseGuards(AccessJwtGuard, RolesGuard)
  @Post("/")
  async postJob(@Body() createJobDto: PostJobDtoReq): Promise<JobsDtoRes> {
    return await this.jobsService.createJobs(createJobDto);
  }

  @ApiOperation({ summary: "Get all jobs" })
  @ApiResponse({ status: 200, type: [JobsDtoRes] })
  @UseGuards(AccessJwtGuard)
  @Get("/")
  async getAllJobs(): Promise<JobsDtoRes[]> {
    return await this.jobsService.getAllJobs();
  }

  @ApiOperation({ summary: "Get job by id" })
  @ApiQuery({ name: "jobId", type: String, required: true })
  @ApiResponse({ status: 200, type: JobsDtoRes })
  @UseGuards(AccessJwtGuard)
  @Get("/jobId")
  async getJobById(
    @Query("jobId", new ParseUUIDPipe()) id: string,
  ): Promise<JobsDtoRes> {
    if (!id || id.trim().length == 0)
      throw new BadRequestException("Job id is required");

    return await this.jobsService.getJobById(id);
  }

  @ApiOperation({ summary: "Get all jobs by home" })
  @ApiQuery({ name: "homeId", type: String, required: true })
  @ApiResponse({ status: 200, type: [JobsDtoRes] })
  @UseGuards(AccessJwtGuard)
  @Get("/home")
  async getAllJobsByHome(
    @Query("homeId", new ParseUUIDPipe()) adultHomeId: string,
  ): Promise<JobsDtoRes[]> {
    if (!adultHomeId || adultHomeId.trim().length == 0)
      throw new BadRequestException("Home id is required");
    return await this.jobsService.getAllJobsByHome(adultHomeId);
  }

  @ApiOperation({ summary: "Get all jobs by home and status" })
  @ApiQuery({ name: "homeId", type: String, required: true })
  @ApiQuery({ name: "isFilled", type: Boolean, required: true })
  @ApiResponse({ status: 200, type: [JobsDtoRes] })
  @UseGuards(AccessJwtGuard)
  @Get("/home/status")
  async getAllJobsByHomeAndStatus(
    @Query("homeId", new ParseUUIDPipe()) adultHomeId: string,
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

  @ApiOperation({ summary: "Update job details" })
  @ApiQuery({ name: "jobId", type: String, required: true })
  @ApiQuery({ name: "homeId", type: String, required: true })
  @ApiBody({ type: UpdateJobDto })
  @ApiResponse({ status: 200, type: JobsDtoRes })
  @HasRoles(RoleEnum.HOMEREPRESENTATIVE)
  @UseGuards(AccessJwtGuard, RolesGuard)
  @Patch("/update")
  async updateJob(
    @Query("jobId", new ParseUUIDPipe()) jobId: string,
    @Query("homeId", new ParseUUIDPipe()) adultHomeId: string,
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

  @ApiOperation({ summary: "Update job filled status" })
  @ApiQuery({ name: "jobId", type: String, required: true })
  @ApiQuery({ name: "homeId", type: String, required: true })
  @ApiBody({ type: IsJobFilledDtoReq })
  @ApiResponse({ status: 200, type: JobsDtoRes })
  @HasRoles(RoleEnum.HOMEREPRESENTATIVE)
  @UseGuards(AccessJwtGuard, RolesGuard)
  @Patch("/update/isFilled")
  async updateJobStatus(
    @Query("jobId", new ParseUUIDPipe()) jobId: string,
    @Query("homeId", new ParseUUIDPipe()) adultHomeId: string,
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

  @ApiOperation({ summary: "Apply for a job" })
  @ApiBody({ type: CreateJobApplicationDto })
  @ApiResponse({ status: 201, type: JobApplicationResponseDto })
  @HasRoles(RoleEnum.CAREGIVER)
  @UseGuards(AccessJwtGuard, RolesGuard)
  @Post("/application")
  async makeApplication(
    @Body() jobApplicationReq: CreateJobApplicationDto,
  ): Promise<JobApplicationResponseDto> {
    return await this.jobsService.makeApplication(
      jobApplicationReq.job_id,
      jobApplicationReq.caregiver_id,
    );
  }

  @ApiOperation({ summary: "Get application by id" })
  @ApiQuery({ name: "applicationId", type: String, required: true })
  @ApiResponse({ status: 200, type: JobApplicationResponseDto })
  @UseGuards(AccessJwtGuard)
  @Get("/application/id")
  async getApplicationById(
    @Query("applicationId", new ParseUUIDPipe()) jobApplicationId: string,
  ): Promise<JobApplicationResponseDto> {
    if (!jobApplicationId || jobApplicationId.trim().length == 0) {
      throw new BadRequestException("Job application id is required");
    }
    return await this.jobsService.getApplicationById(jobApplicationId);
  }

  @ApiOperation({ summary: "Get all applications by job" })
  @ApiQuery({ name: "jobId", type: String, required: true })
  @ApiResponse({ status: 200, type: [JobApplicationResponseDto] })
  @HasRoles(RoleEnum.ADMIN, RoleEnum.HOMEREPRESENTATIVE)
  @UseGuards(AccessJwtGuard, RolesGuard)
  @Get("/application/job")
  async getAllApplicationsByJob(
    @Query("jobId", new ParseUUIDPipe()) jobId: string,
  ): Promise<JobApplicationResponseDto[]> {
    if (jobId.trim().length == 0) {
      throw new BadRequestException("Job id is required");
    }
    return await this.jobsService.getAllApplicationsByJob(jobId);
  }

  @ApiOperation({ summary: "Get all applications by caregiver" })
  @ApiQuery({ name: "caregiverId", type: String, required: true })
  @ApiResponse({ status: 200, type: [JobApplicationResponseDto] })
  @UseGuards(AccessJwtGuard)
  @Get("/application/caregiver")
  async getAllApplicationsByCaregiver(
    @Query("caregiverId") caregiverId: string,
  ): Promise<JobApplicationResponseDto[]> {
    if (caregiverId.trim().length == 0) {
      throw new BadRequestException("Caregiver id is required");
    }
    return await this.jobsService.getAllApplicationsByCaregiver(caregiverId);
  }

  @ApiOperation({ summary: "Accept a job application" })
  @ApiBody({ type: JobApplicationStatusRequestDto })
  @ApiResponse({ status: 200, type: JobApplicationResponseDto })
  @HasRoles(RoleEnum.HOMEREPRESENTATIVE)
  @UseGuards(AccessJwtGuard, RolesGuard)
  @Patch("/application/accept")
  async acceptJobApplication(
    @Request() req: RequestWithJwtPayload,
    @Body() jobApplicationStatus: JobApplicationStatusRequestDto,
  ) {
    return await this.jobsService.acceptApplication(
      jobApplicationStatus.applicationId,
      jobApplicationStatus.caregiverId,
      req.user.sub,
      jobApplicationStatus.homeId,
    );
  }

  @ApiOperation({ summary: "Reject a job application" })
  @ApiBody({ type: JobApplicationStatusRequestDto })
  @ApiResponse({ status: 200, type: JobApplicationResponseDto })
  @HasRoles(RoleEnum.HOMEREPRESENTATIVE)
  @UseGuards(AccessJwtGuard, RolesGuard)
  @Patch("/application/reject")
  async rejectJobApplication(
    @Request() req: RequestWithJwtPayload,
    @Body() jobApplicationStatus: JobApplicationStatusRequestDto,
  ) {
    return await this.jobsService.rejectApplication(
      jobApplicationStatus.applicationId,
      jobApplicationStatus.caregiverId,
      req.user.sub,
      jobApplicationStatus.homeId,
    );
  }
}
