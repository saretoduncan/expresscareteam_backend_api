import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";

import { CaregiverRequirementsService } from "./caregiver-requirements.service";
import { mutlerConfig } from "src/config/multer.config";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiConsumes, ApiQuery } from "@nestjs/swagger";
import { UploadCaregiverRequirementsDto } from "src/dtos/carigiver-requirements.dtos";

@Controller("caregiver-requirements")
export class CaregiverRequirementsController {
  constructor(
    private readonly caregiverRequirementsService: CaregiverRequirementsService
  ) {}

  //create caregiver requirements

  @Post("/upload")
  @ApiQuery({ name: "caregiverId", required: true })
  @ApiBody({ type: UploadCaregiverRequirementsDto })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: "backgroundCheck", maxCount: 1 },
        { name: "firstAid_cpr", maxCount: 1 },
        { name: "figurePrint", maxCount: 1 },
        { name: "safetyOrientation", maxCount: 1 },
        { name: "tuberculosisStepDate", maxCount: 1 },
        { name: "longTermCare", maxCount: 1 },
        { name: "foodCard", maxCount: 1 },
        { name: "nurseDelegation", maxCount: 1 },
        { name: "dementiaSpecialist", maxCount: 1 },
        { name: "mentalHealthSpeciality", maxCount: 1 },
        { name: "administrationTrainingSpecialist", maxCount: 1 },
        { name: "continuingEducation", maxCount: 1 },
        { name: "developmentDisability", maxCount: 1 },
        { name: "diabetesSpecialtyTraining", maxCount: 1 },
      ],
      mutlerConfig
    )
  )
  @ApiConsumes("multipart/form-data")
  async uploadCaregiverRequirements(
    @Query("caregiverId") caregiverId: string,
    @UploadedFiles() files: UploadCaregiverRequirementsDto
  ) {
    if (!caregiverId.trim()) {
      throw new BadRequestException("Caregiver ID is required");
    }
    const requiredFields = [
      "backgroundCheck",
      "firstAid_cpr",
      "figurePrint",
      "safetyOrientation",
      "tuberculosisStepDate",
      "foodCard",
    ];
    for (const field of requiredFields) {
      if (!files[field]) {
        throw new BadRequestException(`${field} is required.`);
      }
    }
    return await this.caregiverRequirementsService.createCaregiverRequirements({
      backgroundCheck: files.backgroundCheck[0].path,
      caregiverId: caregiverId,
      firstAid_cpr: files.firstAid_cpr[0].path,
      figurePrint: files.figurePrint[0].path,
      safetyOrientation: files.safetyOrientation[0].path,
      foodCard: files.foodCard[0].path,
      tuberculosisStepDate: files.tuberculosisStepDate[0].path,
      longTermCare: files.longTermCare && files.longTermCare[0].path,
      nurseDelegation: files.nurseDelegation && files.nurseDelegation[0].path,
      dementiaSpecialist:
        files.dementiaSpecialist && files.dementiaSpecialist[0].path,
      mentalHealthSpeciality:
        files.mentalHealthSpeciality && files.mentalHealthSpeciality[0].path,
      administrationTrainingSpecialist:
        files.administrationTrainingSpecialist &&
        files.administrationTrainingSpecialist[0].path,
      continuingEducation:
        files.continuingEducation && files.continuingEducation[0].path,
      developmentDisability:
        files.developmentDisability && files.developmentDisability[0].path,
      diabetesSpecialtyTraining:
        files.diabetesSpecialtyTraining &&
        files.diabetesSpecialtyTraining[0].path,
    });
  }

  //get caregiver requirements by id
  @Get()
  async getCaregiverRequirementsById(@Query("id") id: string) {
    if (!id.trim()) throw new BadRequestException("Id is required");
    return await this.caregiverRequirementsService.getCaregiverRequirementsById(
      id
    );
  }
  //get caregiver requirements by caregiver id
  @Get("caregiver")
  async getCaregiverRequirementsByCaregiverId(
    @Query("caregiverId") caregiverId: string
  ) {
    if (!caregiverId.trim())
      throw new BadRequestException("Caregiver ID is required");
    return await this.caregiverRequirementsService.getCaregiverRequirementsByCaregiverId(
      caregiverId
    );
  }

  //update caregiver requirement

  //delete caregiver requirements
}
