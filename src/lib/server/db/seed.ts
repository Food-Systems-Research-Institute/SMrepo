process.loadEnvFile(); // load database url
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { usersTable } from './schema';

import fs from 'fs'; // filestream
import Papa from 'papaparse'; // csv parsing
import type { InferInsertModel } from 'drizzle-orm';

type User = InferInsertModel<typeof usersTable>;

// const client = new Database(process.env.DATABASE_URL!);
const db = drizzle(new Database(process.env.DATABASE_URL!));

// Delete records from table to reset
db.delete(usersTable).run();

// Load CSV
const file = fs.readFileSync('src/lib/server/db/seed.csv', 'utf8'); // node path, not sveltekit shorthand
const { data } = Papa.parse<User>(file, {
  delimiter: ',',
  dynamicTyping: true,
  header: true,
  skipEmptyLines: true
});

for (const row of data) {
  db.insert(usersTable).values(row).run();
  console.log('Seeded', row.name);
}

console.log(`Seeded ${data.length} users from seeds.csv\n`);
