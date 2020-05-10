import Vue from 'vue'
import VueRouter from 'vue-router'

import Explore from '@/views/explore/index'
import Home from '@/views/home/index'
import SignIn from '@/views/sign_in/index'
import NotFound from '@/views/errors/not_found'
import SharedDecksShow from '@/views/shared_decks/show'
import SignUp from '@/views/sign_up/index'
import StudySessionShow from '@/views/study_session/show'
import UserDecksEdit from '@/views/user_decks/edit'
import UserDecksIndex from '@/views/user_decks/index'
import UserDecksNew from '@/views/user_decks/new'
import UserDecksShow from '@/views/user_decks/show'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUp
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
      component: UserDecksIndex,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/decks/new',
      name: 'newUserDeck',
      component: UserDecksNew,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/decks/:id',
      name: 'userDeck',
      component: UserDecksShow,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/decks/:id/edit',
      name: 'editUserDeck',
      component: UserDecksEdit,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/decks/:id/study',
      name: 'studySession',
      component: StudySessionShow,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '*', component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['users/isSignedIn']) {
      next()
    } else {
      next({
        name: 'signin',
        query: { redirect: to.fullPath }
      })
    }
    return
  }

  next()
})

export default router
