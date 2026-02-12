import { CaregiverRequirements } from "src/caregiver-requirements/caregiver-requirements.entity";
import { JobApplications } from "src/jobs/job_application.entity";
import { User } from "src/users/users.entity";
export declare class Caregiver {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    userId: string;
    user: User;
    requirements?: CaregiverRequirements;
    JobApplications: JobApplications[];
    createdAt: Date;
    updatedAt: Date;
}
