import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/index'
import SignUp from '@/views/sign_up/index'
import LogIn from '@/views/log_in/index'

import DecksIndex from '@/views/decks/index'
import DecksNew from '@/views/decks/new'
import DecksEdit from '@/views/decks/edit'

import SharedDecksShow from '@/views/shared_decks/show'

import StudySession from '@/views/study_session/index'
import Explore from '@/views/explore/index'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp },
    { path: '/log-in', component: LogIn },
    { path: '/decks', component: DecksIndex },
    { path: '/decks/new', component: DecksNew, props: true },
    { path: '/decks/1/edit', component: DecksEdit },
    { path: '/study-session', component: StudySession },
    { path: '/decks/:id', component: SharedDecksShow, props: true },
    { path: '/explore', component: Explore }
  ]
})
