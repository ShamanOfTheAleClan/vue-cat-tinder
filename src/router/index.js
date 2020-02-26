import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Game',
    component: () => import('@/views/Game')
  },
  {
    path: '/Matches',
    name: 'Matches',
    component: () => import('@/views/Matches')
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: () => import('@/views/Chat')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
