import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as s from 'drizzle-orm/sqlite-core';

export const products = table(
  'products',
  {
    id: s.int().primaryKey({ autoIncrement: true }),
    team: s.text(),
    author: s.text().notNull(),
    title: s.text().notNull(),
    host: s.text().notNull(),
    date: s.text(),
    doi: s.text().notNull(),
    adc_doi: s.text(),
    pub_ag: s.text(),
    notes: s.text()
  },
  (table) => [s.uniqueIndex('doi_idx').on(table.doi)]
);

export type Product = typeof products.$inferSelect;
