import { dbConfig } from "src/config/config";
import { DRIZZLE } from "./database.const";
import { ConfigType } from "@nestjs/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schemas from "./schemas";

export const drizzleProvider = {
    provide: DRIZZLE,
    inject: [dbConfig.KEY],
    useFactory: (env: ConfigType<typeof dbConfig>) => {
        const client = postgres({
            host: 'localhost',
            port: Number(env.BE_POSTGRES_PORT),
            username: env.BE_POSTGRES_USER,
            password: env.BE_POSTGRES_PASSWORD,
            database: env.BE_POSTGRES_DB,
        });

        return drizzle(client, {
            schema: schemas,
        })
    }
}