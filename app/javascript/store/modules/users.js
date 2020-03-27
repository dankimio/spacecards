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
        const token = response.headers.authorization.split(' ').pop()

        localStorage.setItem('token', token)
        context.commit('LOG_IN', token, response.data)
      })
  },
  signUp(context, user) {
    axios
      .post('/users', user)
      .then(response => {
        const token = response.headers.authorization.split(' ').pop()

        localStorage.setItem('token', token)
        context.commit('LOG_IN', token, response.data)
      })
  },
  logOut(context) {
    context.commit('LOG_OUT')
  }
}

const mutations = {
  LOG_IN(state, token, user) {
    state.token = token
    state.user = user
  },
  LOG_OUT(state) {
    state.token = ''
    state.user = {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
