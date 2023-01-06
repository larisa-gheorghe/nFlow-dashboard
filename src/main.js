import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ExecutorsTable from './components/ExecutorsTable.vue'
import AppAbout from './components/AppAbout.vue'
import WorkflowDefinitions from './components/WorkflowDefinitions.vue'

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faXmark, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faXmark, faMagnifyingGlass, faPlus)
/* fontawesome */

const router = createRouter({
    history: createWebHistory('/nFlow-dashboard'),
    routes: [
        { path: '/', component: AppAbout},
        { path: '/executors', component: ExecutorsTable},
        { path: '/workflow-definitions', component: WorkflowDefinitions}
    ],
});

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
