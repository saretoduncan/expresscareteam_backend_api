import { Global, Module } from "@nestjs/common";
import { CaregiverRequirementsService } from "./caregiver-requirements.service";
import { CaregiverRequirementsController } from "./caregiver-requirements.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CaregiverRequirements } from "./caregiver-requirements.entity";
import { Caregiver } from "src/users/caregiver.entity";

import { GcsService } from "./gsc.service";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([CaregiverRequirements, Caregiver])],

  providers: [CaregiverRequirementsService,GcsService],
  controllers: [CaregiverRequirementsController],
  exports: [CaregiverRequirementsService, GcsService],
})
export class CaregiverRequirementsModule {}
