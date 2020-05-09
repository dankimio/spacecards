<template>
  <div class="container">
    <div class="max-w-xl">
      <h1 class="heading-2 mb-0 flex items-center">
        My decks

        <router-link
          :to="{ name: 'newUserDeck' }"
          class="button button-sm button-outlined button-outlined-primary ml-6 font-normal text-sm"
        >
          <span class="mr-1">+</span>
          New deck
        </router-link>
      </h1>

      <template v-if="isLoading">
        <UserDeckLoader v-for="index in 4" :key="index" />
      </template>
      <template v-else>
        <UserDeck
          v-for="userDeck in userDecks"
          :key="userDeck.id"
          :user-deck="userDeck"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import UserDeck from '@/components/UserDeck'
import UserDeckLoader from '@/components/UserDeckLoader'

export default {
  components: { UserDeck, UserDeckLoader },
  computed: {
    ...mapState('userDecks', ['userDecks', 'isLoading'])
  },
  created() {
    this.$store.commit('userDecks/RESET_USER_DECKS')
    this.getUserDecks()
  },
  methods: {
    ...mapActions('userDecks', ['getUserDecks'])
  },
  metaInfo: {
    title: 'Decks'
  }
}
</script>
