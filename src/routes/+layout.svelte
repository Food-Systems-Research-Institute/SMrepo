<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/fsri-spirit-mark.svg';
  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Navbar />

<main class="max-w-8xl mx-auto px-4 py-8">
  {@render children()}
</main>

<Footer />
