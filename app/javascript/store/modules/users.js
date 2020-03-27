import axios from 'axios'

const state = {
  token: localStorage.getItem('token') || '',
  user: {}
}

const getters = {
  isLoggedIn(state) {
    return !!state.token
  }
}

const actions = {
  logIn(context, user) {
    axios
      .post('/users/sign_in', user)
      .then(response => {
        // TODO: get token
        localStorage.setItem('token', response.token)

        context.commit('SET_USER', response.data)
        context.commit('SET_TOKEN', response.token)
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
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
