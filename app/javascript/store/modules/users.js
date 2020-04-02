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
    return new Promise((resolve, reject) => {
      axios
        .post('/users/sign_in', user)
        .then(response => {
          const token = response.headers.authorization.split(' ').pop()
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          localStorage.setItem('token', token)
          context.commit('LOG_IN', token, response.data)
          resolve()
        })
        .catch(error => {
          localStorage.removeItem('token')
          reject(error)
        })
    })
  },
  signUp(context, user) {
    axios
      .post('/users', user)
      .then(response => {
        const token = response.headers.authorization.split(' ').pop()
        delete axios.defaults.headers.common.Authorization
        localStorage.setItem('token', token)
        context.commit('LOG_IN', token, response.data)
      })
  },
  logOut(context) {
    return new Promise((resolve, reject) => {
      context.commit('LOG_OUT')
      resolve()
    })
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
