import api from '@/api'

const state = {
  sharedDecks: [],
  sharedDeck: {},
  isLoading: false
}

const getters = {}

const actions = {
  getSharedDeck(context, id) {
    return api.url(`/shared_decks/${id}`)
      .get()
      .json(json => { context.commit('SET_SHARED_DECK', json) })
  },
  getSharedDecks(context) {
    context.commit('SET_LOADING')
    return api.url('/shared_decks')
      .get()
      .json(json => {
        context.commit('SET_SHARED_DECKS', json)
        context.commit('SET_LOADING', false)
      })
  }
}

const mutations = {
  SET_SHARED_DECKS(state, data) {
    state.sharedDecks = data
  },
  SET_SHARED_DECK(state, data) {
    state.sharedDeck = data
  },
  RESET_SHARED_DECKS(state) {
    state.sharedDecks = []
  },
  SET_LOADING(state, loading = true) {
    state.isLoading = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
