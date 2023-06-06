import '@/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import router from '@/router'

library.add(faSearch)
library.add(faAngleDown)
library.add(faAngleUp)

const pinia = createPinia()
createApp(App).use(pinia).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
