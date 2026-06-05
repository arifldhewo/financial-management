import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "staging", "production"])
    .default("development"),
  APP_NAME: z.string().default("nest-financial-management"),
  APP_PORT: z.coerce.number().int().positive().default(8081),
  APP_LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("debug"),

  DB_USER: z.string().default("admin"),
  DB_PASSWORD: z.string().default("admin"),
  DB_NAME: z.string().default("nest-financial-mangement"),
  DB_PORT: z.string().default("5432"),
});

export type Env = z.infer<typeof envSchema>;
let validatedEnv: Env | undefined;

export function validateEnv(env: Record<string, unknown>): Env {
  const parsed = envSchema.safeParse(env);

  if (!parsed.success) {
    const errors = parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("\n");

    throw new Error(`Environment validation failed:\n${errors}`);
  }

  validatedEnv = parsed.data;

  return parsed.data;
}

export function getEnv(): Env {
  if (!validatedEnv) {
    throw new Error(
      `Environment has not been validated yet. Make sure validatedEnv is registered in ConfigModule.forRoot().`,
    );
  }

  return validatedEnv;
}
