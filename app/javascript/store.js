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
        cards_count: 169,
        cards: [
          { id: 1, front: 'France', back: 'Paris' },
          { id: 2, front: 'Germany', back: 'Berlin' },
          { id: 3, front: 'Italy', back: 'Rome' },
          { id: 4, front: 'Spain', back: 'Madrid' }
        ]
      },
      {
        id: 2,
        name: 'U.S. state capitals',
        cards_count: 50,
        cards: [
          { id: 5, front: 'Alamaba', back: 'Montgomery' },
          { id: 6, front: 'California', back: 'Sacramento' }
        ]
      }
    ],
    turnOver: false
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },
    ROTATE_CARD(state) {
      state.turnOver = !state.turnOver
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
    rotateCard({ commit }) {
      commit('ROTATE_CARD')
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
