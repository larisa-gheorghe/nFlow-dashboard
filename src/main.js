import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ExecutorsTable from './components/ExecutorsTable.vue'
import AppAbout from './components/AppAbout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppAbout},
        { path: '/executors', component: ExecutorsTable}
    ]
});

const app = createApp(App)

app.use(router)

app.mount('#app')
