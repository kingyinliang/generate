import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales'
import store from './store/'
import './plugins/index'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
