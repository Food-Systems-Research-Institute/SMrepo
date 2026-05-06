import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { datasets } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
  return {
    result: await db.select().from(datasets)
  };
};
