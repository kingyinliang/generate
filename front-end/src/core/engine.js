import Vue from 'vue'
import PreviewCanvas from 'core/preview'
import DialogCanvas from 'core/preview/dialog_canvas.js'
import { pluginsList } from 'core/plugins'
import KComponents from 'k-generate-components'

import '@/assets/scss/index.scss';
import '@/assets/scss/editor.scss'
import '@/assets/scss/plugins.scss'
import '@/assets/icon/iconfont.css'
import 'animate.css'

const Engine = {
  name: 'Engine',
  render(){
    const work = window.__work
    return (
      <div class='work_container'>
        <PreviewCanvas elements={work.pages[0].elements} height={work.pages[0].height}/>
        <DialogCanvas dialogs={work.dialog}/>
      </div>
    )
  }
}

Vue.use(KComponents)

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
