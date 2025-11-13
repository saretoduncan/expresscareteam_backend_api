import { Global, Module } from "@nestjs/common";
import { AdultHomeService } from "./adult-home.service";
@Global()
@Module({
  providers: [AdultHomeService],
  exports: [AdultHomeService],
})
export class AdultHomeModule {}
