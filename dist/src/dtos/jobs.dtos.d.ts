import { EJOBTYPE } from "src/jobs/job.entity";
import { EAPPLICATIONSTATUS } from "src/jobs/job_application.entity";
export declare class PostJobDtoReq {
    job_role: string;
    job_type: EJOBTYPE;
    start_date: string;
    end_date?: string;
    shift_start: string;
    shift_end: string;
    payment_rate: string;
    staff_needed: number;
    certificates_needed: string[];
    is_urgent?: boolean;
    description: string;
    adult_home_id: string;
}
declare const UpdateJobDto_base: import("@nestjs/common").Type<Partial<PostJobDtoReq>>;
export declare class UpdateJobDto extends UpdateJobDto_base {
}
export declare class IsJobFilledDtoReq {
    isJobFilled: boolean;
}
export declare class CreateJobApplicationDto {
    caregiver_id: string;
    job_id: string;
}
export declare class JobsDtoRes {
    id: string;
    job_role: string;
    job_type: EJOBTYPE;
    start_date: Date;
    end_date?: Date;
    shift_start: string;
    shift_end: string;
    payment_rate: string;
    staff_needed: number;
    certificates_needed: string[];
    is_urgent: boolean;
    is_filled: boolean;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class JobApplicationResponseDto {
    id: string;
    caregiver_id: string;
    job_id: string;
    status: EAPPLICATIONSTATUS;
    appliedAt: Date;
    acceptedAt: Date | null;
    rejectedAt: Date | null;
    updatedAt: Date;
}
export {};
