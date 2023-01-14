<template>
  <div class="container-fluid m-6" v-show="dataReady">
    <span class="m-0">
      <div class="row m-2">
        <h3>
          {{ instance?.type }}
          <a
            class="icons"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Create workflow instance"
            href="#"
          >
            <font-awesome-icon class="m-2" icon="fa-solid fa-plus" />
          </a>
          <a
            class="icons"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Search"
            href="#"
          >
            <font-awesome-icon
              class="m-2"
              icon="fa-solid fa-magnifying-glass"
            />
          </a>
        </h3>
      </div>
      <div class="row m-2">
        <div class="col-12 col-md-6 text-left">
          <p m-2>{{ instance?.description }}</p>
          <p>GRAFIC</p>
        </div>
        <div class="col-12 col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
          <h5>Instance Statistics</h5>
          <div class="table-responsive rounded p-2">
            <table id="statisticsTable" class="table table-hover">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Created</th>
                  <th>In Progress</th>
                  <th>Executing</th>
                  <th>Manual</th>
                  <th>Finished</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>splitWork</td>
                  <td class="text-center">
                    {{ stateStatistics?.splitWork?.created?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.splitWork?.inProgress?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{  stateStatistics?.splitWork?.executing?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.splitWork?.manual?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.splitWork?.finished?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ calculateRowSums("splitWork") }}
                  </td>
                </tr>
                <tr>
                  <td>waitForChildrenToFinish</td>
                  <td class="text-center">
                    {{ stateStatistics?.waitForChildrenToFinish?.created?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.waitForChildrenToFinish?.inProgress?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.waitForChildrenToFinish?.executing?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.waitForChildrenToFinish?.manual?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.waitForChildrenToFinish?.finished?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{
                      calculateRowSums("waitForChildrenToFinish")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>done</td>
                  <td class="text-center">
                    {{ stateStatistics?.done?.created?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.done?.inProgress?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.done?.executing?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.done?.manual?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.done?.finished?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{
                      calculateRowSums("done")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>error</td>
                  <td class="text-center">
                    {{ stateStatistics?.error?.created?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.error?.inProgress?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.error?.executing?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.error?.manual?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{ stateStatistics?.error?.finished?.allInstances || "" }}
                  </td>
                  <td class="text-center">
                    {{
                      calculateRowSums("error")
                    }}
                  </td>
                </tr>
                <tr class="text-secondary">
                  <td>Total</td>
                  <td class="text-center">{{ columnSums.created }}</td>
                  <td class="text-center">{{ columnSums.inProgress }}</td>
                  <td class="text-center">{{ columnSums.executing }}</td>
                  <td class="text-center">{{ columnSums.manual }}</td>
                  <td class="text-center">{{ columnSums.finished }}</td>
                  <td class="text-center">{{ columnSums.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row m-2">
        <div class="col-none col-md-6"></div>
        <div class="col-12 col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
          <h5>Settings</h5>
          <div class="table-responsive rounded">
            <table id="settingsTable" class="table table-hover">
              <thead>
                <tr>
                  <th>Setting</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>transitionDelaysInMilliseconds</td>
                  <td>
                    <pre>{{
                      instance?.settings?.transitionDelaysInMilliseconds
                    }}</pre>
                  </td>
                </tr>
                <tr>
                  <td>maxRetries</td>
                  <td>{{ instance?.settings?.maxRetries }}</td>
                </tr>
                <tr>
                  <td>defaultPriority</td>
                  <td>{{ instance?.settings?.defaultPriority }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "bulk-details",
  data() {
    return {
      dataReady: false,
      instance: [],
      statistics: {},
      stateStatistics: {},
      columnSums: {},
    };
  },
  async beforeMount() {
    const workflowDefinition =
      "https://bank.nflow.io/nflow/api/v1/workflow-definition?type=bulk";
    const bulkStats =
      "https://bank.nflow.io/nflow/api/v1/statistics/workflow/bulk";

    const instance = await axios.get(workflowDefinition, { dataType: "json" });
    this.instance = instance?.data[0];

    const statistics = await axios.get(bulkStats, { dataType: "json" });
    this.stateStatistics = statistics?.data?.stateStatistics;

    this.dataReady = true;

    this.columnSums = this.calculateColumnSums();
    this.calculateRowSums("splitWork");
  },
  methods: {
    calculateRowSums(state) {
      let sum = 0;
      if (this.stateStatistics[state] == undefined) {
        return sum;
      }

      for (const stepValue of Object.values(this.stateStatistics[state])) {
        sum += stepValue.allInstances;
      }

      return sum
    },
    calculateColumnSums() {
      const columns = {
        created: 0,
        executing: 0,
        finished: 0,
        inProgress: 0,
        manual: 0,
      };

      for (const column in columns) {
        for (const stateStatValue of Object.values(this.stateStatistics)) {
          columns[column] += stateStatValue[column].allInstances;
        }
      }

      columns["total"] = Object.values(columns).reduce((a, b) => a + b, 0);
      return columns;
    },
  },
};
</script>
