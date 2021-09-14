import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSplide from '@splidejs/vue-splide'

const Vue = createApp(App)

Vue.use(VueSplide)
Vue.use(router).mount('#app')
