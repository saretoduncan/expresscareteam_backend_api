import { Global, Module } from "@nestjs/common";
import { CaregiverRequirementsService } from "./caregiver-requirements.service";
import { CaregiverRequirementsController } from "./caregiver-requirements.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CaregiverRequirements } from "./caregiver-requirements.entity";
import { Caregiver } from "src/users/caregiver.entity";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([CaregiverRequirements, Caregiver])],

  providers: [CaregiverRequirementsService],
  controllers: [CaregiverRequirementsController],
  exports: [CaregiverRequirementsService],
})
export class CaregiverRequirementsModule {}
