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
        context.commit('SET_USER', response.data)
        context.commit('SET_TOKEN', token)
      })
  },
  signUp(context, user) {
    axios
      .post('/users', user)
      .then(response => {
        const token = response.headers.authorization.split(' ').pop()

        localStorage.setItem('token', token)
        context.commit('SET_USER', response.data)
        context.commit('SET_TOKEN', token)
      })
  },
  logOut(context) {
    context.commit('LOG_OUT')
  }
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
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
