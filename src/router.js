import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/work/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/work/list',
      component: Home,
      children: [
        {
          path: '/work/list',
          name: 'work-list',
          component: () => import('@/pages/work/list.vue')
        }
      ]
    },
    {
      path: '/editor/:workId',
      name: 'editor',
      component: () => import('@/pages/Editor/Editor.vue')
    }
  ]
})
