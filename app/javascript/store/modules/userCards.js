import axios from 'axios'

const state = {
  userCards: [],
  userCard: {}
}

const getters = {}

const actions = {
  getUserDeckUserCards(context, userDeckId) {
    axios.get(`/user_decks/${userDeckId}/user_cards`)
      .then(response => {
        context.commit('SET_USER_CARDS', response.data)
      })
  },
  updateCard(context, userCard) {
    return axios.patch(`/user_cards/${userCard.id}`, { userCard: userCard })
      .then(response => {
        context.commit('SET_USER_CARD', response.data)
      })
  },
  destroyCard(context, userCard) {
    axios.delete(`/userCards/${userCard.id}`)
      .then(response => {
        context.commit('DESTROY_USER_CARD', userCard)
      })
  }
}

const mutations = {
  SET_USER_CARDS(state, data) {
    state.userCards = data
  },
  SET_USERCARD(state, data) {
    state.userCard = data
  },
  DESTROY_USERCARD(state, userCard) {
    state.userCard = {}
    state.userCards = state.userCards.filter(value => value.id !== userCard.id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
