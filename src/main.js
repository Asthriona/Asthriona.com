/* eslint-disable */
import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueMeta from 'vue-meta'

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker'
import i18n from './i18n'

createApp(App)
.use(router)
.use(BootstrapVue)
.use(VueMeta)
.use(IconsPlugin)
.use(require('vue-moment'))
.mount('#app')

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");