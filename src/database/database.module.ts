import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./data-source";

import { ConfigModule } from "@nestjs/config";
import { DatabaseService } from "./database.service";
import { AdultHome } from "src/adult-home/adult-home.entity";
import { AuthSessionEntity } from "src/auth/session.entity";
import { CaregiverRequirements } from "src/caregiver-requirements/caregiver-requirements.entity";
import { JobsEntity } from "src/jobs/job.entity";
import { JobApplications } from "src/jobs/job_application.entity";
import { Roles } from "src/roles/roles.entity";
import { AdultHomeRepresentative } from "src/users/adult-home-representative.entity";
import { Caregiver } from "src/users/caregiver.entity";
import { User } from "src/users/users.entity";

@Global()
@Module({
  imports: [
    ConfigModule,

    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        // if (!AppDataSource(process.env.DATABASE_URL!!, process.env.IS_SSL_REQUIRED!!).isInitialized) {
        //   try {

        //     AppDataSource(process.env.DATABASE_URL!!, process.env.IS_SSL_REQUIRED!!).initialize()

        //   } catch (err) {
        //     console.log("___db__error", err);
        //   }
        // }
        // return AppDataSource(process.env.DATABASE_URL!!, process.env.IS_SSL_REQUIRED!!).options;
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: false,
        autoLoadEntities: true,
        synchronize: true,
        entities: [
          User,
          Roles,
          Caregiver,
          AdultHome,
          AdultHomeRepresentative,
          JobsEntity,
          JobApplications,
          CaregiverRequirements,
          AuthSessionEntity,
        ],
      }),
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
