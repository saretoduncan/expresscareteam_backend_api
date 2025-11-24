import { Global, Module } from "@nestjs/common";
import { CaregiverRequirementsService } from "./caregiver-requirements.service";
import { CaregiverRequirementsController } from "./caregiver-requirements.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CaregiverRequirements } from "./caregiver-requirements.entity";
import { Caregiver } from "src/users/caregiver.entity";
import { S3Services } from "./s3.service";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([CaregiverRequirements, Caregiver])],

  providers: [CaregiverRequirementsService, S3Services],
  controllers: [CaregiverRequirementsController],
  exports: [CaregiverRequirementsService],
})
export class CaregiverRequirementsModule {}
