<template>
    <div class="container pt-4 mt-4">
        <div class="row d-none d-md-block">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th class="align-middle" scope="col"></th>
                                <th class="align-middle" scope="col">#</th>
                                <th class="align-middle" scope="col">Host</th>
                                <th class="align-middle" scope="col">Process ID</th>
                                <th class="align-middle" scope="col">Executor Group</th>
                                <th class="align-middle" scope="col">Started</th>
                                <th class="align-middle" scope="col">Stopped</th>
                                <th class="align-middle" scope="col">Activity Hearbeat</th>
                                <th class="align-middle" scope="col">Hearbeat Expires</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="instance in instances" :key="instance.id">
                                <td class="align-middle">
                                    <font-awesome-icon class="text-success" v-if="instance.stopped == null" icon="fa-solid fa-check" />
                                    <font-awesome-icon class="text-danger" v-if="instance.stopped != null" icon="fa-solid fa-xmark" />
                                </td>
                                <td class="align-middle" scope="row">{{instance.id}}</td>
                                <td class="align-middle" scope="row">{{instance.host}}</td>
                                <td class="align-middle" scope="row">{{instance.pid}}</td>
                                <td class="align-middle" scope="row">{{instance.executorGroup}}</td>
                                <td class="align-middle" scope="row">{{stoppedDate(instance.started)}}</td>
                                <td class="align-middle" scope="row">{{stoppedDate(instance.stopped)}}</td>
                                <td class="align-middle" scope="row">{{stoppedDate(instance.active)}}</td>
                                <td class="align-middle" scope="row">{{stoppedDate(instance.expires)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row d-block d-md-none">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <tbody class="table-light" v-for="instance in instances" :key="instance.id">
                            <tr>
                                <th scope="row">
                                    <font-awesome-icon class="text-success" v-if="instance.stopped == null" icon="fa-solid fa-check" />
                                    <font-awesome-icon class="text-danger" v-if="instance.stopped != null" icon="fa-solid fa-xmark" />
                                    #{{instance.id}}
                                </th>
                                <td></td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Host</th>
                                <td>{{instance.host}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Process ID</th>
                                <td>{{instance.pid}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Executor Group</th>
                                <td>{{instance.executorGroup}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Started</th>
                                <td>{{stoppedDate(instance.started)}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Stopped</th>
                                <td>{{stoppedDate(instance.stopped)}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Activity Hearbeat</th>
                                <td>{{stoppedDate(instance.active)}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Hearbeat Expires</th>
                                <td>{{stoppedDate(instance.expires)}}</td>
                                <br>
                            </tr>
                            <br>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import moment from "moment"
import ApiService from '../services/services.js'

export default {
    name: "executors-table",
    data() {
        return {
            moment,
            instances: [],
            apiService: new ApiService("https://bank.nflow.io/nflow/api/v1")
        };
    },
    methods: {
        stoppedDate(date) {
            if (date == null) {
                return null
            } else return moment(date).format('l LTS')
        }
    },
    async mounted() {
        const { data } = await this.apiService.getWorkflowExecutors()
        this.instances = data
    },
};
</script>

<style>

</style>


