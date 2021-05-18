import Vue from 'vue'
// import Antd from 'ant-design-vue'
import elementUi from 'element-ui'
// import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss';
import KComponents from "k-generate-components";
import '@/assets/scss/editor.scss'
import '@/assets/scss/plugins.scss'

// Vue.use(Antd)
Vue.use(KComponents)
Vue.use(elementUi)
