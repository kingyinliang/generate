import Vue from 'vue'

import KBackground from './k-background'
import KPicture from './k-picture'
import KInput from './k-input'
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
