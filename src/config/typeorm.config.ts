import MainSeeder from "src/database/seeders/mainSeeder";
import { DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";


const options: DataSourceOptions & SeederOptions = {
  type: 'postgres', // or 'mysql', 'sqlite', etc.
  url: process.env.DATABASE_URL,

  synchronize: false, // Set to true only in development/testing
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],

  // --- TypeORM-Extension Options ---
  seeds: [MainSeeder],
};

export default options;