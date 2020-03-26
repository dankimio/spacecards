import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    decks: [],
    deck: {},
    cards: [],
    card: {},
    userDecks: []
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
    CREATE_DECK(state, data) {
      state.decks = [data, ...state.decks]
    },
    SET_CARDS(state, data) {
      state.cards = data
    },
    SET_CARD(state, data) {
      state.card = data
    },
    DESTROY_CARD(state, card) {
      state.card = {}
      state.cards = state.cards.filter(value => value.id !== card.id)
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
    createDeck(context, deck) {
      return axios.post('/decks', { deck: deck })
        .then(response => {
          context.commit('CREATE_DECK', response.data)
          return response
        })
    },
    getDeckCards(context, deckId) {
      axios.get(`/decks/${deckId}/cards`)
        .then(response => {
          context.commit('SET_CARDS', response.data)
        })
    },
    updateCard(context, card) {
      return axios.patch(`/cards/${card.id}`, { card: card })
        .then(response => {
          context.commit('SET_CARD', response.data)
        })
    },
    destroyCard(context, card) {
      axios.delete(`/cards/${card.id}`)
        .then(response => {
          context.commit('DESTROY_CARD', card)
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
    },
    getDeckById: (state) => (id) => {
      return state.decks.find(deck => deck.id == id)
    }
  }
})
