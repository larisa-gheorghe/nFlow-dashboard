<template>
    <div class="container my-4">
        <div v-for="instance in instances" :key="instance.type">
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
                <div class="col-12 col-md-6 mb-2">
                    <h5>Instance Statistics</h5>
                    <div class="table-responsive rounded p-2">
                        <table id="statisticsTable" class="table">
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
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.splitWork.created.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.splitWork.inProgress.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.splitWork.executing.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.splitWork.manual.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.splitWork.finished.allInstances) }}</td>
                                    <td id="val">{{ rowSum() }}</td>
                                </tr>
                                <tr>
                                    <td>waitForChildrenToFinish</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>done</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.done.created.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.done.inProgress.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.done.executing.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.done.manual.allInstances) }}</td>
                                    <td class="text-center">{{ isZero(statistics.stateStatistics.done.finished.allInstances) }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>error</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>created</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>inProgress</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>executing</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>manual</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>finished</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
                <div class="col-12 col-md-6">
                    <h5>Settings</h5>
                    <div class="table-responsive rounded">
                        <table id="settingsTable" class="table">
                            <thead>
                                <tr>
                                    <th>Setting</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>transitionDelaysInMilliseconds</td>
                                    <td>{{ instance.settings.transitionDelaysInMilliseconds }}</td>
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
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'bulk-details',
    data() {
        return {
            instances: [],
            statistics: {}
        }
    },
    mounted() {

        const url = "https://bank.nflow.io/nflow/api/v1/workflow-definition?type=bulk";
        const url2 = "https://bank.nflow.io/nflow/api/v1/statistics/workflow/bulk"
        axios
        .get(url, {
            dataType: "json",
        })
        .then((response) => this.instances = response.data);
        axios
        .get(url2, {
            dataType: "json",
        })
        .then((response) => this.statistics = response.data);
    },
    methods: {
        isZero(value) {
            if ( value == 0 ) return null
            else return value
        },
        rowSum() {
            const statsTable = document.getElementById("statisticsTable")
        }
    }
}
</script>

<style>
    .table-responsive {
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    }
</style>