import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView'
import JoinView from '../views/Join'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/join',
    name: 'join',
    component: JoinView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
