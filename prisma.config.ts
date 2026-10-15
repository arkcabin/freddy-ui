import "dotenv/config";
import { defineConfig } from "prisma/config";

/**
 * Prisma 7 Configuration
 * Follows official Prisma docs: https://pris.ly/d/config-datasource
 * Uses dotenv/config to load .env / .env.local automatically.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url:
      process.env.DATABASE_URL ??
      "postgresql://placeholder:placeholder@localhost:5432/placeholder?schema=public",
  },
});


