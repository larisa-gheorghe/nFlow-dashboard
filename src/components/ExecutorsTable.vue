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
                                <td class="align-middle" scope="row">{{moment(instance.started).format('l LTS')}}</td>
                                <td class="align-middle" scope="row">{{moment(instance.stopped).format('l LTS')}}</td>
                                <td class="align-middle" scope="row">{{moment(instance.active).format('l LTS')}}</td>
                                <td class="align-middle" scope="row">{{moment(instance.expires).format('l LTS')}}</td>
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
                                <td>{{instance.started}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Stopped</th>
                                <td>{{instance.stopped}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Activity Hearbeat</th>
                                <td>{{instance.active}}</td>
                            </tr>
                            <tr>
                                <th class="border-end" scope="row">Hearbeat Expires</th>
                                <td>{{instance.expires}}</td>
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
import axios from "axios"
import moment from "moment"

export default {
    name: "executors-table",
    data() {
        return {
            moment,
            instances: [
                {
                id: 1,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                },
                {
                id: 2,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                },
                {
                id: 3,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                },
                {
                id: 4,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                },
                {
                id: 5,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                },
                {
                id: 6,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                },
                {
                id: 7,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                },
                {
                id: 8,
                host: "nbank-demo-1",
                pid: 31952,
                executorGroup: "nflow",
                started: "2021-05-21T07:50:06.304Z",
                stopped: "2021-05-21T07:50:10.304Z",
                active: "2023-01-03T11:37:21.368Z",
                expires: "2023-01-03T11:52:21.368Z"
                }
            ]
        };
    },
    methods: {
    }
    // mounted() {
    //     // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //     // axios.defaults.headers.common['Content-type'] = 'application/json';

    //     // axios.interceptors.request.use(request => {
    //     //   console.log('Starting Request', JSON.stringify(request, null, 2))
    //     //   return request
    //     // })

    //     // axios.interceptors.response.use(response => {
    //     //   console.log('Response:', JSON.stringify(response, null, 2))
    //     //   return response
    //     // })

    //     const url = "https://bank.nflow.io/nflow/api/v1/workflow-executor/";
    //     axios
    //     .get(url, {
    //         dataType: "json",
    //     })
    //     .then((response) => (this.instances = response.data));
    // },
};
</script>

<style>

</style>