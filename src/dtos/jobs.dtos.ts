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
  IsISO8601,
} from "class-validator";
import { MaxWords } from "src/common/validators/maxWords.validator";
import { EJOBROLE, EJOBTYPE } from "src/jobs/job.entity";
import { EAPPLICATIONSTATUS } from "src/jobs/job_application.entity";

export class PostJobDtoReq {
  @ApiProperty({
    enum: EJOBROLE,
    example: EJOBROLE.HCA,
    description: "Role required for the job(HCA or CNA). HCA is Health Care Assistant and CNA is Certified Nursing Assistant.",
  })
  @IsEnum(EJOBROLE)
  job_role: EJOBROLE;

  @ApiProperty({
    enum: EJOBTYPE,
    example: EJOBTYPE.FULL_TIME,
    description: `Type of job (${EJOBTYPE.FILL_IN} or ${EJOBTYPE.FULL_TIME} or ${EJOBTYPE.PART_TIME})`,
  })
  @IsEnum(EJOBTYPE)
  job_type: EJOBTYPE;

  @ApiProperty({
    example: "2026-02-10",
    description: "Job start date (YYYY-MM-DD)",
  })
  @IsISO8601({ strict: false })
  start_date: Date;

  @ApiPropertyOptional({
    example: "2026-02-20",
    description: "Job end date (YYYY-MM-DD)",
  })
  @IsOptional()
  @IsISO8601({ strict: false })
  end_date?: Date;

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
    example: "c8b2f9a4-91c3-4f11-ae3a-6a99b6b6f222",
    description: "Adult home / facility ID",
  })
  @IsUUID()
  adult_home_id: string;

  @ApiProperty({
    description: "Detailed job description for the role (max 200 words)",
    example:
      "Assist residents with daily care, hygiene, mobility, and medication support. Ensure a safe and clean environment while providing emotional support and companionship.",
    required: true,
  })
  @IsString()
  @MaxWords(100)
  job_description: string;
}
export class UpdateJobDto extends PartialType(PostJobDtoReq) {}
export class IsJobFilledDtoReq {
  @ApiProperty({
    example: true,
    description: "update job status if it its field",
    type: Boolean,
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
export class JobApplicationStatusRequestDto {
  @ApiProperty({
    example: "c8b2f9f4-91c3-4f11-ae3a-6a99b6b6f222",
    description: "Job application ID ",
  })
  @IsUUID()
  applicationId: string;
  @ApiProperty({
    example: "c8b2f9a4-91c3-4f11-ae3a-6a99b6b6f222",
    description: "Adult home / facility ID",
  })
  @IsUUID()
  homeId: string;
  @ApiProperty({
    example: "9f2c3d6a-8a9e-4c6a-bc77-123456789abc",
    description: "Caregiver ID applying for the job",
  })
  @IsUUID()
  caregiverId: string;
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
  job_description: string;

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
