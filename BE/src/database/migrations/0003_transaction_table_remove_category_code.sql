ALTER TABLE "transaction_categories" DROP CONSTRAINT "transaction_categories_code_unique";--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" DROP CONSTRAINT "transaction_sub_categories_code_unique";--> statement-breakpoint
ALTER TABLE "transaction_categories" DROP COLUMN "code";--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" DROP COLUMN "code";