import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
  return {
    result: await db.select().from(products)
  };
};
