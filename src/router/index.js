import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/data/manage',
    name: 'Manage',
    component: () => import('../views/Manage.vue')
  },
  {
    path: '/data/:action/:item?',
    name: 'Data',
    component: () => import('../views/Data.vue')
  },
  {
    path: '/expimp',
    name: 'Export / Import',
    component: () => import('../views/Export.vue')
  },
  {
    path: '/practise',
    name: 'Practise',
    component: () => import('../views/Practise.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
