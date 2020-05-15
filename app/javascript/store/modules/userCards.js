import api from '@/api'
import snakeCaseKeys from 'snakecase-keys'

const state = {
  userCards: [],
  userCard: {},
  isLoading: false
}

const getters = {}

const actions = {
  getUserDeckUserCards(context, userDeckId) {
    context.commit('SET_LOADING')
    return api.url(`/user_decks/${userDeckId}/user_cards`)
      .get()
      .json(json => {
        context.commit('SET_USER_CARDS', json)
        context.commit('SET_LOADING', false)
      })
  },
  createUserCard(context, { userDeckId, userCard }) {
    const data = snakeCaseKeys({ userCard })
    return api.url(`/user_decks/${userDeckId}/user_cards`)
      .post(data)
      .json(json => { context.commit('CREATE_USER_CARD', json) })
  },
  updateUserCard(context, userCard) {
    const data = snakeCaseKeys({ userCard })
    return api.url(`/user_cards/${userCard.id}`)
      .patch(data)
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
