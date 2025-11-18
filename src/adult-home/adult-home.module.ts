import { Global, Module } from "@nestjs/common";
import { AdultHomeService } from "./adult-home.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdultHome } from "./adult-home.entity";
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AdultHome])],
  providers: [AdultHomeService],
  exports: [AdultHomeService],
})
export class AdultHomeModule {}
