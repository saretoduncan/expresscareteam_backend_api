import { JobsService } from "./jobs.service";
import { CreateJobApplicationDto, IsJobFilledDtoReq, JobApplicationResponseDto, JobApplicationStatusRequestDto, JobsDtoRes, PostJobDtoReq, UpdateJobDto } from "src/dtos/jobs.dtos";
import { RequestWithJwtPayload } from "src/auth/auth.controller";
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    postJob(createJobDto: PostJobDtoReq): Promise<JobsDtoRes>;
    getAllJobs(): Promise<JobsDtoRes[]>;
    getJobById(id: string): Promise<JobsDtoRes>;
    getAllJobsByHome(adultHomeId: string): Promise<JobsDtoRes[]>;
    getAllJobsByHomeAndStatus(adultHomeId: string, isFilled: boolean): Promise<JobsDtoRes[]>;
    updateJob(jobId: string, adultHomeId: string, updateJobDto: UpdateJobDto, req: RequestWithJwtPayload): Promise<JobsDtoRes>;
    updateJobStatus(jobId: string, adultHomeId: string, isFilledDtoReq: IsJobFilledDtoReq, req: RequestWithJwtPayload): Promise<JobsDtoRes>;
    makeApplication(jobApplicationReq: CreateJobApplicationDto): Promise<JobApplicationResponseDto>;
    getApplicationById(jobApplicationId: string): Promise<JobApplicationResponseDto>;
    getAllApplicationsByJob(jobId: string): Promise<JobApplicationResponseDto[]>;
    getAllApplicationsByCaregiver(caregiverId: string): Promise<JobApplicationResponseDto[]>;
    acceptJobApplication(req: RequestWithJwtPayload, jobApplicationStatus: JobApplicationStatusRequestDto): Promise<import("./job_application.entity").JobApplications>;
    rejectJobApplication(req: RequestWithJwtPayload, jobApplicationStatus: JobApplicationStatusRequestDto): Promise<import("./job_application.entity").JobApplications>;
}
