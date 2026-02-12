import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JobsEntity } from "./job.entity";
import { Repository } from "typeorm";
import { JobApplications } from "./job_application.entity";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobsEntity)
    private readonly jobRepo: Repository<JobsEntity>,
    @InjectRepository(JobApplications)
    private readonly jobApplicationRepo: Repository<JobApplications>,
  ) {}

  async createJobs(){

  }

  

}
