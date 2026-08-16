import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/db/schema/index.ts",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        // Non-pooling connection string is required for DDL/migrations
        url: process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL!,
    },
});
