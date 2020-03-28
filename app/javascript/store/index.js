import Vue from 'vue'
import Vuex from 'vuex'

import cards from './modules/cards'
import sharedCards from './modules/sharedCards'
import sharedDecks from './modules/sharedDecks'
import userDecks from './modules/userDecks'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards,
    sharedCards,
    sharedDecks,
    userDecks,
    users
  }
})
