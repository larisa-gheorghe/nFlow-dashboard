<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">nFlow</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link px-3" href="#">Workflow Instances</a>
          <a class="nav-link px-3" href="#">Workflow Definitions</a>
          <a class="nav-link px-3" href="#">Executors</a>
          <a class="nav-link px-3" href="#">About</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style>
</style>
