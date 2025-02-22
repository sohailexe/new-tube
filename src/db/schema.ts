import {  pgTable, uuid, timestamp,text,uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId : text("clerk_id").unique().notNull(),
  name : text("name").notNull(),
    //todo add banner field
  imgUrl: text("img_url").notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()

}, (table)=>  [uniqueIndex('clerk_id_index').on(table.clerkId)]);
