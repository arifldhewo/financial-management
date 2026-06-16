import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const webhooksTable = pgTable("webhooks", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
    url: text("url").notNull(),
    httpMethod: text("http_method", { enum: ["POST", "PUT", "PATCH"] })
        .default("POST")
        .notNull(),
    keyHeader: text("key_header"),
    keyValue: text("key_value"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at").defaultNow().notNull(),
});

export const transactionCategories = pgTable("transaction_categories", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
    name: text("name").notNull(),
    icon_url: text("name"),
    code: text("code").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at").defaultNow().notNull(),
});

export const transactionSubCategories = pgTable("transaction_sub_categories", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
    name: text("name").notNull(),
    icon_url: text("icon_url"),
    code: text("code").notNull().unique(),
    category_id: text("category_id").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    deletedAt: timestamp("deleted_at").defaultNow().notNull(),
});

export const transactionLedgers = pgTable("transaction_ledgers", {
    ID: uuid("id").primaryKey().notNull().defaultRandom(),
});
