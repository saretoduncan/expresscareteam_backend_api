import { Caregiver } from "src/users/caregiver.entity";
import { Roles } from "src/roles/roles.entity";
import { AdultHomeRepresentative } from "./adult-home-representative.entity";
export declare class User {
    id: string;
    username: string;
    password: string;
    caregiver?: Caregiver;
    adultHomeRepresentative?: AdultHomeRepresentative;
    roles: Roles[];
    createdAt: Date;
    updatedAt: Date;
}
