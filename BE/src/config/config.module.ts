import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { appConfig, dbConfig } from "./config";
import { validateEnv } from "./env.schema";


@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            validate: validateEnv,
            load: [appConfig, dbConfig],
        })
    ]
})
export class AppConfigModule {}; 
