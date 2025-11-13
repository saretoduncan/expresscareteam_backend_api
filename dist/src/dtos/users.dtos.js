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
exports.CreateAdultHomeRepresentativeRequestDto = exports.CreateCaregiverDto = exports.UserResponseDto = exports.AdultHomeRepresentativeResponseDto = exports.CaregiverResponseDto = exports.CreateUserDto = exports.NoAdminRoleConstraint = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../common/enums");
const roles_dtos_1 = require("./roles.dtos");
const swagger_1 = require("@nestjs/swagger");
let NoAdminRoleConstraint = class NoAdminRoleConstraint {
    validate(role) {
        return role !== enums_1.RoleEnum.ADMIN;
    }
    defaultMessage() {
        return "You cannot assign yourself ADMIN role";
    }
};
exports.NoAdminRoleConstraint = NoAdminRoleConstraint;
exports.NoAdminRoleConstraint = NoAdminRoleConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "noAdminRole", async: false })
], NoAdminRoleConstraint);
class CreateUserDto {
    email;
    password;
    role;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@example.com', description: 'User email address' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Password123', description: 'User password with at least one uppercase and one lowercase letter' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: "Password must be at least 6 characters long" }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
        message: "Password must contain at least one uppercase and one lowercase letter",
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HOMEREPRESENTATIVE', description: 'User role, must be HOMEREPRESENTATIVE or CAREGIVER' }),
    (0, class_validator_1.IsEnum)(enums_1.RoleEnum, {
        message: "Role must be one of the following:HOMEREPRESENTATIVE, CAREGIVER",
    }),
    (0, class_validator_1.Validate)(NoAdminRoleConstraint),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
let CaregiverResponseDto = class CaregiverResponseDto {
    id;
    email;
    firstName;
    lastName;
    dateOfBirth;
    gender;
    phoneNumber;
    city;
    state;
    street;
    zipcode;
    userId;
};
exports.CaregiverResponseDto = CaregiverResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345', description: 'Caregiver ID' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'caregiver@example.com', description: 'Caregiver email address' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'Caregiver first name' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Caregiver last name' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1990-01-01', description: 'Caregiver date of birth' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], CaregiverResponseDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male', description: 'Caregiver gender' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890', description: 'Caregiver phone number' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'New York', description: 'Caregiver city' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NY', description: 'Caregiver state' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', description: 'Caregiver street address' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10001', description: 'Caregiver zipcode' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user123', description: 'Associated user ID' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CaregiverResponseDto.prototype, "userId", void 0);
exports.CaregiverResponseDto = CaregiverResponseDto = __decorate([
    (0, class_transformer_1.Expose)()
], CaregiverResponseDto);
let AdultHomeRepresentativeResponseDto = class AdultHomeRepresentativeResponseDto {
    id;
    email;
    firstName;
    lastName;
    phoneNumber;
    userId;
    jobTitle;
    adultHomeId;
};
exports.AdultHomeRepresentativeResponseDto = AdultHomeRepresentativeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '67890', description: 'Adult home representative ID' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'representative@example.com', description: 'Adult home representative email address' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jane', description: 'Adult home representative first name' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Smith', description: 'Adult home representative last name' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1987654321', description: 'Adult home representative phone number' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user456', description: 'Associated user ID' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Manager', description: 'Job title of the adult home representative' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "jobTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'home789', description: 'Associated adult home ID' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdultHomeRepresentativeResponseDto.prototype, "adultHomeId", void 0);
exports.AdultHomeRepresentativeResponseDto = AdultHomeRepresentativeResponseDto = __decorate([
    (0, class_transformer_1.Expose)()
], AdultHomeRepresentativeResponseDto);
let UserResponseDto = class UserResponseDto {
    id;
    username;
    roles;
    caregiver;
    adultHomeRepresentative;
};
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user123', description: 'User ID' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'username123', description: 'Username' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [roles_dtos_1.RolesResponseDto], description: 'User roles' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => roles_dtos_1.RolesResponseDto),
    __metadata("design:type", Array)
], UserResponseDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CaregiverResponseDto, nullable: true, description: 'Caregiver details if applicable' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => CaregiverResponseDto),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "caregiver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AdultHomeRepresentativeResponseDto, nullable: true, description: 'Adult home representative details if applicable' }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => AdultHomeRepresentativeResponseDto),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "adultHomeRepresentative", void 0);
exports.UserResponseDto = UserResponseDto = __decorate([
    (0, class_transformer_1.Expose)()
], UserResponseDto);
class CreateCaregiverDto {
    firstName;
    lastName;
    email;
    dateOfBirth;
    gender;
    phoneNumber;
    city;
    state;
    street;
    zipcode;
    userId;
}
exports.CreateCaregiverDto = CreateCaregiverDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'Caregiver first name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Caregiver last name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'caregiver@example.com', description: 'Caregiver email address' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1990-01-01', description: 'Caregiver date of birth' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateCaregiverDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Female', description: 'Caregiver gender' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890', description: 'Caregiver phone number' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 15, {
        message: "Phone number must be between 10 and 15 characters",
    }),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'New York', description: 'Caregiver city' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NY', description: 'Caregiver state' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', description: 'Caregiver street address' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10001', description: 'Caregiver zipcode' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user123', description: 'Associated user ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCaregiverDto.prototype, "userId", void 0);
class CreateAdultHomeRepresentativeRequestDto {
    firstName;
    lastName;
    email;
    phoneNumber;
    jobTitle;
    userId;
    adultHomeId;
}
exports.CreateAdultHomeRepresentativeRequestDto = CreateAdultHomeRepresentativeRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Jane', description: 'Adult home representative first name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdultHomeRepresentativeRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Smith', description: 'Adult home representative last name' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdultHomeRepresentativeRequestDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'representative@example.com', description: 'Adult home representative email address' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdultHomeRepresentativeRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1987654321', description: 'Adult home representative phone number' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdultHomeRepresentativeRequestDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Manager', description: 'Job title of the adult home representative' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdultHomeRepresentativeRequestDto.prototype, "jobTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user456', description: 'Associated user ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdultHomeRepresentativeRequestDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'home789', description: 'Associated adult home ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAdultHomeRepresentativeRequestDto.prototype, "adultHomeId", void 0);
//# sourceMappingURL=users.dtos.js.map