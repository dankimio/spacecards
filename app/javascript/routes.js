import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/index'
import SignUp from '@/views/sign_up/index'
import LogIn from '@/views/log_in/index'
import DecksIndex from '@/views/decks/index'
import CardsIndex from '@/views/cards/index'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp },
    { path: '/log-in', component: LogIn },
    { path: '/decks', component: DecksIndex },
    { path: '/cards', component: CardsIndex },
  ]
})
