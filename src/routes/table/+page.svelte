<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  $inspect(data.result);
</script>

<h1>Table</h1>

<div>
  <ul>
    {#each data.result as user}
      <li>{user.name}: {user.email}, age {user.age}</li>
    {/each}
  </ul>
</div>
