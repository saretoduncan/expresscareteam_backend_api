import { UserResponseDto } from "./users.dtos";
export declare class RegisterCaregiverDto {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
    phoneNumber: string;
    city: string;
    state: string;
    street: string;
    zipcode: string;
}
export declare class RegisterProviderDto {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    job_title: string;
    adult_home_name: string;
    adult_home_email: string;
    adult_home_phone: string;
    adult_home_city: string;
    adult_home_state: string;
    adult_home_street: string;
    adult_home_zipcode: string;
    adult_home_website?: string;
}
export declare class LoginUserDto {
    username: string;
    password: string;
}
export declare class AuthUserResponseDto extends UserResponseDto {
    accessToken: string;
}
export declare class JwtPayloadDto {
    username: string;
    sub: string;
    roles: string[];
    iat: number;
    exp: number;
}
export declare class RefreshAccessTokenResponseDto {
    accessToken: string;
}
