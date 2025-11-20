import { Module } from '@nestjs/common';
import { CaregiverRequirementsService } from './caregiver-requirements.service';

@Module({
  providers: [CaregiverRequirementsService]
})
export class CaregiverRequirementsModule {}
