import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faXmark, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faXmark, faMagnifyingGlass, faPlus)
/* fontawesome */

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
