import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Details from '@/components/details.vue'
import Checkout from '@/components/checkout.vue'
import Cart from '@/components/cart.vue'
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
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart
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
