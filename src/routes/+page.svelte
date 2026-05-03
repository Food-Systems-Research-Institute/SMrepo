<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  $inspect(data.result);
</script>

<h1>Title</h1>

<div>
  {#each data.result as user}
    <p>{user.name}: {user.email}, age {user.age}</p>
  {/each}
</div>
