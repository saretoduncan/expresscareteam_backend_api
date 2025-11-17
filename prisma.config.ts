import { defineConfig, env } from "prisma/config";
import * as dotenv from "dotenv";

dotenv.config();



export default defineConfig({
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
