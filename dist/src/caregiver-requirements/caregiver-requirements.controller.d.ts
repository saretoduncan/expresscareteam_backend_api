import { CaregiverRequirementsService } from "./caregiver-requirements.service";
import { UploadCaregiverRequirementsDto } from "src/dtos/carigiver-requirements.dtos";
export declare class CaregiverRequirementsController {
    private readonly caregiverRequirementsService;
    constructor(caregiverRequirementsService: CaregiverRequirementsService);
    uploadCaregiverRequirements(caregiverId: string, files: UploadCaregiverRequirementsDto): Promise<import("./caregiver-requirements.entity").CaregiverRequirements>;
    getCaregiverRequirementsById(id: string): Promise<import("./caregiver-requirements.entity").CaregiverRequirements>;
    getCaregiverRequirementsByCaregiverId(caregiverId: string): Promise<import("./caregiver-requirements.entity").CaregiverRequirements>;
}
