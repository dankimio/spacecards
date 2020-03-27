import axios from 'axios'

const state = {
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
  createUserDeck(context, userDeck) {
    return axios.post('/user_decks', { user_deck: userDeck })
      .then(response => {
        context.commit('CREATE_USER_DECK', response.data)
        return response
      })
  }
}

const mutations = {
  SET_USER_DECKS(state, userDecks) {
    state.userDecks = userDecks
  },
  CREATE_USER_DECK(state, userDeck) {
    state.userDecks = [userDeck, ...state.userDecks]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
