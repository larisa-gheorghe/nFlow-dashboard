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
                <tr v-for="(stateStats, stateStatsKey) in stateStatistics" :key="stateStats">
                    <td>{{ stateStatsKey }}</td>
                    <td class="text-center">
                        {{ stateStats?.created?.allInstances || "" }}
                    </td>
                    <td class="text-center">
                        {{ stateStats?.inProgress?.allInstances || "" }}
                    </td>
                    <td class="text-center">
                        {{ stateStats?.executing?.allInstances || "" }}
                    </td>
                    <td class="text-center">
                        {{ stateStats?.manual?.allInstances || "" }}
                    </td>
                    <td class="text-center">
                        {{ stateStats?.finished?.allInstances || "" }}
                    </td>
                    <td class="text-center text-body-tertiary">
                        {{ calculateRowSums(stateStatsKey) }}
                    </td>
                </tr>
                <tr class="text-body-tertiary">
                    <td>Total</td>
                    <td class="text-center">
                        {{ calculateColumnSums().created }}
                    </td>
                    <td class="text-center">
                        {{ calculateColumnSums().inProgress }}
                    </td>
                    <td class="text-center">
                        {{ calculateColumnSums().executing }}
                    </td>
                    <td class="text-center">
                        {{ calculateColumnSums().manual }}
                    </td>
                    <td class="text-center">
                        {{ calculateColumnSums().finished }}
                    </td>
                    <td class="text-center">
                        {{ calculateColumnSums().total }}
                    </td>
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
                <tr v-for="(setting, settingKey) in settings" :key="setting">
                    <td>{{ settingKey }}</td>
                    <td><pre>{{ setting }}</pre></td>
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

export default {
  name: "bulk-details",
  data() {
    return {
      dataReady: false,
      instance: [],
      states: {},
      statistics: {},
      stateStatistics: {},
      columnSums: {},
      settings: {},
    };
  },
  async beforeMount() {
    const workflowDef = "https://bank.nflow.io/nflow/api/v1/workflow-definition?type=bulk";
    const workflowStats = "https://bank.nflow.io/nflow/api/v1/statistics/workflow/bulk";

    const instance = await axios.get(workflowDef, { dataType: "json" });
    this.instance = instance?.data[0];
    this.states = instance?.data[0].states;
    this.settings = instance?.data[0].settings;

    const statistics = await axios.get(workflowStats, { dataType: "json" });
    this.stateStatistics = statistics?.data?.stateStatistics;

    this.dataReady = true;

    this.columnSums = this.calculateColumnSums();
    this.mergeData()
  },
  methods: {
    mergeData() {
      for (let stepValue in this.states) {
          if (!this.stateStatistics[this.states[stepValue].id]){ 
              this.stateStatistics[this.states[stepValue].id] = {
                  created:{allInstances: 0},
                  executing:{allInstances: 0},
                  finished:{allInstances: 0},
                  inProgress:{allInstances: 0},
                  manual:{allInstances: 0}}
          }  
      }
    },
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
        inProgress: 0,
        executing: 0,
        manual: 0,
        finished: 0,
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
