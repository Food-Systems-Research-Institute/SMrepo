import type { ColumnDef } from '@tanstack/table-core';
import type { Product } from '$lib/server/db/schema';

export type { Product };

export const columns: ColumnDef<Product>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'team', header: 'Team' },
  { accessorKey: 'author', header: 'Author' },
  { accessorKey: 'title', header: 'Title' },
  { accessorKey: 'host', header: 'Host' },
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'doi', header: 'DOI' },
  { accessorKey: 'adc_doi', header: 'ADC DOI' },
  { accessorKey: 'pub_ag', header: 'Pub Ag' },
  { accessorKey: 'notes', header: 'Notes' }
];
