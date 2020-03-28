import axios from 'axios'

const state = {
  sharedDecks: [],
  sharedDeck: {}
}

const getters = {}

const actions = {
  getSharedDeck(context, id) {
    axios.get(`/shared_decks/${id}`)
      .then(response => {
        context.commit('SET_SHARED_DECK', response.data)
      })
  },
  getSharedDecks(context) {
    axios
      .get('/shared_decks')
      .then(response => {
        context.commit('SET_SHARED_DECKS', response.data)
      })
  }
}

const mutations = {
  SET_SHARED_DECKS(state, data) {
    state.sharedDecks = data
  },
  SET_SHARED_DECK(state, data) {
    state.sharedDeck = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
