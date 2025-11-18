import { Seeder, SeederFactoryManager } from "typeorm-extension";
export default class MainSeeder implements Seeder {
    run(dataSource: any, factory: SeederFactoryManager): Promise<void>;
}
