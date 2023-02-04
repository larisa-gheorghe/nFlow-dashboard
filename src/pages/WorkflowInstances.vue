<template>
    <div>
        <form class="m-4">
            <div class="row align-items-center">
                <div class="col-3">
                    <label for="type" class="form-label">Type</label>
                    <select name="type" id="type" class="form-select">
                        <option value="">-- All types --</option>
                        <option value="" v-for="allWorkflow in allWorkflows" :key="allWorkflow">
                            {{ allWorkflow.type }}
                        </option>
                    </select>
                </div>
                
            </div>
        </form>
    </div>
</template>

<script>
import ApiService from '../services/services.js'

export default {
    name: 'workflow-instances',
    data() {
        return {
            allWorkflows: {},
            apiService: new ApiService("https://bank.nflow.io/nflow/api/v1")
        };
    },
    async beforeMount() {
        const { data } = await this.apiService.getWorkflowDefinition()
        this.allWorkflows = data

    },
    methods: {
    }

}
</script>