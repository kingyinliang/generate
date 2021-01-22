import Vue from 'vue'

import KPicture from './k-picture'

export const pluginsList = [
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
