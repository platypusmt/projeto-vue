import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueLocalStorage from 'vue-ls'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
