<script lang="ts">
  import { DataTable } from '$lib/components/ui/data-table';
  import { columns } from './columns.ts';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div class="page page-table">
  <h1 class="mb-4 text-center md:text-left">Sustainability Metrics Datasets</h1>
  <DataTable data={data.result} {columns} />
</div>
