import {  pgTable, uuid, timestamp,text,uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkId : text("clerk_id").unique().notNull(),
  name : text("name").notNull(),
    //todo add banner field
  imgUrl: text("img_url").notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()

}, (table)=>  [uniqueIndex('clerk_id_index').on(table.clerkId)]);

const userRelations = relations(users, ({many})=>({
  videos: many(videos)
}))

export const categories =pgTable("categories", {
  id: uuid('id').primaryKey().defaultRandom(),
  name :text("name").notNull().unique(),
  description : text("description"),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table)=>  [uniqueIndex('name_index').on(table.name)]);

const categoriesRelations = relations(categories, ({many})=>({
  videos: many(videos)
}))


export const videos = pgTable("videos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title:text("title").notNull(),
  description: text("description"),
  userId: uuid("user_id").references(()=>users.id, {
    onDelete:"cascade" //if user id deleted by any chance all the videos will be deleted
  }).notNull(),
  categoryId: uuid("category_id").references(()=>categories.id, {
    onDelete: "set null"
  }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()

})

//Documentation   https://orm.drizzle.team/docs/relations
// after any changes run        bunx drizzle-kit push
//defining relations 
export const videoRelations = relations(videos, ({one,many}) => ({
  user: one(users, {
    fields: [videos.userId],
    references: [users.id]
  }),

  category: one(categories ,{
    fields : [videos.categoryId],
    references: [categories.id ]
  })
}));