import { createRouter, createWebHistory } from 'vue-router'

import ExecutorsTable from '../pages/ExecutorsTable.vue'
import AppAbout from '../pages/AppAbout.vue'
import WorkflowDefinitions from '../pages/WorkflowDefinitions.vue'
import WorkflowDetails from '../components/WorkflowDetails.vue'
import WorkflowInstances from '../pages/WorkflowInstances.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppAbout},
        { path: '/executors', component: ExecutorsTable},
        { path: '/workflow-definitions', component: WorkflowDefinitions},
        { path: '/workflow-definitions/:workflowType', component: WorkflowDetails, props: true},
        { path: '/workflow-instances', component: WorkflowInstances}
    ],
});

export default router;