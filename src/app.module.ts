import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { UsersService } from './users/users.service';
import { RolesService } from './roles/roles.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
  ],
  providers: [PrismaService, UsersService, RolesService],
  exports: [PrismaService],
})
export class AppModule {}
