import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    decks: [],
    deck: {},
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
    SET_DECK(state, data) {
      state.deck = data
    },
    SET_CARDS(state, data) {
      state.cards = data
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
    getDeck(context, id) {
      axios.get(`/decks/${id}`)
        .then(response => {
          context.commit('SET_DECK', response.data)
        })
    },
    getDecks(context) {
      axios
        .get('/decks')
        .then(response => {
          context.commit('SET_DECKS', response.data)
        })
    },
    getDeckCards(context, deckId) {
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
