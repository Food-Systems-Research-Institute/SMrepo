import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as s from 'drizzle-orm/sqlite-core';

export const usersTable = table(
  'usersTable',
  {
    id: s.int().primaryKey({ autoIncrement: true }),
    name: s.text().notNull(),
    age: s.int().notNull(),
    email: s.text().notNull().unique()
  },
  (table) => [s.uniqueIndex('email_idx').on(table.email)]
);

export type User = typeof usersTable.$inferSelect;
