import type { ColumnDef } from '@tanstack/table-core';
import type { Product } from '$lib/server/db/schema';
import { createRawSnippet } from 'svelte';
import { renderSnippet } from '$lib/components/ui/data-table/index.js';
// import ExternalLink from '@lucide/svelte/icons/external-link';

export type { Product };

const linkSnippet = createRawSnippet<[{ doi: string | null }]>((getParams) => ({
  render: () => {
    const doi = getParams().doi;
    if (doi?.startsWith('https')) {
      return `<a href="${doi}" target="_blank" rel="noopener noreferrer">${doi}</a>`;
    }
    return `<span>${doi ?? ''}</span>`;
  }
}));

const downloadSnippet = createRawSnippet<[{ doi: string | null }]>((getParams) => ({
  render: () => {
    const doi = getParams().doi;
    if (doi?.startsWith('https')) {
      return `<div class="i-wrapper"><a class="i-link" href="${doi}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-up-right-from-square download-link"/></a></div>`;
    }
    return `<span></span>`;
  }
}));

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'download',
    header: 'Access',
    size: 100,
    enableSorting: false,
    enableColumnFilter: false,
    cell: ({ row }) => renderSnippet(downloadSnippet, { doi: row.getValue<string>('doi') })
  },
  { accessorKey: 'author', header: 'Author', size: 175 },
  { accessorKey: 'title', header: 'Title', size: 400 },
  { accessorKey: 'host', header: 'Host', size: 300 },
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
  }
];
