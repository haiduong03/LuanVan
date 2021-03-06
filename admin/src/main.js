/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";

// router setup
import routes from "./routes/routes";

import Vuelidate from "vuelidate";

import "./registerServiceWorker";
// plugin setup
import JwPagination from "jw-vue-pagination";
import vueNumeralFilterInstaller from "vue-numeral-filter";
// import { VueResponsiveComponents } from "vue-responsive-components";
import moment from "moment";

Vue.use(vueNumeralFilterInstaller, { locale: "en-gb" });
Vue.component("jw-pagination", JwPagination);
Vue.use(VueRouter);
Vue.use(LightBootstrap);
Vue.use(Vuelidate);
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("hh:mm:ss MM/DD/YYYY");
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
// new Vue({
//     el: '#app',
//     methods: {
//         clickCallback: function(pageNum) {
//             console.log(pageNum)
//         }
//     }

// })
