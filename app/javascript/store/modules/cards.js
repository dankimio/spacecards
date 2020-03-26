import axios from 'axios'

const state = {
  cards: [],
  card: {}
}

const getters = {}

const actions = {
  getDeckCards(context, deckId) {
    axios.get(`/decks/${deckId}/cards`)
      .then(response => {
        context.commit('SET_CARDS', response.data)
      })
  },
  updateCard(context, card) {
    return axios.patch(`/cards/${card.id}`, { card: card })
      .then(response => {
        context.commit('SET_CARD', response.data)
      })
  },
  destroyCard(context, card) {
    axios.delete(`/cards/${card.id}`)
      .then(response => {
        context.commit('DESTROY_CARD', card)
      })
  }
}

const mutations = {
  SET_CARDS(state, data) {
    state.cards = data
  },
  SET_CARD(state, data) {
    state.card = data
  },
  DESTROY_CARD(state, card) {
    state.card = {}
    state.cards = state.cards.filter(value => value.id !== card.id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
