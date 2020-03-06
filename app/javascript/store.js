import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    decks: [
      {
        id: 1,
        name: 'World capitals',
        cards_count: 169
      },
      {
        id: 2,
        name: 'U.S. state capitals',
        cards_count: 50
      }
    ],
    cards: []
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },
    SET_DECKS(state, data) {
      state.decks = data
    },
    SET_CARDS(state, data) {
      state.cards = data
    }
  },
  actions: {
    logIn(context, user) {
      axios
        .post('/api/users/sign_in', user)
        .then(response => {
          context.commit('SET_USER', response.data)
        })
    },
    signUp(context, user) {
      axios
        .post('/api/users', user)
        .then(response => {
          context.commit('SET_USER', response.data)
        })
    },
    getDecks(context) {
      axios
        .get('/decks')
        .then(response => {
          context.commit('SET_DECKS', response.data)
        })
    },
    getCards(context, deckId) {
      axios.get(`/decks/${deckId}/cards`)
        .then(response => {
          context.commit('SET_CARDS', response.data)
        })
    }
  },
  getters: {
    loggedIn(state) {
      return state.user && state.user.id
    },
    getDeckById: (state) => (id) => {
      return state.decks.find(deck => deck.id == id)
    }
  }
})
