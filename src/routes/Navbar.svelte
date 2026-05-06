<script lang="ts">
  import { resolve } from '$app/paths';
  import logo from '$lib/assets/fsri_logo.png';
  import spirit from '$lib/assets/FSRI-SpiritMarks_FSRI-mark-white.png';
  import { page } from '$app/state';
</script>

<div class="navbar bg-primary h-(--header-height) shadow-sm">
  <div class="mx-auto flex w-full max-w-(--max-page-width-table) items-center">
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

      <a class="text-xl" href={resolve('/')}>
        <img src={logo} alt="Food Systems Research Institute" class="h-10 shrink-0" />
      </a>
    </div>

    <!-- Desktop Nav -->
    <div class="navbar-center hidden lg:flex">
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

<style>
  a,
  li {
    color: var(--color-primary-content);
    text-decoration: none;
    font-size: 1rem;
    transition: var(--transition);
  }
  a[aria-current='true'] {
    text-decoration: underline;
  }
  li > a:hover {
    background-color: color-mix(in oklch, var(--color-primary) 75%, black);
    color: color-mix(in oklch, var(--color-secondary-content) 80%, black);
  }
</style>
