process.loadEnvFile(); // load database url
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { products } from './schema';

import fs from 'fs'; // filestream
import Papa from 'papaparse'; // csv parsing
import type { InferInsertModel } from 'drizzle-orm';

type Product = InferInsertModel<typeof products>;

const db = drizzle(new Database(process.env.DATABASE_URL!));

// Delete records from table to reset
db.delete(products).run();

// Load CSV
const file = fs.readFileSync('src/lib/server/db/seed.csv', 'utf8'); // node path, not sveltekit shorthand
const { data } = Papa.parse<Product>(file, {
  delimiter: ',',
  dynamicTyping: true,
  header: true,
  skipEmptyLines: true
});

for (const row of data) {
  db.insert(products).values(row).run();
  console.log('Seeded', row.title);
}

console.log(`Seeded ${data.length} products from seeds.csv\n`);
