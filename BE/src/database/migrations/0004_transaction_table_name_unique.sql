ALTER TABLE "transaction_categories" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "transaction_categories" ADD COLUMN "icon_url" text;--> statement-breakpoint
ALTER TABLE "transaction_categories" ADD CONSTRAINT "transaction_categories_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "transaction_sub_categories" ADD CONSTRAINT "transaction_sub_categories_name_unique" UNIQUE("name");