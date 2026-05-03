process.loadEnvFile(); // load database url
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { usersTable } from './schema';

const client = new Database(process.env.DATABASE_URL!);
const db = drizzle(client);

db.delete(usersTable).run();

db.insert(usersTable)
  .values([
    { name: 'John', age: 30, email: 'john@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' }
  ])
  .run();

console.log('Seeded: John, Bob'); // server log, not browser
