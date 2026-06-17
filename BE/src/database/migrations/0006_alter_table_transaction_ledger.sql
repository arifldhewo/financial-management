ALTER TABLE "transaction_ledgers" RENAME COLUMN "source" TO "bank_source";--> statement-breakpoint
ALTER TABLE "transaction_ledgers" ALTER COLUMN "transaction_date" SET DATA TYPE timestamp with time zone USING "transaction_date"::timestamp with time zone;
