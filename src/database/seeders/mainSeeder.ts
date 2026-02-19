import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Admin_Role_Seeder from "./seeder";
import { DataSource } from "typeorm";

export default class MainSeeder implements Seeder {
  public async run(dataSource:DataSource, factory?: SeederFactoryManager): Promise<void> {
    await new Admin_Role_Seeder().run(dataSource);
  }
}
