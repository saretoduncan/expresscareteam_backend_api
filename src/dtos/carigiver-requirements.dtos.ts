import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UploadCaregiverRequirementsDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "Background check document (PDF only)",
    type: "string",
    format: "binary",
  })
  backgroundCheck: Express.Multer.File;

  @IsNotEmpty()
  @ApiProperty({
    description: "First Aid and CPR certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  firstAid_cpr: Express.Multer.File;

  @IsNotEmpty()
  @ApiProperty({
    description: "Fingerprint clearance document (PDF only)",
    type: "string",
    format: "binary",
  })
  figurePrint: Express.Multer.File;

  @IsNotEmpty()
  @ApiProperty({
    description: "Safety orientation certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  safetyOrientation: Express.Multer.File;

  @IsNotEmpty()
  @ApiProperty({
    description: "Tuberculosis step date document (PDF only)",
    type: "string",
    format: "binary",
  })
  tuberculosisStepDate: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Long-term care training certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  longTermCare?: Express.Multer.File;

  @IsNotEmpty()
  @ApiProperty({
    description: "Food card certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  foodCard: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Nurse delegation certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  nurseDelegation?: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Dementia specialist certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  dementiaSpecialist?: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Mental health specialty document (PDF only)",
    type: "string",
    format: "binary",
  })
  mentalHealthSpeciality?: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Administration training specialist certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  administrationTrainingSpecialist?: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Continuing education certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  continuingEducation?: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Development disability training certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  developmentDisability?: Express.Multer.File;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: "Diabetes specialty training certificate (PDF only)",
    type: "string",
    format: "binary",
  })
  diabetesSpecialtyTraining?: Express.Multer.File;
}
