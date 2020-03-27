import axios from 'axios'

const state = {
  decks: [],
  deck: {}
}

const getters = {
  getDeckById: (state) => (id) => {
    return state.decks.find(deck => deck.id == id)
  }
}

const actions = {
  getDeck(context, id) {
    axios.get(`/decks/${id}`)
      .then(response => {
        context.commit('SET_DECK', response.data)
      })
  },
  getDecks(context) {
    axios
      .get('/decks')
      .then(response => {
        context.commit('SET_DECKS', response.data)
      })
  }
}

const mutations = {
  SET_DECKS(state, data) {
    state.decks = data
  },
  SET_DECK(state, data) {
    state.deck = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
