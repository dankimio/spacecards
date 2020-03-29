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
  createUserCard(context, { userDeckId, userCard }) {
    axios.post(`/user_decks/${userDeckId}/user_cards`, { user_card: userCard })
      .then(response => {
        context.commit('CREATE_USER_CARD', response.data)
      })
  },
  updateUserCard(context, userCard) {
    return axios.patch(`/user_cards/${userCard.id}`, { user_card: userCard })
      .then(response => {
        context.commit('SET_USER_CARD', response.data)
      })
  },
  destroyUserCard(context, userCard) {
    return axios.delete(`/user_cards/${userCard.id}`)
      .then(response => {
        context.commit('DESTROY_USER_CARD', userCard)
      })
  }
}

const mutations = {
  SET_USER_CARDS(state, data) {
    state.userCards = data
  },
  SET_USER_CARD(state, data) {
    state.userCard = data
  },
  CREATE_USER_CARD(state, data) {
    state.userCards.unshift(data)
  },
  DESTROY_USER_CARD(state, userCard) {
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
