import api from '@/api'

const state = {
  userCards: [],
  userCard: {}
}

const getters = {}

const actions = {
  getUserDeckUserCards(context, userDeckId) {
    return api.url(`/user_decks/${userDeckId}/user_cards`)
      .get()
      .json(json => { context.commit('SET_USER_CARDS', json) })
  },
  createUserCard(context, { userDeckId, userCard }) {
    return api.url(`/user_decks/${userDeckId}/user_cards`)
      .post({ user_card: userCard })
      .json(json => { context.commit('CREATE_USER_CARD', json) })
  },
  updateUserCard(context, userCard) {
    return api.url(`/user_cards/${userCard.id}`)
      .patch({ user_card: userCard })
      .json(json => { context.commit('SET_USER_CARD', json) })
  },
  deleteUserCard(context, userCard) {
    return api.url(`/user_cards/${userCard.id}`)
      .delete()
      .res(() => { context.commit('DESTROY_USER_CARD', userCard) })
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
