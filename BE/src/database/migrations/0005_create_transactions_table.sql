CREATE TABLE "transaction_ledgers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email_message_id" text,
	"source" text,
	"type" text,
	"category" text,
	"acquirer" text,
	"status" text,
	"amount" bigint,
	"sender_name" text,
	"sender_account" text,
	"recipientName" text,
	"recipientAccount" text,
	"merchant_location" text,
	"remarks" text,
	"transaction_date" text,
	"reference_number" text,
	"created_at" timestamp with time zone,
	CONSTRAINT "transaction_ledgers_email_message_id_unique" UNIQUE("email_message_id")
);
--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "updated_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "deleted_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "deleted_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "transaction_categories" ALTER COLUMN "deleted_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "updated_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "deleted_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "deleted_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ALTER COLUMN "deleted_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "updated_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "deleted_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "deleted_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "webhooks" ALTER COLUMN "deleted_at" DROP NOT NULL;