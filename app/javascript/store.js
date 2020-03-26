import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import cards from './store/modules/cards'
import decks from './store/modules/decks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    decks
  },
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    userDecks: []
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },
    SET_USER_DECKS(state, data) {
      state.userDecks = data
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
    },
    getDeckCards(context, deckId) {
      axios.get(`/decks/${deckId}/cards`)
        .then(response => {
          context.commit('SET_CARDS', response.data)
        })
    },
    getUserDecks(context) {
      axios.get('/user_decks')
        .then(response => {
          context.commit('SET_USER_DECKS', response.data)
        })
    }
  },
  getters: {
    loggedIn(state) {
      return state.user && state.user.id
    }
  }
})
