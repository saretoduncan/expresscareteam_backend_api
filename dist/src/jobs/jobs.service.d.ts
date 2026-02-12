import { JobsEntity } from "./job.entity";
import { Repository } from "typeorm";
import { JobApplications } from "./job_application.entity";
import { PostJobDtoReq, UpdateJobDto } from "src/dtos/jobs.dtos";
import { AdultHomeService } from "src/adult-home/adult-home.service";
import { UsersService } from "src/users/users.service";
export declare class JobsService {
    private readonly jobRepo;
    private readonly jobApplicationRepo;
    private readonly adultHomeService;
    private readonly userService;
    constructor(jobRepo: Repository<JobsEntity>, jobApplicationRepo: Repository<JobApplications>, adultHomeService: AdultHomeService, userService: UsersService);
    createJobs(createJobDto: PostJobDtoReq): Promise<JobsEntity>;
    getAllJobs(): Promise<JobsEntity[]>;
    getJobById(id: string): Promise<JobsEntity>;
    getAllJobsByHome(adultHomeId: string): Promise<JobsEntity[]>;
    getAllJobsByHomeAndStatus(adultHomeId: string, isFilled: boolean): Promise<JobsEntity[]>;
    updateJobById(id: string, homeId: string, homeRepUserId: string, updateJobDto: UpdateJobDto): Promise<JobsEntity>;
    updateJobStatus(id: string, homeId: string, homeRepUserId: string, isJobFilled: boolean): Promise<JobsEntity>;
    deleteJobById(id: string): Promise<JobsEntity>;
    makeApplication(jobId: string, caregiverId: string): Promise<JobApplications>;
    getApplicationById(jobApplicationId: string): Promise<JobApplications>;
    getAllApplicationsByJob(jobId: string): Promise<JobApplications[]>;
    getAllApplicationsByCaregiver(caregiverId: string): Promise<JobApplications[]>;
    acceptApplication(jobApplicationId: string, caregiverId: string, homeRepUserId: string, homeId: string): Promise<JobApplications>;
    rejectApplication(jobApplicationId: string, caregiverId: string, homeRepUserId: string, homeId: string): Promise<JobApplications>;
    updateResetApplicationStatus(jobApplicationId: string, homeRepUserId: string): Promise<JobApplications>;
    deleteJobApplication(jobApplicationRepo: any): Promise<void>;
}
