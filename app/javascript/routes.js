import Vue from 'vue'
import VueRouter from 'vue-router'

import DecksEdit from '@/views/decks/edit'
import Explore from '@/views/explore/index'
import Home from '@/views/home/index'
import LogIn from '@/views/log_in/index'
import SharedDecksShow from '@/views/shared_decks/show'
import SignUp from '@/views/sign_up/index'
import StudySessionShow from '@/views/study_session/show'
import UserDecksIndex from '@/views/user_decks/index'
import UserDecksNew from '@/views/user_decks/new'
import UserDecksShow from '@/views/user_decks/show'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp },
    { path: '/log-in', component: LogIn },
    { path: '/decks/:id', component: SharedDecksShow, props: true },
    { path: '/decks/1/edit', component: DecksEdit },
    { path: '/explore', component: Explore },
    { path: '/user/decks', component: UserDecksIndex },
    { path: '/user/decks/new', component: UserDecksNew, props: true },
    { path: '/user/decks/:id', component: UserDecksShow, props: true },
    { path: '/user/decks/:id/study', component: StudySessionShow, props: true }
  ]
})
