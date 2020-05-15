import api from '@/api'

const state = {
  sharedCards: [],
  isLoading: false
}

const getters = {}

const actions = {
  getSharedDeckCards(context, sharedDeckId) {
    context.commit('SET_LOADING')
    api.url(`/shared_decks/${sharedDeckId}/shared_cards`)
      .get()
      .json(json => {
        context.commit('SET_SHARED_CARDS', json)
        context.commit('SET_LOADING', false)
      })
  }
}

const mutations = {
  SET_SHARED_CARDS(state, data) {
    state.sharedCards = data
  },
  SET_LOADING(state, loading = true) {
    state.isLoading = loading
  },
  RESET_SHARED_CARDS(state) {
    state.sharedCards = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
