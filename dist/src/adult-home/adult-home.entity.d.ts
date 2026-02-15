import { JobsEntity } from "src/jobs/job.entity";
import { AdultHomeRepresentative } from "src/users/adult-home-representative.entity";
export declare class AdultHome {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website?: string;
    homeDescription: string;
    representative: AdultHomeRepresentative;
    jobs: JobsEntity[];
    createdAt: Date;
    updatedAt: Date;
}
