import "dotenv/config";
import { defineConfig, env } from "prisma/config";

/**
 * Prisma 7 Configuration
 * Follows official Prisma docs: https://pris.ly/d/config-datasource
 * Uses dotenv/config to load .env / .env.local automatically.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});


