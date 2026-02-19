import { AdultHome } from "src/adult-home/adult-home.entity";
import { CaregiverRequirements } from "src/caregiver-requirements/caregiver-requirements.entity";
import { JobsEntity } from "src/jobs/job.entity";
import { JobApplications } from "src/jobs/job_application.entity";
import { Roles } from "src/roles/roles.entity";
import { AdultHomeRepresentative } from "src/users/adult-home-representative.entity";
import { Caregiver } from "src/users/caregiver.entity";
import { User } from "src/users/users.entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [
    User,
    Roles,
    Caregiver,
    AdultHome,
    AdultHomeRepresentative,
    JobsEntity,
    JobApplications,
    CaregiverRequirements,
  ],
  ssl: process.env.SSL_REQUIRED === "true" ? { rejectUnauthorized: false } : false,
  synchronize: true,
});
