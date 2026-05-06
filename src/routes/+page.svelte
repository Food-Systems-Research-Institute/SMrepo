<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  $inspect(data.result);
</script>

<div class="page page-text">
  <h1>Sustainability Metrics Repository</h1>
  <hr class="mb-4" />

  <p>
    This is a collection of papers and datasets from the Sustainability Metrics project. For public
    datasets, links are provided to their respective repositories for download. Private datasets
    will be provided with a contact link to start the DUA process.
  </p>
</div>
