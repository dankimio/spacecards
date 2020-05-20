<template>
  <div class="container">
    <h1 class="heading-2">
      Explore decks
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-if="isLoading">
        <SharedDeckLoader v-for="index in 12" :key="index" />
      </template>
      <template v-else>
        <SharedDeck
          v-for="sharedDeck in sharedDecks"
          :key="sharedDeck.id"
          :shared-deck="sharedDeck"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SharedDeck from '@/components/SharedDeck'
import SharedDeckLoader from '@/components/SharedDeckLoader'

export default {
  components: { SharedDeck, SharedDeckLoader },
  metaInfo: {
    title: 'Explore decks'
  },
  data() {
    return {
      tags: ['languages', 'easy', '🇬🇧 english', '🇫🇷 french', 'art', 'history', '🇩🇪 german', 'math', 'programming', 'biology', '🇷🇺 russian', 'philosophy', 'sat']
    }
  },
  computed: {
    ...mapState('sharedDecks', ['isLoading', 'sharedDecks'])
  },
  created() {
    this.$store.commit('sharedDecks/RESET_SHARED_DECKS')
    this.getSharedDecks()
  },
  methods: {
    ...mapActions('sharedDecks', ['getSharedDecks'])
  }
}

</script>
