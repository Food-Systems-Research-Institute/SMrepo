<script lang="ts">
  import type { PageProps } from './$types';
  import Table from './Table.svelte';

  let { data }: PageProps = $props();
</script>

<h1>Table</h1>

<div class="m-auto flex w-9/10 justify-center">
  <Table rows={data.result}></Table>
</div>

{#if false}
  <p>Testing:</p>
  <ul>
    {#each data.result as user}
      <li>{user.name}</li>
    {/each}
  </ul>
{/if}
