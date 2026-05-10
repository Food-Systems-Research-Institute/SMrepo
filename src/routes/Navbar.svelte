<script lang="ts">
  import { resolve } from '$app/paths';
  import logo from '$lib/assets/fsri_logo.png';
  import spirit from '$lib/assets/FSRI-SpiritMarks_FSRI-mark-white.png';
  import { page } from '$app/state';
</script>

<div id="test" class="w-full rounded-none rounded-t-lg shadow-sm max-lg:collapse md:rounded-none">
  <!-- Checkbox for mobile hamburger nav toggle -->
  <input id="navbar-1-toggle" class="peer hidden" type="checkbox" />
  <label for="navbar-1-toggle" class="fixed inset-0 hidden max-lg:peer-checked:block"></label>

  <!-- Actual header -->
  <div class="collapse-title navbar bg-primary h-(--navbar-height) shadow-sm">
    <div class="mx-auto flex w-full max-w-(--max-page-width-table) items-center">
      <!-- Left block -->
      <div class="navbar-start">
        <a class="hidden text-xl md:block" href={resolve('/')}>
          <img
            src={logo}
            alt="Food Systems Research Institute"
            class="fsri-logo h-5 shrink md:h-8 lg:h-10"
          />
        </a>
        <!-- Mobile hamburger -->
        <label for="navbar-1-toggle" class="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--uvm-white)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>

      <!-- Desktop Nav -->
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href={resolve('/')} aria-current={page.url.pathname == resolve('/')}>Home</a></li>
          <li>
            <a href={resolve('/papers')} aria-current={page.url.pathname == resolve('/papers')}
              >Papers</a
            >
          </li>
          <li>
            <a href={resolve('/datasets')} aria-current={page.url.pathname == resolve('/datasets')}
              >Datasets</a
            >
          </li>
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
  </div>

  <!-- Mobile expand nav -->
  <div class="collapse-content z-1 md:hidden">
    <hr />
    <ul class="menu">
      <li>
        <a href={resolve('/')} aria-current={page.url.pathname == resolve('/')}>Home</a>
      </li>
      <li>
        <a href={resolve('/papers')} aria-current={page.url.pathname == resolve('/papers')}
          >Papers</a
        >
      </li>
      <li>
        <a href={resolve('/datasets')} aria-current={page.url.pathname == resolve('/datasets')}
          >Datasets</a
        >
      </li>
    </ul>
  </div>
</div>

<style>
  /* Mobile */
  .btn-ghost:active {
    background-color: var(--primary-dark);
    border: none;
  }
  .collapse-content {
    a {
      color: var(--color-primary-content);
      font-size: var(--menu-font-size-mobile);
    }
    background-color: var(--color-primary);
  }
  hr {
    border-top: 1px solid var(--color-primary-content);
  }

  /* Desktop */
  a,
  li {
    color: var(--color-primary-content);
    text-decoration: none;
    transition: var(--transition);
  }
  a[aria-current='true'] {
    text-decoration: underline;
  }
  li > a:hover {
    background-color: var(--primary-dark);
    color: color-mix(in oklch, var(--color-secondary-content) 80%, black);
  }
</style>
