import { CaregiverRequirementsService } from "./caregiver-requirements.service";
import { UploadCaregiverRequirementsDto } from "src/dtos/carigiver-requirements.dtos";
import { GcsService } from "./gsc.service";
export declare class CaregiverRequirementsController {
    private readonly caregiverRequirementsService;
    private readonly gscService;
    constructor(caregiverRequirementsService: CaregiverRequirementsService, gscService: GcsService);
    uploadCaregiverRequirements(caregiverId: string, files: UploadCaregiverRequirementsDto): Promise<void>;
    getCaregiverRequirementsById(id: string): Promise<import("./caregiver-requirements.entity").CaregiverRequirements>;
    getCaregiverRequirementsByCaregiverId(caregiverId: string): Promise<import("./caregiver-requirements.entity").CaregiverRequirements>;
}
