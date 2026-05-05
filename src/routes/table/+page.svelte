<script lang="ts">
  import type { PageProps } from './$types';
  import { getCoreRowModel } from '@tanstack/table-core';
  import { createSvelteTable, FlexRender } from '$lib/components/ui/data-table/index.js';
  import { columns } from '$lib/components/ui/data-table/columns.js'; // output file extension

  let { data }: PageProps = $props();

  const table = createSvelteTable({
    get data() {
      return data.result;
    },
    columns,
    getCoreRowModel: getCoreRowModel()
  });
</script>

<h1 class="mb-4">Sustainability Metrics Repository</h1>
<ul class="mb-4">
  <li>Datasets</li>
  <li>Papers</li>
  <li>Documentation</li>
  <li>That's about it</li>
</ul>

<div class="overflow-x-auto rounded-md border">
  <table class="table" style="table-layout: fixed; width: 100%;">
    <thead>
      {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
        <tr>
          {#each headerGroup.headers as header (header.id)}
            <th colspan={header.colSpan} style="width: {header.getSize()}px">
              {#if !header.isPlaceholder}
                <FlexRender
                  content={header.column.columnDef.header}
                  context={header.getContext()}
                />
              {/if}
            </th>
          {/each}
        </tr>
      {/each}
    </thead>
    <tbody>
      {#each table.getRowModel().rows as row (row.id)}
        <tr>
          {#each row.getVisibleCells() as cell (cell.id)}
            <td>
              <FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
            </td>
          {/each}
        </tr>
      {:else}
        <tr>
          <td colspan={columns.length} class="h-24 text-center">No results.</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
