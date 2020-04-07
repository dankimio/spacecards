import axios from 'axios'
import snakeCaseKeys from 'snakecase-keys'

const state = {
  userDeck: {},
  userDecks: []
}

const getters = {}

const actions = {
  getUserDecks(context) {
    axios.get('/user_decks')
      .then(response => {
        context.commit('SET_USER_DECKS', response.data)
      })
  },
  getUserDeck(context, userDeckId) {
    axios.get(`/user_decks/${userDeckId}`)
      .then(response => {
        context.commit('SET_USER_DECK', response.data)
      })
  },
  createUserDeck(context, userDeck) {
    return axios.post('/user_decks', { user_deck: userDeck })
      .then(response => {
        context.commit('SET_USER_DECK', response.data)
        return response
      })
  },
  updateUserDeck(context, userDeck) {
    return axios.patch(
      `/user_decks/${userDeck.id}`,
      { user_deck: snakeCaseKeys(userDeck) }
    )
      .then(response => {
        context.commit('SET_USER_DECK', response.data)
        return response
      })
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
