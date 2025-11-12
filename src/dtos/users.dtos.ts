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
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
    message:
      "Password must contain at least one uppercase and one lowercase letter",
  })
  password: string;
  @IsEnum(RoleEnum, {
    message: "Role must be one of the following:HOMEREPRESENTATIVE, CAREGIVER",
  })
  @Validate(NoAdminRoleConstraint)
  role: string;
}

@Expose()
export class CaregiverResponseDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  dateOfBirth: Date;

  @Expose()
  gender: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  city: string;

  @Expose()
  state: string;

  @Expose()
  street: string;

  @Expose()
  zipcode: string;

  @Expose()
  userId: string;
}

@Expose()
export class AdultHomeRepresentativeResponseDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  userId: string;

  @Expose()
  jobTitle: string;

  @Expose()
  adultHomeId: string;
}

@Expose()
export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  @Type(() => RolesResponseDto)
  roles: RolesResponseDto[];

  @Expose()
  @Type(() => CaregiverResponseDto)
  caregiver: CaregiverResponseDto | null;

  @Expose()
  @Type(() => AdultHomeRepresentativeResponseDto)
  adultHomeRepresentative: AdultHomeRepresentativeResponseDto | null;
}

export class CreateCaregiverDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

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

  @IsNotEmpty()
  @IsString()
  userId: string;
}
export class CreateAdultHomeRepresentativeRequestDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  adultHomeId: string;
}
