import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import redirect from './redirects';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
    path: '/rivals',
    name: 'Rivals',
    component: () => import(/* webpackChunkName: "rivals" */ '../views/Rivals.vue')
  },
  {
    path: '/fusions',
    name: 'Fusions',
    component: () => import(/* webpackChunkName: "fusions" */ '../views/Fusions.vue')
  },
  {
    path: '/rituals',
    name: 'Rituals',
    component: () => import(/* webpackChunkName: "rituals" */ '../views/Rituals.vue')
  },
  {
    path: '/equips',
    name: 'Equips',
    component: () => import(/* webpackChunkName: "equips" */ '../views/Equips.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Access.vue'),
    beforeEnter: redirect.ifLoggedIn
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Access.vue'),
    beforeEnter: redirect.ifLoggedIn
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    beforeEnter: redirect.ifNotLoggedIn
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
