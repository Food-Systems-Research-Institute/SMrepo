<script>
  import { resolve } from '$app/paths';
</script>

<div class="page page-text">
  <h1 class="text-center md:text-left">Sustainability Metrics Repository</h1>
  <hr />

  <p>
    This page contains a collection of products from the Sustainability Metrics project at the <a
      href="https://www.uvm.edu/ovpr/food-systems-research"
      target="_blank"
      rel="noopener">Food Systems Research Institute</a
    > at the University of Vermont.
  </p>
  <p>
    Under the <strong>Papers</strong> tab, related manuscripts are linked by DOI to journals for
    download. Under the <strong>Datasets</strong> tab, public datasets are linked by DOI to their respective
    repositories for download. When datasets requiring a DUA are added to the repository, a contact link
    will be provided to request access and begin the DUA process.
  </p>

  <!-- Desktop -->
  <div class="mx-24 my-16 flex justify-center gap-6 md:gap-16">
    <div class="tile">
      <div class="card">
        <a href={resolve('/papers')} aria-label="Papers">
          <i class="fa-solid fa-newspaper text-8xl"></i>
        </a>
      </div>
      <h3>Papers</h3>
    </div>
    <div class="tile">
      <div class="card">
        <a href={resolve('/datasets')} aria-label="Datasets">
          <i class="fa-solid fa-database text-8xl"></i>
        </a>
      </div>
      <h3>Datasets</h3>
    </div>
  </div>

  <!-- <h2>Contact</h2>
  <p>Chris Donovan</p>
  <p><a href="mailto:christopher.donovan@uvm.edu">christopher.donovan@uvm.edu</a></p> -->
</div>

<style>
  i {
    color: var(--color-primary);
    transition: var(--transition);
  }
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--spacing) * 8);
  }
  .card {
    padding: 1rem;
    border: 1px solid var(--dark-gray);
    background-color: var(--gray);
    transition: var(--transition-long);
    box-shadow: 4px 6px 8px var(--dark-gray);
  }
  .card:hover {
    background-color: color-mix(in oklch, var(--gray) 80%, black);
    transform: translate(0, -0.25rem);
  }
</style>
