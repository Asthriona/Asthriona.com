/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker'
import i18n from './i18n'
import vuetify from './plugins/vuetify'
Vue.use(require('vue-moment'));
Vue.use(VueMeta);

new Vue({
    router,
    i18n,
    vuetify,
    render: h => h(App)
}).$mount("#app");
