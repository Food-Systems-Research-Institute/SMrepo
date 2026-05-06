<script lang="ts">
  import type { PageProps } from './$types';
  import DataTable from '$lib/components/ui/data-table/DataTable.svelte';
  import { columns } from '$lib/components/ui/data-table/columns.js';

  let { data }: PageProps = $props();
</script>

<div class="page page-table">
  <h1 class="mb-4">Sustainability Metrics Papers</h1>
  <DataTable data={data.result} {columns} />
</div>
