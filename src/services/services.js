// import axios
// export class from file
// create instance of class in any component that need to
// interact with the api.
class ApiService{
    constructor(url) {
        // todo: api url when creating object, https://bank.nflow.io/nflow/api/v1/
        this.url = url
    }

    getWorkflowDefinitions() {
        //todo: use axios, get definitions, return object
    }

    getWorkflowDefinition(workflowType) {
        //todo: use axios, get a specific workflow definitions, return object
    }

    getWorkflowStatistics(workflowType) {
        // todo: use axios, get a specific workflow statistics, return object
    }

    getWorkflowExecutors() {
        // todo: use axios, get workflow executors, return object
    }

    // todo: add here any other needed methos when interacting
    // with the api

}