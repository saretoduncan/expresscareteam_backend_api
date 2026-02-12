import { AdultHome } from "src/adult-home/adult-home.entity";
import { JobApplications } from "./job_application.entity";
export declare enum EJOBTYPE {
    PART_TIME = "PART_TIME",
    FULL_TIME = "FULL_TIME",
    FILL_IN = "FILL_IN"
}
export declare enum EJOBROLE {
    HCA = "HCA",
    CNA = "CNA"
}
export declare class JobsEntity {
    id: string;
    job_role: string;
    job_type: EJOBTYPE;
    start_date: Date;
    end_date: Date;
    shift_start: string;
    shift_end: string;
    payment_rate: string;
    staff_needed: number;
    certificates_needed: string[];
    is_urgent: boolean;
    description: string;
    is_filled: boolean;
    adult_home_id: string;
    adult_home: AdultHome;
    JobApplications: JobApplications[];
    createdAt: Date;
    updatedAt: Date;
}
