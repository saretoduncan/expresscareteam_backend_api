import { CaregiverRequirementsService } from "./caregiver-requirements.service";
import { UploadCaregiverRequirementsDto } from "src/dtos/carigiver-requirements.dtos";
import { S3Services } from "./s3.service";
export declare class CaregiverRequirementsController {
    private readonly caregiverRequirementsService;
    private readonly s3Service;
    constructor(caregiverRequirementsService: CaregiverRequirementsService, s3Service: S3Services);
    uploadCaregiverRequirements(caregiverId: string, files: UploadCaregiverRequirementsDto): Promise<void>;
    getCaregiverRequirementsById(id: string): Promise<import("./caregiver-requirements.entity").CaregiverRequirements>;
    getCaregiverRequirementsByCaregiverId(caregiverId: string): Promise<import("./caregiver-requirements.entity").CaregiverRequirements>;
}
