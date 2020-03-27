import axios from 'axios'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || null
}

const getters = {
  isLoggedIn(state) {
    return state.user && state.user.id
  }
}

const actions = {
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
}

const mutations = {
  SET_USER(state, data) {
    state.user = data
    localStorage.setItem('user', JSON.stringify(data))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
