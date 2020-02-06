import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/pages/home/index'
import SignUp from './components/pages/sign_up/index'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp }
  ]
});
