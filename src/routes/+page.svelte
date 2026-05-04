<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  $inspect(data.result);
</script>

<h1>Index</h1>
<hr />

<h1>Title</h1>
<h2>Title</h2>
<h3>Title</h3>

<p>Paragraph</p>

<p>Unorderd list:</p>
<ul>
  <li>First thing</li>
  <li>Second thing</li>
</ul>
