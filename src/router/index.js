import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publications from '../views/Publications.vue'
import People from '../views/People.vue'
import Resources from '../views/Resources.vue'
import Contact from '../views/Contact.vue'
import Activities from '../views/Activities.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
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
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  }
]

const router = new VueRouter({
  routes
})

export default router
