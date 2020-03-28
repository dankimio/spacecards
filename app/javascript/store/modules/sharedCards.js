import axios from 'axios'

const state = {
  sharedCards: []
}

const getters = {}

const actions = {
  getSharedDeckCards(context, sharedDeckId) {
    axios.get(`/shared_decks/${sharedDeckId}/shared_cards`)
      .then(response => {
        context.commit('SET_SHARED_CARDS', response.data)
      })
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
