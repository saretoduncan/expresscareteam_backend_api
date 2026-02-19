import { Exclude, Expose, Type } from "class-transformer";
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MinLength,
  Validate,
  ValidatorConstraint,
} from "class-validator";
import { RoleEnum } from "src/common/enums";
import { RolesResponseDto } from "./roles.dtos";
import { ApiProperty } from "@nestjs/swagger";

@ValidatorConstraint({ name: "noAdminRole", async: false })
export class NoAdminRoleConstraint {
  validate(role: RoleEnum) {
    return role !== RoleEnum.ADMIN;
  }
  defaultMessage() {
    return "You cannot assign yourself ADMIN role";
  }
}

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123', description: 'User password with at least one uppercase and one lowercase letter' })
  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message:
      "Password must contain at least one uppercase and one lowercase letter",
  })
  password: string;

  @ApiProperty({ example: 'HOMEREPRESENTATIVE', description: 'User role, must be HOMEREPRESENTATIVE or CAREGIVER' })
  @IsEnum(RoleEnum, {
    message: "Role must be one of the following:HOMEREPRESENTATIVE, CAREGIVER",
  })
  @Validate(NoAdminRoleConstraint)
  role: RoleEnum;
}

@Expose()
export class CaregiverResponseDto {
  
  @ApiProperty({ example: '12345', description: 'Caregiver ID' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'caregiver@example.com', description: 'Caregiver email address' })
  @Expose()
  email: string;

  @ApiProperty({ example: 'John', description: 'Caregiver first name' })
  @Expose()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Caregiver last name' })
  @Expose()
  lastName: string;

  @ApiProperty({ example: '1990-01-01', description: 'Caregiver date of birth' })
  @Expose()
  dateOfBirth: Date;

  @ApiProperty({ example: 'Male', description: 'Caregiver gender' })
  @Expose()
  gender: string;

  @ApiProperty({ example: '+1234567890', description: 'Caregiver phone number' })
  @Expose()
  phoneNumber: string;

  @ApiProperty({ example: 'New York', description: 'Caregiver city' })
  @Expose()
  city: string;

  @ApiProperty({ example: 'NY', description: 'Caregiver state' })
  @Expose()
  state: string;

  @ApiProperty({ example: '123 Main St', description: 'Caregiver street address' })
  @Expose()
  street: string;

  @ApiProperty({ example: '10001', description: 'Caregiver zipcode' })
  @Expose()
  zipcode: string;

  @ApiProperty({ example: 'user123', description: 'Associated user ID' })
  @Expose()
  userId: string;
}

@Expose()
export class AdultHomeRepresentativeResponseDto {
  @ApiProperty({ example: '67890', description: 'Adult home representative ID' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'representative@example.com', description: 'Adult home representative email address' })
  @Expose()
  email: string;

  @ApiProperty({ example: 'Jane', description: 'Adult home representative first name' })
  @Expose()
  firstName: string;

  @ApiProperty({ example: 'Smith', description: 'Adult home representative last name' })
  @Expose()
  lastName: string;

  @ApiProperty({ example: '+1987654321', description: 'Adult home representative phone number' })
  @Expose()
  phoneNumber: string;

  @ApiProperty({ example: 'user456', description: 'Associated user ID' })
  @Expose()
  userId: string;

  @ApiProperty({ example: 'Manager', description: 'Job title of the adult home representative' })
  @Expose()
  jobTitle: string;

  @ApiProperty({ example: 'home789', description: 'Associated adult home ID' })
  @Expose()
  adultHomeId: string;
}

@Expose()
export class UserResponseDto {
  @ApiProperty({ example: 'user123', description: 'User ID' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'username123', description: 'Username' })
  @Expose()
  username: string;

  @ApiProperty({ type: [RolesResponseDto], description: 'User roles' })
  @Expose()
  @Type(() => RolesResponseDto)
  roles: RolesResponseDto[];

  @ApiProperty({ type: CaregiverResponseDto, nullable: true, description: 'Caregiver details if applicable' })
  @Expose()
  @Type(() => CaregiverResponseDto)
  caregiver?: CaregiverResponseDto | null;

  @ApiProperty({ type: AdultHomeRepresentativeResponseDto, nullable: true, description: 'Adult home representative details if applicable' })
  @Expose()
  @Type(() => AdultHomeRepresentativeResponseDto)
  adultHomeRepresentative?: AdultHomeRepresentativeResponseDto | null;
}

export class CreateCaregiverDto {
  @ApiProperty({ example: 'John', description: 'Caregiver first name' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Caregiver last name' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'caregiver@example.com', description: 'Caregiver email address' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '1990-01-01', description: 'Caregiver date of birth' })
  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;

  @ApiProperty({ example: 'Female', description: 'Caregiver gender' })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({ example: '+1234567890', description: 'Caregiver phone number' })
  @IsNotEmpty()
  @IsString()
  @Length(10, 15, {
    message: "Phone number must be between 10 and 15 characters",
  })
  phoneNumber: string;

  @ApiProperty({ example: 'New York', description: 'Caregiver city' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: 'NY', description: 'Caregiver state' })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ example: '123 Main St', description: 'Caregiver street address' })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ example: '10001', description: 'Caregiver zipcode' })
  @IsNotEmpty()
  @IsString()
  zipcode: string;

  @ApiProperty({ example: 'user123', description: 'Associated user ID' })
  @IsNotEmpty()
  @IsString()
  userId: string;
}
export class CreateAdultHomeRepresentativeRequestDto {
  @ApiProperty({ example: 'Jane', description: 'Adult home representative first name' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Smith', description: 'Adult home representative last name' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'representative@example.com', description: 'Adult home representative email address' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+1987654321', description: 'Adult home representative phone number' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ example: 'Manager', description: 'Job title of the adult home representative' })
  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @ApiProperty({ example: 'user456', description: 'Associated user ID' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'home789', description: 'Associated adult home ID' })
  @IsString()
  @IsNotEmpty()
  adultHomeId: string;
}
