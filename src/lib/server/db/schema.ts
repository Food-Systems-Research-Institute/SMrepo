import { sqliteTable as table } from 'drizzle-orm/sqlite-core';
import * as s from 'drizzle-orm/sqlite-core';

export const papers = table(
  'papers',
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
  }
);

export const datasets = table(
  'datasets',
  {
    id: s.int().primaryKey({ autoIncrement: true }),
    team: s.text(),
    author: s.text().notNull(),
    title: s.text().notNull(),
    host: s.text().notNull(),
    date: s.text(),
    doi: s.text().notNull(),
    notes: s.text()
  }
);

export type Paper = typeof papers.$inferSelect;
export type Dataset = typeof datasets.$inferSelect;
