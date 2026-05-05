<script lang="ts">
  import ArrowUpDownIcon from '@lucide/svelte/icons/arrow-up-down';

  let { label, onclick }: { label: string; onclick?: (e: unknown) => void } = $props();
</script>

<button class="btn btn-ghost btn-m gap-1 px-2" {onclick}>
  {label}
  <ArrowUpDownIcon class="h-4 w-4" />
</button>
