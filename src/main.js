import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/styles/custom.scss';

import '@/mixins/helpers'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
