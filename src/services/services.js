import axios from "axios"

export default class ApiService{
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getWorkflowDefinition() {
        const workflowDefinition = `${this.baseUrl}/workflow-definition`
        return axios.get(workflowDefinition, { dataType: "json" })
    }

    getWorkflowType(type) {
        let workflowTypeName = `${this.baseUrl}/workflow-definition?type=${type}`
        return axios.get(workflowTypeName, { dataType: "json" });

    }

    getWorkflowStatistics(type) {
        let workflowStats = `${this.baseUrl}/statistics/workflow/${type}`
        return axios.get(workflowStats, { dataType: "json" });
    }

    getWorkflowExecutors() {
        const workflowExecutors = `${this.baseUrl}/workflow-executor`
        return axios.get(workflowExecutors, {dataType: "json",})
    }

    getWorkflowInstance() {
        const workflowInstance = `${this.baseUrl}/workflow-instance`
        return axios.get(workflowInstance, {dataType: "json",})
    }

}