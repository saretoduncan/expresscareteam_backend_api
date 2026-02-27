import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppDataSource } from "./data-source";


@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
     
        if (!AppDataSource.isInitialized) {
          
          await AppDataSource.initialize();
         
        }
        
        return AppDataSource.options;
      },
    }),
  ],
})
export class DatabaseModule {}
