import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './src/database/migrations',
    schema: './src/database/schemas.ts',
    dialect: 'postgresql',
    dbCredentials: {
        host: 'localhost',
        database: process.env.BE_POSTGRES_DB || 'financial-management',
        port: Number(process.env.BE_POSTGRES_PORT) || 5432,
        user: process.env.BE_POSTGRES_USER || 'admin',
        password: process.env.BE_POSTGRES_PASSWORD,
    },
});
