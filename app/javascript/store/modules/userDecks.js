import axios from 'axios'

const state = {
  userDecks: []
}

const getters = {}

const actions = {
  getUserDecks(context) {
    axios.get('/user_decks')
      .then(response => {
        context.commit('SET_USER_DECKS', response.data)
      })
  }
}

const mutations = {
  SET_USER_DECKS(state, data) {
    state.userDecks = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
