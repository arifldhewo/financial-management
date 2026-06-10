import { registerAs } from "@nestjs/config";
import { getEnv } from "./env.schema";

export const appConfig = registerAs("app", () => {
  const env = getEnv();

  return {
    NODE_ENV: env.NODE_ENV,
    APP_NAME: env.APP_NAME,
    APP_PORT: env.APP_PORT,
    APP_LOG_LEVEL: env.APP_LOG_LEVEL,
  };
});

export const dbConfig = registerAs("db", () => {
  const env = getEnv();

  return {
    BE_POSTGRES_USER: env.BE_POSTGRES_USER,
    BE_POSTGRES_PASSWORD: env.BE_POSTGRES_PASSWORD,
    BE_POSTGRES_DB: env.BE_POSTGRES_DB,
    BE_POSTGRES_PORT: env.BE_POSTGRES_PORT,
  };
});