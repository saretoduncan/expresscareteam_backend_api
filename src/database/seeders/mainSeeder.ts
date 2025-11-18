import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Admin_Role_Seeder from "./seeder";

export default class MainSeeder implements Seeder {
  public async run(dataSource, factory: SeederFactoryManager): Promise<void> {
    await new Admin_Role_Seeder().run(dataSource);
  }
}
