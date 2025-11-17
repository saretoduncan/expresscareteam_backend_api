import { Global, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Caregiver } from "./caregiver.entity";
import { AdultHomeRepresentative } from "./adult-home-representative.entity";
@Global()
@Module({
 imports:[
    TypeOrmModule.forFeature([User,Caregiver, AdultHomeRepresentative])
 ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
