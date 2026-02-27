import { Expose, Type } from "class-transformer";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from "class-validator";
import { AdultHomeRepresentativeResponseDto } from "./users.dtos";
import { ApiProperty } from "@nestjs/swagger";
import { MaxWords } from "src/common/validators/maxWords.validator";

export class CreateAdultHomeDto {
  @ApiProperty({
    description: "Name of the adult home facility.",
    example: "Sunrise Adult Care Home",
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: "Name cannot exceed 100 characters" })
  name: string;

  @ApiProperty({
    description: "Contact email address of the adult home.",
    example: "info@sunrisehome.com",
  })
  @IsNotEmpty()
  @IsEmail({}, { message: "Email must be a valid address" })
  email: string;

  @ApiProperty({
    description: "Valid phone number for the adult home.",
    example: "+254700111222",
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[0-9+\-\s()]+$/, {
    message: "Phone number contains invalid characters",
  })
  @Length(10, 15, { message: "Phone number must be between 10 and 15 digits" })
  phone: string;

  @ApiProperty({
    description: "City where the adult home is located.",
    example: "Nairobi",
  })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({
    description: "State or region of the adult home.",
    example: "Nairobi County",
  })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({
    description: "Street address of the adult home.",
    example: "123 Care Street",
  })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({
    description: "Zipcode or postal code of the adult home location.",
    example: "00100",
  })
  @IsNotEmpty()
  @IsString()
  zipcode: string;

  @ApiProperty({
    description: "Optional website URL for the adult home.",
    example: "https://sunrisehome.com",
    required: false,
  })
  @IsOptional()
  @IsString()
  @Matches(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/, {
    message: "Website must be a valid URL",
  })
  website?: string;
  @ApiProperty({
    description: "home descriptions",
    example: "home descriptions",
    required: true,
  })
  @IsString()
  @MaxWords(100)
  homeDescription: string;
}
@Expose()
export class AdultHomeResponseDto {
  @ApiProperty({
    description: "Unique identifier for the adult home",
    example: "123e4567-e89b-12d3-a456-426614174000",
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: "Contact email of the adult home",
    example: "info@sunrisehome.com",
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: "Name of the adult home facility",
    example: "Sunrise Adult Care Home",
  })
  @Expose()
  name: string;

  @ApiProperty({
    description: "Contact phone number of the adult home",
    example: "+254700111222",
  })
  @Expose()
  phone: string;

  @ApiProperty({
    description: "City where the adult home is located",
    example: "Nairobi",
  })
  @Expose()
  city: string;

  @ApiProperty({
    description: "State or region of the adult home",
    example: "Nairobi County",
  })
  @Expose()
  state: string;

  @ApiProperty({
    description: "Street address of the adult home",
    example: "123 Care Street",
  })
  @Expose()
  street: string;

  @ApiProperty({
    description: "Zipcode or postal code of the adult home",
    example: "00100",
  })
  @Expose()
  zipcode: string;

  @ApiProperty({
    description: "Website URL of the adult home, if available",
    example: "https://sunrisehome.com",
    nullable: true,
  })
  @Expose()
  website: string | null;

  @ApiProperty({
    description: "List of representatives associated with the adult home",
    type: [AdultHomeRepresentativeResponseDto],
  })
  @Expose()
  @Type(() => AdultHomeRepresentativeResponseDto)
  representatives: AdultHomeRepresentativeResponseDto;
}
