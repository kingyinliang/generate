import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUSLang from './lang/en-US'
import zhCNLang from './lang/zh-CN'

Vue.use(VueI18n)

const messages = {
    'en-US': {
        ...enUSLang
    },
    'zh-CN': {
        ...zhCNLang
    }
}

const defaultLang = 'zh-CN'

const i18n = new VueI18n({
    locale: defaultLang,
    fallbackLocale: defaultLang,
    messages
})

export default i18n