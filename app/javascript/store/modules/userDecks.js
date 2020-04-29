import api from '@/api'
import snakeCaseKeys from 'snakecase-keys'

const state = {
  userDeck: {},
  userDecks: [],
  isLoading: false
}

const getters = {}

const actions = {
  getUserDecks(context) {
    context.commit('SET_LOADING')
    return api.url('/user_decks')
      .get()
      .json(json => {
        context.commit('SET_USER_DECKS', json)
        context.commit('SET_LOADING', false)
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
  },
  RESET_USER_DECKS(state) {
    state.userDecks = []
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
