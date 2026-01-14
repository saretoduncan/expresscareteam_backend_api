import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Repository } from "typeorm";
import { CaregiverRequirements } from "./caregiver-requirements.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {
  ICaregiverRequirements,
  ICaregiverUpdateRequirements,
} from "src/interfaces/caregiverRequirementInterface";
import { Caregiver } from "src/users/caregiver.entity";

@Injectable()
export class CaregiverRequirementsService {
  constructor(
    @InjectRepository(CaregiverRequirements)
    private readonly caregiverRequirementsRepo: Repository<CaregiverRequirements>,
    @InjectRepository(Caregiver)
    private readonly caregiverRepo: Repository<Caregiver>
  ) {}

  async createCaregiverRequirements(
    caregiverRequirements: ICaregiverRequirements
  ): Promise<CaregiverRequirements> {
    try {
      const caregiver = await this.caregiverRepo.findOne({
        where: {
          id: caregiverRequirements.caregiverId,
        },
        relations: {
          requirements: true,
        },
      });
      if (!caregiver)
        throw new HttpException("Caregiver not found", HttpStatus.NOT_FOUND);

      const newCaregiverRequirement = this.caregiverRequirementsRepo.create({
        administrationTrainingSpecialist:
          caregiverRequirements.administrationTrainingSpecialist,
        backgroundCheck: caregiverRequirements.backgroundCheck,
        continuingEducation: caregiverRequirements.continuingEducation,
        dementiaSpecialist: caregiverRequirements.dementiaSpecialist,
        developmentDisability: caregiverRequirements.developmentDisability,
        diabetesSpecialtyTraining:
          caregiverRequirements.diabetesSpecialtyTraining,
        firstAid_cpr: caregiverRequirements.firstAid_cpr,
        figurePrint: caregiverRequirements.figurePrint,
        foodCard: caregiverRequirements.foodCard,
        longTermCare: caregiverRequirements.longTermCare,
        mentalHealthSpeciality: caregiverRequirements.mentalHealthSpeciality,
        nurseDelegation: caregiverRequirements.nurseDelegation,
        safetyOrientation: caregiverRequirements.safetyOrientation,
        tuberculosisStepDate: caregiverRequirements.tuberculosisStepDate,
        caregiverId: caregiver.id,
      });
      return await this.caregiverRequirementsRepo.save(newCaregiverRequirement);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getCaregiverRequirementsById(
    id: string
  ): Promise<CaregiverRequirements> {
    try {
      const caregiverRequirements =
        await this.caregiverRequirementsRepo.findOne({
          where: {
            id: id,
          },
          relations: {
            caregiver: true,
          },
        });
      if (!caregiverRequirements) {
        throw new HttpException("Requirements not found", HttpStatus.NOT_FOUND);
      }
      return caregiverRequirements;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getCaregiverRequirementsByCaregiverId(
    caregiverId: string
  ): Promise<CaregiverRequirements> {
    try {
      const caregiverRequirements =
        await this.caregiverRequirementsRepo.findOne({
          relations: { caregiver: true },
          where: {
            caregiverId: caregiverId,
          },
        });
      if (!caregiverRequirements)
        throw new NotFoundException("Requirements not found");
      return caregiverRequirements;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateCaregiverRequirements(
    id: string,
    caregiverRequirements: ICaregiverUpdateRequirements
  ): Promise<CaregiverRequirements> {
    try {
      const updated = await this.caregiverRequirementsRepo.preload({
        id: id,
        ...caregiverRequirements,
      });
      if (!updated) throw new NotFoundException("Requirements not found");
      return await this.caregiverRequirementsRepo.save(updated);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteCaregiverRequirements(id: string) {
    try {
      const deleted = await this.caregiverRequirementsRepo.delete(id);
      if (!deleted) {
        throw new NotFoundException("Requirements not found");
      }
      return;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async getfilesFromgs(filename:string){

 }
}
