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
    reps: AdultHomeRepresentative[];
}
