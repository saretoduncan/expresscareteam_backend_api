import { Global, Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplications } from './job_application.entity';
import { JobsEntity } from './job.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([JobApplications,JobsEntity])],
  providers: [JobsService],
  controllers: [JobsController],
  exports: [JobsService],
})
export class JobsModule {
}
