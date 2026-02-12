import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
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
  IsUUID,
} from "class-validator";
import { EJOBTYPE } from "src/jobs/job.entity";
import { EAPPLICATIONSTATUS } from "src/jobs/job_application.entity";

export class PostJobDtoReq {
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
    description: "Detailed description of the home and job",
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
export class UpdateJobDto extends PartialType(PostJobDtoReq) {}
export class IsJobFilledDtoReq{
  @IsString()
  @ApiProperty({
    example: true,
    description: "update job status if it its field",
  })
  @IsBoolean()
  isJobFilled: boolean;
}
export class CreateJobApplicationDto {
  @ApiProperty({
    example: "9f2c3d6a-8a9e-4c6a-bc77-123456789abc",
    description: "Caregiver ID applying for the job",
  })
  @IsUUID()
  caregiver_id: string;

  @ApiProperty({
    example: "3b7a1f10-91c2-4a1b-9f3d-abcdef123456",
    description: "Job ID being applied for",
  })
  @IsUUID()
  job_id: string;
}

export class JobsDtoRes {
  @ApiProperty()
  id: string;

  @ApiProperty()
  job_role: string;

  @ApiProperty({ enum: EJOBTYPE })
  job_type: EJOBTYPE;

  @ApiProperty()
  start_date: Date;

  @ApiProperty()
  end_date?: Date;

  @ApiProperty()
  shift_start: string;

  @ApiProperty()
  shift_end: string;

  @ApiProperty()
  payment_rate: string;

  @ApiProperty()
  staff_needed: number;

  @ApiProperty({ type: [String] })
  certificates_needed: string[];

  @ApiProperty()
  is_urgent: boolean;

  @ApiProperty()
  is_filled: boolean;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
export class JobApplicationResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  caregiver_id: string;

  @ApiProperty()
  job_id: string;

  @ApiProperty({ enum: EAPPLICATIONSTATUS })
  status: EAPPLICATIONSTATUS;

  @ApiProperty()
  appliedAt: Date;

  @ApiProperty({ nullable: true })
  acceptedAt: Date | null;

  @ApiProperty({ nullable: true })
  rejectedAt: Date | null;

  @ApiProperty()
  updatedAt: Date;
}