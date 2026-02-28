import { AppDataSource } from "./database/data-source";
import MainSeeder from "./database/seeders/mainSeeder";

const runSeed = async () => {
  console.log("seeding started...");
  await AppDataSource(process.env.DATABASE_URL!!, process.env.IS_SSL_REQUIRED!!).initialize();
  await new MainSeeder().run(AppDataSource(process.env.DATABASE_URL!!, process.env.IS_SSL_REQUIRED!!));
  await AppDataSource(process.env.DATABASE_URL!!, process.env.IS_SSL_REQUIRED!!).destroy();
  console.log("seeding completed...")
  process.exit(0);
};

runSeed();

export default runSeed;
