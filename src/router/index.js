import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Matching',
    component: () => import('@/views/Matching'),
    children: [
      {
        path: '/kitty',
        name: 'MatchersBio',
        component: () => import('@/views/MatchersBio')
      }
    ]
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('@/views/Profile')
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
