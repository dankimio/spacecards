import Vue from 'vue'
import VueRouter from 'vue-router'

import Explore from '@/views/explore/index'
import Home from '@/views/home/index'
import LogIn from '@/views/log_in/index'
import NotFound from '@/views/errors/not_found'
import SharedDecksShow from '@/views/shared_decks/show'
import SignUp from '@/views/sign_up/index'
import StudySessionShow from '@/views/study_session/show'
import UserDecksEdit from '@/views/user_decks/edit'
import UserDecksIndex from '@/views/user_decks/index'
import UserDecksNew from '@/views/user_decks/new'
import UserDecksShow from '@/views/user_decks/show'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/log-in',
      name: 'login',
      component: LogIn
    },
    {
      path: '/decks/:id',
      name: 'sharedDeck',
      component: SharedDecksShow,
      props: true
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/user/decks',
      name: 'userDecks',
      component: UserDecksIndex
    },
    {
      path: '/user/decks/new',
      name: 'newUserDeck',
      component: UserDecksNew,
      props: true
    },
    {
      path: '/user/decks/:id',
      name: 'userDeck',
      component: UserDecksShow,
      props: true
    },
    {
      path: '/user/decks/:id/edit',
      name: 'editUserDeck',
      component: UserDecksEdit,
      props: true
    },
    {
      path: '/user/decks/:id/study',
      name: 'studySession',
      component: StudySessionShow,
      props: true
    },
    {
      path: '*', component: NotFound
    }
  ]
})
