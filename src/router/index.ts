import {createMemoryHistory, createRouter, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    name:'home',
    redirect: 'history',
    component: () => import('@/pages/pageHome.vue'),
    children:[
      {
        path:'/history',
        name:'history',
        component: () => import('@/pages/history/History.vue')
      },
      {
        path:'/collect',
        name:'collect',
        component: () => import('@/pages/collect/Collect.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
