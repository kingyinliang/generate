import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './modules/i18n'
import editor from './modules/editor'
import vuexHistory from './plugins'
// import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({
//   storage: window.sessionStorage
// });

export default new Vuex.Store({
  modules: {
    i18n,
    editor
  },
  // plugins: [vuexLocal.plugin]
  plugins: [vuexHistory]
})
