import { AdultHomeRepresentativeResponseDto } from "./users.dtos";
export declare class CreateAdultHomeDto {
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website?: string;
    homeDescription: string;
}
export declare class AdultHomeResponseDto {
    id: string;
    email: string;
    name: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
    website: string | null;
    representatives: AdultHomeRepresentativeResponseDto;
}
