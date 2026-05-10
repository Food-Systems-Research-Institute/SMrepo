<script>
  import { resolve } from '$app/paths';
  import logo from '$lib/assets/fsri_logo.png';
</script>

<footer
  class="footer footer-horizontal bg-primary text-neutral-content items-center rounded-b-md p-4 md:rounded-none"
>
  <aside class="grid-flow-col items-center">
    <a class="text-xl" href={resolve('/')}>
      <img src={logo} alt="Food Systems Research Institute" class="h-10" />
    </a>
  </aside>
</footer>

<style>
  a {
    color: var(--color-primary-content);
    text-decoration: none;
  }
</style>
