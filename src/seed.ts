import { AppDataSource } from "./database/data-source";
import MainSeeder from "./database/seeders/mainSeeder";

const runSeed = async () => {
  console.log("seeding started...");
  await AppDataSource.initialize();
  await new MainSeeder().run(AppDataSource);
  await AppDataSource.destroy();
  console.log("seeding completed...")
  process.exit(0);
};

runSeed();

export default runSeed;
