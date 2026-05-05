import type { ColumnDef } from '@tanstack/table-core';
import type { Product } from '$lib/server/db/schema';
import { createRawSnippet } from 'svelte';
import { renderSnippet } from '$lib/components/ui/data-table/index.js';

export type { Product };

// Format links as links, if it starts with https
// Return single HTML element
const linkSnippet = createRawSnippet<[{ doi: string | null }]>((getParams) => ({
  render: () => {
    const doi = getParams().doi;
    if (doi?.startsWith('https')) {
      return `<a href="${doi}" target="_blank" rel="noopener noreferrer">${doi}</a>`;
    }
    return `<span>${doi ?? ''}</span>`;
  }
}));

export const columns: ColumnDef<Product>[] = [
  { accessorKey: 'author', header: 'Author', size: 150 },
  { accessorKey: 'title', header: 'Title', size: 400 },
  { accessorKey: 'host', header: 'Host', size: 300 },
  { accessorKey: 'date', header: 'Date', size: 120 },
  {
    accessorKey: 'doi',
    header: 'DOI',
    size: 200,
    cell: ({ row }) => renderSnippet(linkSnippet, { doi: row.getValue<string>('doi') })
  },
  {
    accessorKey: 'adc_doi',
    header: 'ADC DOI',
    size: 200,
    cell: ({ row }) => renderSnippet(linkSnippet, { doi: row.getValue<string>('adc_doi') })
  },
  { accessorKey: 'pub_ag', header: 'PubAg', size: 80 },
  { accessorKey: 'notes', header: 'Notes', size: 200 }
];
