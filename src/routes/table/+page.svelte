<script lang="ts">
  import type { PageProps } from './$types';
  import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type ColumnFiltersState,
    type PaginationState,
    type SortingState,
    type Updater
  } from '@tanstack/table-core';
  import { createSvelteTable, FlexRender } from '$lib/components/ui/data-table/index.js';
  import { columns } from '$lib/components/ui/data-table/columns.js';

  let { data }: PageProps = $props();

  // Decide whether or not to include pagination
  let togglePagination: boolean = false;

  // Set state, track user actions
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: togglePagination ? 5 : 9999 });

  const table = createSvelteTable({
    get data() {
      return data.result;
    },
    columns,
    state: {
      get sorting() {
        return sorting;
      },
      get columnFilters() {
        return columnFilters;
      },
      get pagination() {
        return pagination;
      }
    },

    // Update state on table changes
    onSortingChange: (updater: Updater<SortingState>) => {
      sorting = typeof updater === 'function' ? updater(sorting) : updater;
    },
    onColumnFiltersChange: (updater: Updater<ColumnFiltersState>) => {
      columnFilters = typeof updater === 'function' ? updater(columnFilters) : updater;
    },
    onPaginationChange: (updater: Updater<PaginationState>) => {
      pagination = typeof updater === 'function' ? updater(pagination) : updater;
    },

    // Row model factories for tanstack
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  // $inspect(table.getHeaderGroups());
</script>

<h1 class="mb-4">Sustainability Metrics Products</h1>

<div class="h-3/4 overflow-x-auto rounded-md border">
  <table class="table w-full table-fixed">
    <thead>
      {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
        <tr>
          {#each headerGroup.headers as header (header.id)}
            <th
              colspan={header.colSpan}
              style="width: {header.getSize()}px"
              onclick={header.column.getToggleSortingHandler()}
              class={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
            >
              {#if !header.isPlaceholder}
                <FlexRender
                  content={header.column.columnDef.header}
                  context={header.getContext()}
                />
                {#if header.column.getIsSorted() === 'asc'}↑{:else if header.column.getIsSorted() === 'desc'}↓{/if}
              {/if}
            </th>
          {/each}
        </tr>
        <tr>
          {#each headerGroup.headers as header (header.id)}
            <th class="py-1">
              {#if header.column.getCanFilter()}
                <input
                  class="input input-xs w-full"
                  placeholder="Filter..."
                  value={(header.column.getFilterValue() as string) ?? ''}
                  oninput={(e) => header.column.setFilterValue(e.currentTarget.value)}
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

{#if togglePagination}
  <div class="mt-4 flex items-center justify-between">
    <span class="text-sm opacity-60">
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </span>
    <div class="flex gap-2">
      <button
        class="btn btn-outline btn-sm"
        onclick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </button>
      <button
        class="btn btn-outline btn-sm"
        onclick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </button>
    </div>
  </div>
{/if}

<!-- NOTE: link styling in app.css because it was conflicting with global styles using :global() -->

<div class="h-15"></div>
