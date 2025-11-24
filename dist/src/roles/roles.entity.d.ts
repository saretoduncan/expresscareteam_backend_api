import { User } from "src/users/users.entity";
export declare class Roles {
    id: string;
    name: string;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
}
