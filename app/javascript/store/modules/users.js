import api from '@/api'

const state = {
  token: localStorage.getItem('token') || '',
  user: {}
}

const getters = {
  isSignedIn(state) {
    return !!state.token
  }
}

const actions = {
  logIn(context, user) {
    return api.url('/users/sign_in')
      .post(user)
      .res(response => {
        const token = response.headers.get('Authorization').split(' ').pop()
        localStorage.setItem('token', token)
        context.commit('SET_TOKEN', token)
        return response.json()
      })
      .then(json => {
        context.commit('SET_USER', json)
        return json
      })
      .catch(error => {
        localStorage.removeItem('token')
        throw error
      })
  },
  signUp(context, user) {
    return api.url('/users')
      .post(user)
      .res(response => {
        const token = response.headers.get('Authorization').split(' ').pop()
        localStorage.setItem('token', token)
        context.commit('SET_TOKEN', token)
        return response.json()
      })
      .then(json => {
        context.commit('SET_USER', json)
        return json
      })
      .catch(error => {
        localStorage.removeItem('token')
        throw error
      })
  },
  logOut(context) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token')
      context.commit('LOG_OUT')
      resolve()
    })
  }
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
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
