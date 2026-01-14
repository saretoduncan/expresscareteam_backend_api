import { Repository } from "typeorm";
import { CaregiverRequirements } from "./caregiver-requirements.entity";
import { ICaregiverRequirements, ICaregiverUpdateRequirements } from "src/interfaces/caregiverRequirementInterface";
import { Caregiver } from "src/users/caregiver.entity";
export declare class CaregiverRequirementsService {
    private readonly caregiverRequirementsRepo;
    private readonly caregiverRepo;
    constructor(caregiverRequirementsRepo: Repository<CaregiverRequirements>, caregiverRepo: Repository<Caregiver>);
    createCaregiverRequirements(caregiverRequirements: ICaregiverRequirements): Promise<CaregiverRequirements>;
    getCaregiverRequirementsById(id: string): Promise<CaregiverRequirements>;
    getCaregiverRequirementsByCaregiverId(caregiverId: string): Promise<CaregiverRequirements>;
    updateCaregiverRequirements(id: string, caregiverRequirements: ICaregiverUpdateRequirements): Promise<CaregiverRequirements>;
    deleteCaregiverRequirements(id: string): Promise<void>;
    getfilesFromgs(filename: string): Promise<void>;
}
