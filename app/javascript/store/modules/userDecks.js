import api from '@/api'
import snakeCaseKeys from 'snakecase-keys'

const state = {
  userDeck: {},
  userDecks: []
}

const getters = {}

const actions = {
  getUserDecks(context) {
    return api.url('/user_decks')
      .get()
      .json(json => {
        context.commit('SET_USER_DECKS', json)
      })
  },
  getUserDeck(context, userDeckId) {
    return api
      .url(`/user_decks/${userDeckId}`)
      .get()
      .json(json => { context.commit('SET_USER_DECK', json) })
  },
  createUserDeck(context, userDeck) {
    const data = snakeCaseKeys({ userDeck })
    return api.url('/user_decks')
      .post(data)
      .json(json => {
        context.commit('SET_USER_DECK', json)
        return json
      })
  },
  updateUserDeck(context, userDeck) {
    const data = snakeCaseKeys({ userDeck })
    return api.url(`/user_decks/${userDeck.id}`)
      .patch(data)
      .json(json => { context.commit('SET_USER_DECK', json) })
  },
  deleteUserDeck(context, userDeckId) {
    return api.url(`/user_decks/${userDeckId}`)
      .delete()
      .res(() => { context.commit('SET_USER_DECK', {}) })
  }
}

const mutations = {
  SET_USER_DECK(state, userDeck) {
    state.userDeck = userDeck
  },
  SET_USER_DECKS(state, userDecks) {
    state.userDecks = userDecks
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
