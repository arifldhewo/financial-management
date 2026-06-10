import { Module } from "@nestjs/common";
import { drizzleProvider } from "./database.provider";
import { DRIZZLE } from "./database.const";

@Module({
    providers: [drizzleProvider],
    exports: [DRIZZLE],
})
export class DBModule {};