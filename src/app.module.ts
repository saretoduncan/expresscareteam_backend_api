import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { UsersService } from "./users/users.service";
import { RolesService } from "./roles/roles.service";
import { AdultHomeService } from './adult-home/adult-home.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
  ],
  providers: [PrismaService, UsersService, RolesService, AdultHomeService],
  exports: [PrismaService],
})
export class AppModule {}
