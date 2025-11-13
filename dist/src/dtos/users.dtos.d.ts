import { RoleEnum } from "src/common/enums";
import { RolesResponseDto } from "./roles.dtos";
export declare class NoAdminRoleConstraint {
    validate(role: RoleEnum): role is RoleEnum.HOMEREPRESENTATIVE | RoleEnum.CAREGIVER;
    defaultMessage(): string;
}
export declare class CreateUserDto {
    email: string;
    password: string;
    role: string;
}
export declare class CaregiverResponseDto {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    userId: string;
}
export declare class AdultHomeRepresentativeResponseDto {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    userId: string;
    jobTitle: string;
    adultHomeId: string;
}
export declare class UserResponseDto {
    id: string;
    username: string;
    roles: RolesResponseDto[];
    caregiver: CaregiverResponseDto | null;
    adultHomeRepresentative: AdultHomeRepresentativeResponseDto | null;
}
export declare class CreateCaregiverDto {
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
}
export declare class CreateAdultHomeRepresentativeRequestDto {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    userId: string;
    adultHomeId: string;
}
