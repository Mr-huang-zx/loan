import Vue from 'vue'
import VueRouter from 'vue-router'
import logins from './moduless/log'
import lefttabbar from './moduless/lefttabbar'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect: "/home"
  }
  ,
  logins,
  lefttabbar,
  {
    path: '/About',
    name: 'About',
    component: ()=>import('../views/About.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/MyBanner',
    name: 'MyBanner',
    component: ()=>import('../components/global/my-banner')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
