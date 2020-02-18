import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    decks: [
      { name: 'World capitals', cards_count: 169 },
      { name: 'U.S. state capitals', cards_count: 50 }
    ]
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
    }
  },
  getters: {
    loggedIn(state) {
      return state.user && state.user.id
    }
  }
})
