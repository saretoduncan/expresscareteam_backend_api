import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsString,
  IsEnum,
  IsDateString,
  IsOptional,
  IsNumberString,
  IsInt,
  Min,
  IsArray,
  ArrayNotEmpty,
  IsBoolean,
} from "class-validator";
import { EJOBTYPE } from "src/jobs/job.entity";

export class PostJobDto {
  @ApiProperty({
    example: "Registered Nurse",
    description: "Role required for the job",
  })
  @IsString()
  job_role: string;

  @ApiProperty({
    enum: EJOBTYPE,
    example: EJOBTYPE.FULL_TIME,
    description: "Type of job (full-time or part-time)",
  })
  @IsEnum(EJOBTYPE)
  job_type: EJOBTYPE;

  @ApiProperty({
    example: "2026-02-10",
    description: "Job start date (YYYY-MM-DD)",
  })
  @IsDateString()
  start_date: string;

  @ApiPropertyOptional({
    example: "2026-02-20",
    description: "Job end date (YYYY-MM-DD)",
  })
  @IsOptional()
  @IsDateString()
  end_date?: string;

  @ApiProperty({
    example: "08:00",
    description: "Shift start time (HH:mm)",
  })
  @IsString()
  shift_start: string;

  @ApiProperty({
    example: "17:00",
    description: "Shift end time (HH:mm)",
  })
  @IsString()
  shift_end: string;

  @ApiProperty({
    example: "150.00",
    description: "Payment rate per shift/hour",
  })
  @IsNumberString()
  payment_rate: string;

  @ApiProperty({
    example: 2,
    minimum: 1,
    description: "Number of staff needed to fill the shift",
  })
  @IsInt()
  @Min(1)
  staff_needed: number;

  @ApiProperty({
    example: ["CPR", "ICU"],
    description: "Required certificates for the job",
    type: [String],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  certificates_needed: string[];

  @ApiPropertyOptional({
    example: true,
    description: "Marks whether the job is urgent",
  })
  @IsOptional()
  @IsBoolean()
  is_urgent?: boolean;

  @ApiProperty({
    example: "Night shift for ICU ward, 2 nurses required.",
    description: "Detailed job description",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "c8b2f9a4-91c3-4f11-ae3a-6a99b6b6f222",
    description: "Adult home / facility ID",
  })
  @IsString()
  adult_home_id: string;
}