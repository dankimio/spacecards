<template>
  <div class="container md:max-w-xl lg:mx-auto">
    <h1 class="heading-2 mb-4 md:mb-8 md:text-center">
      Decks

      <small>
        <router-link to="#" class="text-base ml-1">New deck</router-link>
      </small>
    </h1>

    <UserDeck v-for="deck in decks" :key="deck.name" :deck="deck" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import UserDeck from '@/components/user_deck'

export default {
  components: { UserDeck },
  computed: {
    ...mapState(['decks'])
  },
  created() {
    this.getDecks()
  },
  methods: {
    ...mapActions(['getDecks'])
  },
  metaInfo: {
    title: 'Decks'
  }
}
</script>
