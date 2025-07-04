import { text, pgTable, varchar, uuid, timestamp } from "drizzle-orm/pg-core";

export const blogTable = pgTable("blogs", {
  id: uuid("id").primaryKey().defaultRandom(), // ✅ ফিক্সড
  title: varchar("title", { length: 80 }).notNull(),
  body: text("body").notNull(),
  orgId: text("orgId").notNull(),
  
});

export type CreateBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;
