import { pgTable, uuid, text, timestamp, bigint } from "drizzle-orm/pg-core";
import { HttpMethod, TransactionLedgerStatuses } from "./schemas.types";

export const webhooksTable = pgTable("webhooks", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
    url: text("url").notNull(),
    httpMethod: text("http_method").$type<HttpMethod>().default(HttpMethod.POST).notNull(),
    keyHeader: text("key_header"),
    keyValue: text("key_value"),
    createdAt: timestamp("created_at", { withTimezone: true }),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
});

export const transactionCategories = pgTable("transaction_categories", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
    name: text("name").notNull().unique(),
    iconUrl: text("icon_url"),
    createdAt: timestamp("created_at", { withTimezone: true }),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
});

export const transactionSubCategories = pgTable("transaction_sub_categories", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
    name: text("name").notNull().unique(),
    iconUrl: text("icon_url"),
    category_id: text("category_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
});

export const transactionLedgers = pgTable("transaction_ledgers", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
    emailMessageID: text("email_message_id").unique().$type(),
    bankSource: text("bank_source"),
    type: text("type"),
    category: text("category"),
    acquirer: text("acquirer"),
    status: text("status").$type<TransactionLedgerStatuses>(),
    amount: bigint("amount", { mode: "number" }),
    senderName: text("sender_name"),
    senderAccount: text("sender_account"),
    recipientName: text("recipientName"),
    recipientAccount: text("recipientAccount"),
    merchantLocation: text("merchant_location"),
    remarks: text("remarks"),
    transactionDate: timestamp("transaction_date", { withTimezone: true }),
    referenceNumber: text("reference_number"),
    createdAt: timestamp("created_at", { withTimezone: true }),
});
