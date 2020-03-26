import Vue from 'vue'
import Vuex from 'vuex'

import cards from './store/modules/cards'
import decks from './store/modules/decks'
import userDecks from './store/modules/user_decks'
import users from './store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    decks,
    userDecks,
    users
  }
})
