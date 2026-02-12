import { JobsEntity } from "./job.entity";
import { Caregiver } from "src/users/caregiver.entity";
export declare enum EAPPLICATIONSTATUS {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}
export declare class JobApplications {
    id: string;
    caregiver_id: string;
    caregiver: Caregiver;
    job_id: string;
    job: JobsEntity;
    status: EAPPLICATIONSTATUS;
    appliedAt: Date;
    acceptedAt: Date | null;
    rejectedAt: Date | null;
    updatedAt: Date;
}
