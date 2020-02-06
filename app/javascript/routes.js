import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/index'
import SignUp from '@/views/sign_up/index'
import LogIn from '@/views/log_in/index'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp },
    { path: '/log-in', component: LogIn },
  ]
})
