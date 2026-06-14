CREATE TABLE "transaction_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"code" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "transaction_categories_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "transaction_sub_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"icon_url" text,
	"code" text NOT NULL,
	"category_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "transaction_sub_categories_code_unique" UNIQUE("code")
);
