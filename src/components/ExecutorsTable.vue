<template>
    <div class="container pt-4 mt-4">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
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
                            <th class="align-middle" scope="row">{{instance.id}}</th>
                            <td class="align-middle" scope="row">{{instance.host}}</td>
                            <td class="align-middle" scope="row">{{instance.pid}}</td>
                            <td class="align-middle" scope="row">{{instance.executorGroup}}</td>
                            <td class="align-middle" scope="row">{{instance.started}}</td>
                            <td class="align-middle" scope="row">{{instance.stopped}}</td>
                            <td class="align-middle" scope="row">{{instance.active}}</td>
                            <td class="align-middle" scope="row">{{instance.expires}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        
    </div>    
</template>

<script>
import axios from "axios";

export default {
    name: "executors-table",
    data() {
        return {
            instances: []
        };
    },
    mounted() {
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        // axios.defaults.headers.common['Content-type'] = 'application/json';

        // axios.interceptors.request.use(request => {
        //   console.log('Starting Request', JSON.stringify(request, null, 2))
        //   return request
        // })

        // axios.interceptors.response.use(response => {
        //   console.log('Response:', JSON.stringify(response, null, 2))
        //   return response
        // })
        const url = "https://bank.nflow.io/nflow/api/v1/workflow-executor/";
        axios
        .get(url, {
            dataType: "json",
        })
        .then((response) => (this.instances = response.data));
    },
};
</script>