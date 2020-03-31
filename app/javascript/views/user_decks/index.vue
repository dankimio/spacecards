<template>
  <div class="container md:max-w-xl lg:mx-auto">
    <h1 class="heading-2 mb-4 md:mb-8 md:text-center">
      Decks
      <small>
        <router-link to="/user/decks/new" class="text-base ml-1">New deck</router-link>
      </small>
    </h1>

    <UserDeck v-for="userDeck in userDecks" :key="userDeck.name" :user-deck="userDeck" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import UserDeck from '@/components/UserDeck'

export default {
  components: { UserDeck },
  computed: {
    ...mapState('userDecks', ['userDecks'])
  },
  created() {
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
