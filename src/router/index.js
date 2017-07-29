import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/CentrePage/Hello'
import Cart from '@/components/Cart'
import Ewm from '@/components/EwmPage/Ewm'
import HomePage from '@/components/homePage/home'
import Particulars from '@/components/homePage/particulars'
// import firstChild from '@/components/homePage/firstChild'
import secondChild from '@/components/homePage/secondChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index_btn',
      name: 'HomePage',
      component: HomePage,
      children: [
        {path: '/', name: 'secondChild', component: secondChild},
        {path: 'secondChild', name: 'secondChild', component: secondChild},
        {path: 'Particulars', name: 'Particulars', component: Particulars}
      ]
    },
    {
      path: '/cart_btn',
      name: 'cart',
      component: Cart
    },
    {
      path: '/Ewm_btn',
      name: 'ewm',
      component: Ewm
    },
    {
      path: '/center_btn',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/',
      redirect: '/index_btn/secondChild'
    }
  ]
})
