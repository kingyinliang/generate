import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/work/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            component: Home,
            children: []
        },
        {
            path: '/editor/:workId',
            name: 'editor',
            component: () => import('@/pages/Editor/Editor.vue')
          }
    ]
})