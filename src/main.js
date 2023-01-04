import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ExecutorsTable from './components/ExecutorsTable.vue'
import AppAbout from './components/AppAbout.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCheck, faXmark)


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppAbout},
        { path: '/executors', component: ExecutorsTable}
    ]
});

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
