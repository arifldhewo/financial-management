import { registerAs } from "@nestjs/config";
import { getEnv } from "./env.schema";

export const appConfig = registerAs("app", () => {
  const env = getEnv();

  return {
    nodeEnv: env.NODE_ENV,
    appName: env.APP_NAME,
    appPort: env.APP_PORT,
    appLogLevel: env.APP_LOG_LEVEL,
  };
});
