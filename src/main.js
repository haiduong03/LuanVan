import Vue from 'vue'

//import Vuex from 'vuex'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'


// Đăng ký component Global Layouts
import Default from './layouts/LayoutDefault.vue'
import NoSidebar from './layouts/LayoutNoSidebar.vue'


// CommonJS

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// // If you don't need the styles, do not connect


Vue.use(VueSweetalert2);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('default-layout', Default)

Vue.component('no-sidebar-layout', NoSidebar)

Vue.config.productionTip = false

// Vue.use(Vuex);
// export default new Vuex.Store({
//   state: {
//     user: null
//     token: null
//   }
// })

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')