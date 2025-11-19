"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordRequestDto = exports.VerifyResetPasswordOtp = exports.ResetPasswordRequestDto = exports.RefreshAccessTokenResponseDto = exports.JwtPayloadDto = exports.AuthUserResponseDto = exports.LoginUserDto = exports.RegisterProviderDto = exports.RegisterCaregiverDto = void 0;
const class_validator_1 = require("class-validator");
const users_dtos_1 = require("./users.dtos");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const customValidation_1 = require("./customValidation");
class RegisterCaregiverDto {
    firstName;
    lastName;
    password;
    confirmPassword;
    email;
    dateOfBirth;
    gender;
    phoneNumber;
    city;
    state;
    street;
    zipcode;
}
exports.RegisterCaregiverDto = RegisterCaregiverDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Caregiver's first name", example: "John" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Caregiver's last name", example: "Doe" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Password for the account. Must be at least 6 characters, including uppercase and lowercase letters.",
        example: "Password123",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: "Password must be at least 6 characters long" }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
        message: "Password must contain at least one uppercase and one lowercase letter",
    }),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Confirmation of the new password. Must match the 'password' field.",
        example: "NewPassword123",
    }),
    (0, customValidation_1.MatchPasswords)({ message: "Password must match" }),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Caregiver's email address",
        example: "someone@example.com",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Date of birth in ISO 8601 format (YYYY-MM-DD)",
        example: "1990-01-01",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], RegisterCaregiverDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Gender of the caregiver",
        example: "Male",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Phone number with 10 to 15 characters",
        example: "+12345678901",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 15, {
        message: "Phone number must be between 10 and 15 characters",
    }),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "City of residence",
        example: "New York",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "State of residence",
        example: "NY",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Street address",
        example: "123 Main St",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Postal/ZIP code",
        example: "10001",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterCaregiverDto.prototype, "zipcode", void 0);
class RegisterProviderDto {
    first_name;
    last_name;
    email;
    password;
    confirmPassword;
    phone_number;
    job_title;
    adult_home_name;
    adult_home_email;
    adult_home_phone;
    adult_home_city;
    adult_home_state;
    adult_home_street;
    adult_home_zipcode;
    adult_home_website;
}
exports.RegisterProviderDto = RegisterProviderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Provider's first name", example: "Alice" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Provider's last name", example: "Smith" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Provider's email address",
        example: "provider@example.com",
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Password for the account. Must be at least 6 characters, including uppercase and lowercase letters.",
        example: "SecurePass1",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: "Password must be at least 6 characters long" }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
        message: "Password must contain at least one uppercase and one lowercase letter",
    }),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Confirmation of the new password. Must match the 'password' field.",
        example: "NewPassword123",
    }),
    (0, customValidation_1.MatchPasswords)({ message: "Password must match" }),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Provider's phone number",
        example: "+19876543210",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Job title of the provider",
        example: "Nurse",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "job_title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Name of the adult home facility",
        example: "Sunrise Care Home",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100, { message: "Name cannot exceed 100 characters" }),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Email address of the adult home facility",
        example: "contact@sunrisecare.com",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, { message: "Email must be a valid address" }),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Phone number of the adult home facility (digits, spaces, +, -, parentheses allowed)",
        example: "+1 (555) 123-4567",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[0-9+\-\s()]+$/, {
        message: "Phone number contains invalid characters",
    }),
    (0, class_validator_1.Length)(10, 15, { message: "Phone number must be between 10 and 15 digits" }),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "City where the adult home is located",
        example: "Los Angeles",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "State where the adult home is located",
        example: "CA",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Street address of the adult home",
        example: "456 Elm St",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Postal/ZIP code of the adult home",
        example: "90001",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Website URL of the adult home (optional)",
        example: "https://www.sunrisecare.com",
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/, {
        message: "Website must be a valid URL",
    }),
    __metadata("design:type", String)
], RegisterProviderDto.prototype, "adult_home_website", void 0);
class LoginUserDto {
    username;
    password;
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Username or email for login",
        example: "user@example.com",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Password for the account",
        example: "Password123",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
class AuthUserResponseDto extends users_dtos_1.UserResponseDto {
    accessToken;
}
exports.AuthUserResponseDto = AuthUserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "JWT access token for authenticated user",
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AuthUserResponseDto.prototype, "accessToken", void 0);
class JwtPayloadDto {
    username;
    sub;
    roles;
    iat;
    exp;
}
exports.JwtPayloadDto = JwtPayloadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Username or email of the authenticated user",
        example: "cynthia.wanjiku@example.com",
    }),
    __metadata("design:type", String)
], JwtPayloadDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User unique identifier (JWT subject)",
        example: "3d5f28b4-3b36-4bb2-9372-1187f0ad9abd",
    }),
    __metadata("design:type", String)
], JwtPayloadDto.prototype, "sub", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "List of roles assigned to the user",
        example: ["HOMEREPRESENTATIVE"],
        isArray: true,
        type: String,
    }),
    __metadata("design:type", Array)
], JwtPayloadDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Issued at timestamp",
        example: 1763452612,
    }),
    __metadata("design:type", Number)
], JwtPayloadDto.prototype, "iat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Expiry timestamp",
        example: 4355452612,
    }),
    __metadata("design:type", Number)
], JwtPayloadDto.prototype, "exp", void 0);
class RefreshAccessTokenResponseDto {
    accessToken;
}
exports.RefreshAccessTokenResponseDto = RefreshAccessTokenResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Newly issued JWT access token after refreshing",
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNjg1MjM5MDIyfQ.xxxxxx",
    }),
    __metadata("design:type", String)
], RefreshAccessTokenResponseDto.prototype, "accessToken", void 0);
class ResetPasswordRequestDto {
    email;
}
exports.ResetPasswordRequestDto = ResetPasswordRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Email address of the user requesting password reset",
        example: "user@example.com",
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResetPasswordRequestDto.prototype, "email", void 0);
class VerifyResetPasswordOtp {
    email;
    otp;
}
exports.VerifyResetPasswordOtp = VerifyResetPasswordOtp;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Email address of the user requesting password reset",
        example: "user@example.com",
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyResetPasswordOtp.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "OTP code sent to the user's email for verification",
        example: "123456",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyResetPasswordOtp.prototype, "otp", void 0);
class UpdatePasswordRequestDto {
    password;
    confirmPassword;
}
exports.UpdatePasswordRequestDto = UpdatePasswordRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Password for the account. Must be at least 6 characters, including uppercase and lowercase letters.",
        example: "Password123",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: "Password must be at least 6 characters long" }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
        message: "Password must contain at least one uppercase and one lowercase letter",
    }),
    __metadata("design:type", String)
], UpdatePasswordRequestDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Confirmation of the new password. Must match the 'password' field.",
        example: "NewPassword123",
    }),
    (0, customValidation_1.MatchPasswords)({ message: "Password must match" }),
    __metadata("design:type", String)
], UpdatePasswordRequestDto.prototype, "confirmPassword", void 0);
//# sourceMappingURL=auth.dtos.js.map