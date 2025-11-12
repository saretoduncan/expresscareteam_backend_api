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

export class RegisterCaregiverDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message:
      "Password must contain at least one uppercase and one lowercase letter",
  })
  password: string;
 
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 15, {
    message: "Phone number must be between 10 and 15 characters",
  })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  zipcode: string;
}

export class RegisterProviderDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message:
      "Password must contain at least one uppercase and one lowercase letter",
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsNotEmpty()
  job_title: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: "Name cannot exceed 100 characters" })
  adult_home_name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: "Email must be a valid address" })
  adult_home_email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[0-9+\-\s()]+$/, {
    message: "Phone number contains invalid characters",
  })
  @Length(10, 15, { message: "Phone number must be between 10 and 15 digits" })
  adult_home_phone: string;

  @IsNotEmpty()
  @IsString()
  adult_home_city: string;

  @IsNotEmpty()
  @IsString()
  adult_home_state: string;

  @IsNotEmpty()
  @IsString()
  adult_home_street: string;

  @IsNotEmpty()
  @IsString()
  adult_home_zipcode: string;

  @IsOptional()
  @IsString()
  @Matches(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/, {
    message: "Website must be a valid URL",
  })
  adult_home_website?: string;
}
export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}


export class AuthUserResponseDto extends UserResponseDto {
  @Expose()
  accessToken: string;
}
