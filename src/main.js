/* eslint-disable */
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueMeta from 'vue-meta';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker'
import i18n from './i18n'
Vue.use(require('vue-moment'));
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta);
Vue.use(mavonEditor);

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");
