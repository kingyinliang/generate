import Vue from 'vue'
import PreviewCanvas from 'core/preview'
import { pluginsList } from 'core/plugins'

import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss';
import '@/assets/scss/editor.scss'
import 'animate.css'

Vue.use(elementUi)

const Engine = {
  name: 'Engine',
  render(){
    const work = window.__work
    return (
      <div class='work_container'>
        <PreviewCanvas elements={work.pages[0].elements} height={work.pages[0].height}/>
      </div>
    )
  }
}

const install = function (Vue) {
  Vue.component(Engine.name, Engine)
  pluginsList.forEach(plugin => {
    Vue.component(plugin.name, plugin.component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Engine
}
