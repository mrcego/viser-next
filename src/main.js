//Core Imports
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Proyect Imports
import Vuetify from 'vuetify'
import Vlf from 'vlf'
import localforage from 'localforage'
import axios from 'axios'
import VueAxios from 'vue-axios'

//CSS
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

//Vue Global
Vue.use(Vuetify)
Vue.use(Vlf, localforage)
Vue.use(VueAxios, axios)

// Utils
import localForage from '@/utils/localForage'
import auth from '@/utils/auth'
import { httpv2 } from '@/utils/http'

//Configs & Global prototypes
Vue.config.productionTip = false
Vue.prototype.$ls = localForage
Vue.prototype.$auth = auth
Vue.prototype.$httpv2 = httpv2

new Vue({
  router,
  store,
  vuetify,
  localForage,
  render: h => h(App)
}).$mount('#app')
