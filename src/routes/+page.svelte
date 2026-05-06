<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  $inspect(data.result);
</script>

<div class="page page-text">
  <h1>Sustainability Metrics Repository</h1>
  <hr />

  <h1>Title</h1>
  <h2>Title</h2>
  <h3>Title</h3>

  <p>Paragraph</p>

  <p>Unordered list:</p>
  <ul>
    <li>First thing</li>
    <li>Second thing</li>
    <li><a href="https://www.npr.org">a link</a></li>
  </ul>
</div>
