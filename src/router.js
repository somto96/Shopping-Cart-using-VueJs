import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from '@/components/details.vue'
import Checkout from '@/components/checkout.vue'
import addedToCart from '@/components/addedToCart.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/checkout/:id',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/addedToCart/:id',
      name: 'addedToCart',
      component: addedToCart
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
