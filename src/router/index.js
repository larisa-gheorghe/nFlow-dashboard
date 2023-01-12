import { createRouter, createWebHistory } from 'vue-router'

import ExecutorsTable from '../pages/ExecutorsTable.vue'
import AppAbout from '../pages/AppAbout.vue'
import WorkflowDefinitions from '../pages/WorkflowDefinitions.vue'
import BulkDetails from '../pages/BulkDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppAbout},
        { path: '/executors', component: ExecutorsTable},
        { path: '/workflow-definitions', component: WorkflowDefinitions},
        { path: '/workflow-definitions/bulk-details', component: BulkDetails}
    ],
});

export default router;