<template>
    <div class="container-fluid m-6" v-if="dataReady">
        <span class = "m-0" v-for="instance in instances" :key="instance.type">
            <div class="row m-2">
                <h3>{{ instance.type }}
                        <a
                            class="icons"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create workflow instance"
                            href="#">
                            <font-awesome-icon class="m-2" icon="fa-solid fa-plus"/>
                        </a>
                        <a
                            class="icons"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"
                            href="#">
                            <font-awesome-icon class="m-2" icon="fa-solid fa-magnifying-glass"/>
                        </a>
                    </h3>
            </div>
            <div class="row m-2">
                <div class="col-12 col-md-6 text-left">
                    <p m-2>{{ instance.description }}</p>
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
                                    <td class="text-center">{{ isZero(stateStatistics?.splitWork?.created1?.allInstances) || 0}}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.splitWork?.inProgress?.allInstances)}}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.splitWork?.executing?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.splitWork?.manual?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.splitWork?.finished?.allInstances) }}</td>
                                    <td id="val">
                                        {{ rowSum(stateStatistics?.splitWork?.created1?.allInstances, stateStatistics?.splitWork?.inProgress?.allInstances) }}
                                    </td>
                                </tr>
                                <tr>
                                    <td>waitForChildrenToFinish</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.waitForChildrenToFinish?.created?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.waitForChildrenToFinish?.inProgress?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.waitForChildrenToFinish?.executing?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.waitForChildrenToFinish?.manual?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.waitForChildrenToFinish?.finished?.allInstances) }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>done</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.done?.created?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.done?.inProgress?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.done?.executing?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.done?.manual?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.done?.finished?.allInstances) }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>error</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.error?.created?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.error?.inProgress?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.error?.executing?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.error?.manual?.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(stateStatistics?.error?.finished?.allInstances) }}</td>
                                    <td></td>
                                </tr>
                                <tr class="text-secondary">
                                    <td>Total</td>
                                    <td colspan="6"></td>
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
                                    <td><pre>{{ instance.settings.transitionDelaysInMilliseconds }}</pre></td>
                                </tr>
                                <tr>
                                    <td>maxRetries</td>
                                    <td>{{ instance.settings.maxRetries }}</td>
                                </tr>
                                <tr>
                                    <td>defaultPriority</td>
                                    <td>{{ instance.settings.defaultPriority }}</td>
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
import axios from "axios"
import { ref } from "vue"

export default {
    name: 'bulk-details',
    data() {
        return {
            dataReady: false,
            instances: [],
            statistics: {},
            stateStatistics: {}
        }
    },
    async mounted() {

        const workflowDefinition = "https://bank.nflow.io/nflow/api/v1/workflow-definition?type=bulk"
        const bulkStats = "https://bank.nflow.io/nflow/api/v1/statistics/workflow/bulk"
        // axios
        //     .get(workflowDefinition, {
        //         dataType: "json",
        //     })
        //     .then((response) => this.instances = response.data);

        // axios
        //     .get(bulkStats, {
        //         dataType: "json",
        //     })
        //     .then((response) => {
        //         this.statistics = response.data;
        //         this.stateStatistics = response.data.stateStatistics;
        //     });
        // this.dataReady = true
        const instances = await axios.get(workflowDefinition, {dataType: "json" })
        this.instances = instances?.data

        const  statistics = await axios.get(bulkStats, {dataType: "json" })
        this.stateStatistics = statistics?.data?.stateStatistics

        this.dataReady = true
    },
    methods: {
        isZero(value) {
            if ( value == 0 || value == '' ) return null
            else return value
        },
        rowSum(cell1, cell2) {
        }
    }
}
</script>
