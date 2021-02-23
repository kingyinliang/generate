import Vue from 'vue'

import KBackground from './k-background'
import KPicture from './k-picture'
import KButton from './k-button'

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
    icon: 'el-icon-thumb',
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
    icon: 'el-icon-picture-outline',
    component: KPicture,
    visible: true,
    name: KPicture.name
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
