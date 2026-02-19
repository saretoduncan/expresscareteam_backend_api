import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";

import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { AdultHomeModule } from "./adult-home/adult-home.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmailModule } from "./email/email.module";
import { RedisModule } from "./redis/redis.module";
import { CaregiverRequirementsModule } from "./caregiver-requirements/caregiver-requirements.module";
import { MulterModule } from "@nestjs/platform-express";
import { FILE_UPLOAD_DIR } from "./common/constants";
import { JobsModule } from "./jobs/jobs.module";
import { DatabaseModule } from "./database/database.module";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: "postgres",
    //     url: process.env.DATABASE_URL,
    //     ssl: false,
    //     autoLoadEntities: true,
    //     synchronize: true,
    //   }),
    // }),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: FILE_UPLOAD_DIR,
      }),
    }),
    AuthModule,

    UsersModule,

    RolesModule,

    AdultHomeModule,

    EmailModule,

    RedisModule,

    CaregiverRequirementsModule,

    JobsModule,

    DatabaseModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
