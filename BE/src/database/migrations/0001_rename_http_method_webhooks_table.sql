ALTER TABLE "webhooks" ADD COLUMN "http_method" text DEFAULT 'POST' NOT NULL;--> statement-breakpoint
ALTER TABLE "webhooks" DROP COLUMN "httpMethod";