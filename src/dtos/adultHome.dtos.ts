import { Expose, Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { AdultHomeRepresentativeResponseDto } from './users.dtos';

export class CreateAdultHomeDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email must be a valid address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[0-9+\-\s()]+$/, { message: 'Phone number contains invalid characters' })
  @Length(10, 15, { message: 'Phone number must be between 10 and 15 digits' })
  phone: string;

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

  @IsOptional()
  @IsString()
  @Matches(
    /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/,
    { message: 'Website must be a valid URL' },
  )
  website?: string;
}
@Expose()
export class AdultHomeResponseDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  phone: string;

  @Expose()
  city: string;

  @Expose()
  state: string;

  @Expose()
  street: string;

  @Expose()
  zipcode: string;

  @Expose()
  website: string | null;

  @Expose()
  @Type(() => AdultHomeRepresentativeResponseDto)
  reps: AdultHomeRepresentativeResponseDto[];
}