import Vue from 'vue'
import VueRouter from 'vue-router'
import Leagues from '../views/Leagues.vue'
import Teams from '../views/Teams.vue'
import Mainpage from '../views/Mainpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: Mainpage
  },

  {
    path: '/leagues/:code',    
    name: 'Leagues',
    component: Leagues
  },

  {
    path: '/teams/:id',
    
    name: 'Teams',
    component: Teams
  }
  /*
  ,
  {
    path: '/teams/:id',
    name: 'Teams',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(*//* webpackChunkName: "about" *//* '../views/Teams.vue')
  },
  {
    path: '/',
    name: 'Mainpage',
    component: Mainpage
  }
  */
]

const router = new VueRouter({
  routes
})

export default router
