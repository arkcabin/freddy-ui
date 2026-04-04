import { defineConfig } from "@prisma/config";

/**
 * Prisma 7 Configuration
 * Handles connection strings and migration settings for PostgreSQL.
 */
export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
