import api from '@/api'

const state = {
  sharedCards: []
}

const getters = {}

const actions = {
  getSharedDeckCards(context, sharedDeckId) {
    api.url(`/shared_decks/${sharedDeckId}/shared_cards`)
      .get()
      .json(json => { context.commit('SET_SHARED_CARDS', json) })
  }
}

const mutations = {
  SET_SHARED_CARDS(state, data) {
    state.sharedCards = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
