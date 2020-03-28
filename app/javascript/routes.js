import Vue from 'vue'
import VueRouter from 'vue-router'

import DecksEdit from '@/views/decks/edit'
import DecksIndex from '@/views/decks/index'
import DecksNew from '@/views/decks/new'
import Explore from '@/views/explore/index'
import Home from '@/views/home/index'
import LogIn from '@/views/log_in/index'
import SharedDecksShow from '@/views/shared_decks/show'
import SignUp from '@/views/sign_up/index'
import StudySession from '@/views/study_session/index'
import UserDecksShow from '@/views/user_decks/show'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp },
    { path: '/log-in', component: LogIn },
    { path: '/decks', component: DecksIndex },
    { path: '/decks/new', component: DecksNew, props: true },
    { path: '/decks/1/edit', component: DecksEdit },
    { path: '/decks/:id', component: SharedDecksShow, props: true },
    { path: '/user/decks/:id', component: UserDecksShow, props: true },
    { path: '/user/decks/:id/study', component: StudySession, props: true },
    { path: '/explore', component: Explore }
  ]
})
