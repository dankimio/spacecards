import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import cards from './store/modules/cards'
import decks from './store/modules/decks'
import userDecks from './store/modules/user_decks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    decks,
    userDecks
  },
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
      localStorage.setItem('user', JSON.stringify(data))
    }
  },
  actions: {
    logIn(context, user) {
      axios
        .post('/users/sign_in', user)
        .then(response => {
          context.commit('SET_USER', response.data)
        })
    },
    signUp(context, user) {
      axios
        .post('/users', user)
        .then(response => {
          context.commit('SET_USER', response.data)
        })
    }
  },
  getters: {
    loggedIn(state) {
      return state.user && state.user.id
    }
  }
})
