<template>
  <div class="container pt-4 mt-4" v-show="dataReady">
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-hover table-striped align-middle">
            <thead>
              <tr>
                <th>Type</th>
                <th class="d-none d-md-table-cell">Description</th>
                <th>Manage Instances</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="allWorkflow in allWorkflows" :key="allWorkflow">
                <td>
                  <router-link
                    :to="`/workflow-definitions/${allWorkflow.type}`"
                    class="icons text-decoration-none text-center"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Details"
                    @click="hideTooltip()">
                    {{ allWorkflow.type }}</router-link>
                </td>
                <td class="d-none d-md-table-cell">
                  {{ allWorkflow.description }}
                </td>
                <td>
                  <a
                    class="icons"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance"
                    href="#">
                    <font-awesome-icon class="m-2" icon="fa-solid fa-plus"
                  /></a>
                  <a
                    class="icons" data-bs-toggle="tooltip" data-bs-placement="bottom"
                    title="Search"
                    href="#">
                    <font-awesome-icon
                      class="m-2"
                      icon="fa-solid fa-magnifying-glass"/>
                    </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "workflow-definitions",
  data() {
    return {
      dataReady: false,
      allWorkflows: {},
      urls: {}
    };
  },
  async beforeMount() {
    const workflowDefinition = "https://bank.nflow.io/nflow/api/v1/workflow-definition"

    const allWorkflows = await axios.get(workflowDefinition, { dataType: "json" })
    this.allWorkflows = allWorkflows?.data

    this.dataReady = true;
  },
  mounted() {
    const signs = document.querySelectorAll(".icons");
    for (let sign of signs) {
      const tooltip = new bootstrap.Tooltip(sign);
    }
  },
  methods: {
    hideTooltip() {
      const signs = document.querySelectorAll(".icons");
      for (let sign of signs) {
        const tooltip = bootstrap.Tooltip.getOrCreateInstance(sign);
        tooltip.hide();
      }
    },
  },
};
</script>