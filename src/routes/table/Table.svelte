<script lang="ts">
  import { AllCommunityModule, ModuleRegistry, createGrid, type ColDef } from 'ag-grid-community';
  import type { Product } from '$lib/server/db/schema';

  let { rows }: { rows: Product[] } = $props();

  ModuleRegistry.registerModules([AllCommunityModule]);

  const colDefs: ColDef<Product>[] = [
    { field: 'id' },
    { field: 'team' },
    { field: 'author' },
    { field: 'title' },
    { field: 'host' },
    { field: 'date' },
    {
      field: 'doi',
      cellRenderer: (params: { value: string }) => {
        if (!params.value) return '';
        const a = document.createElement('a');
        a.href = params.value;
        a.textContent = params.value;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        return a;
      }
    },
    { field: 'adc_doi' },
    { field: 'pub_ag' },
    { field: 'notes' }
  ];

  function initGrid(el: HTMLElement) {
    createGrid(el, {
      rowData: rows,
      columnDefs: colDefs,
      cellSelection: true
    });
  }
</script>

<div use:initGrid class="h-90 w-full"></div>

<style>
  :global(.ag-cell a) {
    color: var(--color-uvm-light-blue);
    text-decoration: underline;
  }
  :global(.ag-cell a):hover {
    color: var(--color-uvm-blue);
  }
  /* Allow selecting text */
  :global(.ag-cell) {
    user-select: text;
  }
</style>
