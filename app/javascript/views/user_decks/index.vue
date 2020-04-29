<template>
  <div class="container">
    <div class="md:max-w-xl">
      <h1 class="heading-2 mb-4 md:mb-8">
        My decks
        <small>
          <router-link
            :to="{ name: 'newUserDeck' }"
            class="text-base ml-1"
          >
            + New deck
          </router-link>
        </small>
      </h1>

      <template v-if="isLoading">
        <UserDeckLoader v-for="index in 4" :key="index" class="mb-5" />
      </template>
      <template v-else>
        <UserDeck
          v-for="userDeck in userDecks"
          :key="userDeck.id"
          :user-deck="userDeck"
          class="mb-5"
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
