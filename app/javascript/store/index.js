import Vue from 'vue'
import Vuex from 'vuex'

import cards from './modules/cards'
import decks from './modules/decks'
import userDecks from './modules/userDecks'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    decks,
    userDecks,
    users
  }
})
