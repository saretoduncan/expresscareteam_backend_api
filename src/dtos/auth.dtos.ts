import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";
import { RoleEnum } from "src/common/enums";
import { UserResponseDto } from "./users.dtos";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterCaregiverDto {
  @ApiProperty({ description: "Caregiver's first name", example: "John" })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ description: "Caregiver's last name", example: "Doe" })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    description:
      "Password for the account. Must be at least 6 characters, including uppercase and lowercase letters.",
    example: "Password123",
  })
  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message:
      "Password must contain at least one uppercase and one lowercase letter",
  })
  password: string;

  @ApiProperty({
    description: "Caregiver's email address",
    example: "someone@example.com",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Date of birth in ISO 8601 format (YYYY-MM-DD)",
    example: "1990-01-01",
  })
  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;

  @ApiProperty({
    description: "Gender of the caregiver",
    example: "Male",
  })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({
    description: "Phone number with 10 to 15 characters",
    example: "+12345678901",
  })
  @IsNotEmpty()
  @IsString()
  @Length(10, 15, {
    message: "Phone number must be between 10 and 15 characters",
  })
  phoneNumber: string;

  @ApiProperty({
    description: "City of residence",
    example: "New York",
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: "State of residence",
    example: "NY",
  })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({
    description: "Street address",
    example: "123 Main St",
  })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({
    description: "Postal/ZIP code",
    example: "10001",
  })
  @IsNotEmpty()
  @IsString()
  zipcode: string;
}

export class RegisterProviderDto {
  @ApiProperty({ description: "Provider's first name", example: "Alice" })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ description: "Provider's last name", example: "Smith" })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    description: "Provider's email address",
    example: "provider@example.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description:
      "Password for the account. Must be at least 6 characters, including uppercase and lowercase letters.",
    example: "SecurePass1",
  })
  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message:
      "Password must contain at least one uppercase and one lowercase letter",
  })
  password: string;

  @ApiProperty({
    description: "Provider's phone number",
    example: "+19876543210",
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({
    description: "Job title of the provider",
    example: "Nurse",
  })
  @IsString()
  @IsNotEmpty()
  job_title: string;

  @ApiProperty({
    description: "Name of the adult home facility",
    example: "Sunrise Care Home",
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: "Name cannot exceed 100 characters" })
  adult_home_name: string;

  @ApiProperty({
    description: "Email address of the adult home facility",
    example: "contact@sunrisecare.com",
  })
  @IsNotEmpty()
  @IsEmail({}, { message: "Email must be a valid address" })
  adult_home_email: string;

  @ApiProperty({
    description:
      "Phone number of the adult home facility (digits, spaces, +, -, parentheses allowed)",
    example: "+1 (555) 123-4567",
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[0-9+\-\s()]+$/, {
    message: "Phone number contains invalid characters",
  })
  @Length(10, 15, { message: "Phone number must be between 10 and 15 digits" })
  adult_home_phone: string;

  @ApiProperty({
    description: "City where the adult home is located",
    example: "Los Angeles",
  })
  @IsNotEmpty()
  @IsString()
  adult_home_city: string;

  @ApiProperty({
    description: "State where the adult home is located",
    example: "CA",
  })
  @IsNotEmpty()
  @IsString()
  adult_home_state: string;

  @ApiProperty({
    description: "Street address of the adult home",
    example: "456 Elm St",
  })
  @IsNotEmpty()
  @IsString()
  adult_home_street: string;

  @ApiProperty({
    description: "Postal/ZIP code of the adult home",
    example: "90001",
  })
  @IsNotEmpty()
  @IsString()
  adult_home_zipcode: string;

  @ApiProperty({
    description: "Website URL of the adult home (optional)",
    example: "https://www.sunrisecare.com",
    required: false,
  })
  @IsOptional()
  @IsString()
  @Matches(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/, {
    message: "Website must be a valid URL",
  })
  adult_home_website?: string;
}
export class LoginUserDto {
  @ApiProperty({
    description: "Username or email for login",
    example: "user@example.com",
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: "Password for the account",
    example: "Password123",
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class AuthUserResponseDto extends UserResponseDto {
  @ApiProperty({
    description: "JWT access token for authenticated user",
    example:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  })
  @Expose()
  accessToken: string;
}
