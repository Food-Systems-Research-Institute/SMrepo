process.loadEnvFile(); // load database url
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { papers, datasets } from './schema';

import fs from 'fs'; // filestream
import Papa from 'papaparse'; // csv parsing
import type { InferInsertModel } from 'drizzle-orm';

type Paper = InferInsertModel<typeof papers>;
type Dataset = InferInsertModel<typeof datasets>;

const db = drizzle(new Database(process.env.DATABASE_URL!));

// Delete records from table to reset
db.delete(papers).run();
db.delete(datasets).run();

// Load CSV
const file = fs.readFileSync('src/lib/server/db/seed.csv', 'utf8'); // node path, not sveltekit shorthand
const { data } = Papa.parse<Product>(file, {
  delimiter: ',',
  dynamicTyping: true,
  header: true,
  skipEmptyLines: true
});

for (const row of data) {
  if (row['type'] === 'dataset') {
    db.insert(datasets).values(row).run();
  } else if (row['type'] === 'paper') {
    db.insert(papers).values(row).run();
  } else {
    // throw new Error(`Unknown type ${row['type']} on row: ${JSON.stringify(row)}`);
    console.warn(`Unknown type ${row['type']} on row: ${JSON.stringify(row)}`);
  }
}

console.log(`Seeded ${data.length} products from seeds.csv\n`);
