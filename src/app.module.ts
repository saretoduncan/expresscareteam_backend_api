import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";

import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { AdultHomeModule } from "./adult-home/adult-home.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmailModule } from './email/email.module';
import { RedisModule } from './redis/redis.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule,

    UsersModule,

    RolesModule,

    AdultHomeModule,

    EmailModule,

    RedisModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
