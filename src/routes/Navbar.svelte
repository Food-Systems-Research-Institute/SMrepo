<script lang="ts">
  import { base } from '$app/paths';
  import logo from '$lib/assets/fsri_logo.png';
  import spirit from '$lib/assets/FSRI-SpiritMarks_FSRI-mark-white.png';
</script>

<div class="navbar bg-primary h-(--header-height) shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- Mobile hamburger -->
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <!-- Mobile Dropdown Nav -->
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/papers">Papers</a></li>
        <li><a href="{base}/datasets">Datasets</a></li>
      </ul>
    </div>

    <a class="text-xl" href="{base}/">
      <img src={logo} alt="Food Systems Research Institute" class="h-10" />
    </a>
  </div>

  <!-- Desktop Nav -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/papers">Papers</a></li>
      <li><a href="{base}/datasets">Datasets</a></li>
    </ul>
  </div>

  <!-- Right buttons -->
  <div class="navbar-end gap-4 px-4">
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
  </div>
</div>

<style>
  a,
  li {
    color: var(--color-primary-content);
    text-decoration: none;
  }
  .btn-ghost:hover {
    background-color: color-mix(in oklch, var(--color-primary) 85%, black);
    border: 0.5px solid var(--color-neutral);
  }
</style>
