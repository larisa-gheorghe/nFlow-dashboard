<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">nFlow</router-link>
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
          <router-link class="nav-item nav-link px-3" to="/workflow-instances">Workflow Instances</router-link>
          <router-link class="nav-item nav-link px-3" to="/workflow-definitions">Workflow Definitions</router-link>
          <router-link class="nav-item nav-link px-3" to="/executors">Executors</router-link>
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
