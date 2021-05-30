/* eslint-disable */
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueMeta from 'vue-meta'

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker'
Vue.use(require('vue-moment'));
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");