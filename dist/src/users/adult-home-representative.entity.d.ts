import { User } from "./users.entity";
import { AdultHome } from "src/adult-home/adult-home.entity";
export declare class AdultHomeRepresentative {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    userId: string;
    adultHomeId: string;
    user: User;
    adultHome: AdultHome;
    createdAt: Date;
    updatedAt: Date;
}
