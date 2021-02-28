import Vue from 'vue'

import KBackground from './k-background'
import KPicture from './k-picture'
import KButton from './k-button'
import KInput from './k-input'
import KDiv from './k-div'
import KVideo from './k-video'

export const pluginsList = [
  {
    i18nTitle: {
      'en-US': 'Background',
      'zh-CN': '背景'
    },
    title: '背景',
    icon: 'el-icon-thumb',
    component: KBackground,
    visible: false,
    name: KBackground.name
  },
  {
    title: '按钮',
    i18nTitle: {
      'en-US': 'Button',
      'zh-CN': '按钮'
    },
    icon: 'Kbutton',
    component: KButton,
    visible: true,
    name: KButton.name
  },
  {
    title: '图片',
    i18nTitle: {
      'en-US': 'Picture',
      'zh-CN': '图片'
    },
    icon: 'Ktupian',
    component: KPicture,
    visible: true,
    name: KPicture.name
  },
  {
    title: '输入框',
    i18nTitle: {
      'en-US': 'Picture',
      'zh-CN': '输入框'
    },
    icon: 'Kshurukuang',
    component: KInput,
    visible: true,
    name: KInput.name
  },
  {
    title: '容器',
    i18nTitle: {
      'en-US': 'div',
      'zh-CN': '容器'
    },
    icon: 'Kdiv',
    component: KDiv,
    visible: true,
    name: KDiv.name
  },
  {
    title: '视频',
    i18nTitle: {
      'en-US': 'video',
      'zh-CN': '视频'
    },
    icon: 'Kdiv',
    component: KVideo,
    visible: true,
    name: KVideo.name
  },
]

export default {
  data: () => ({
    pluginsList
  }),
  methods:{
    mixinPlugins2Editor () {
      pluginsList.forEach(plugin => {
        Vue.component(plugin.name, plugin.component)
      })
    }
  },
  created () {
    this.mixinPlugins2Editor()
  }
}
