import {loadLanguageAsync} from "@/locales";

export default {
  namespaced: true,
  state: {
    lang: 'zh-CN'
  },
  mutations: {
    SetLang: (state, lang) => {
      state.lang = lang
    }
  },
  actions: {
    SetLangAsync({commit}, lang) {
      return new Promise(resolve => {
        commit('SetLang', lang)
        loadLanguageAsync(lang)
        resolve()
      })
    }
  }
}
