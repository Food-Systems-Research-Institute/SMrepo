<script>
  import logo from '$lib/assets/fsri_logo.png';
  import spirit from '$lib/assets/FSRI-SpiritMarks_FSRI-mark-white.png';
</script>

<footer class="footer sm:footer-horizontal bg-primary text-neutral-content items-center p-4">
  <aside class="grid-flow-col items-center">
    <a class="text-xl" href="/">
      <img src={logo} alt="Food Systems Research Institute" class="h-10" />
    </a>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a
      href="https://www.github.com/Food-Systems-Research-Institute"
      target="_blank"
      aria-label="GitHub"
    >
      <i class="fa-brands fa-github text-3xl"></i>
    </a>
    <a
      href="https://www.uvm.edu/ovpr/food-systems-research/about-fsri"
      target="_blank"
      aria-label="FSRI"
    >
      <img src={spirit} alt="SM Repository" class="h-8" />
    </a>
  </nav>
</footer>

<style>
  a {
    color: var(--color-primary-content);
    text-decoration: none;
  }
</style>
