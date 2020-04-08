import api from '@/api'

const state = {
  sharedDecks: [],
  sharedDeck: {}
}

const getters = {}

const actions = {
  getSharedDeck(context, id) {
    return api.url(`/shared_decks/${id}`)
      .get()
      .json(json => { context.commit('SET_SHARED_DECK', json) })
  },
  getSharedDecks(context) {
    return api.url('/shared_decks')
      .get()
      .json(json => { context.commit('SET_SHARED_DECKS', json) })
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
