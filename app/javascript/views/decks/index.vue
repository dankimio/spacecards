<template>
  <div class="max-w-xl mx-auto">
    <h1 class="heading-2 mb-8 text-center">
      Decks

      <small>
        <router-link to="#" class="text-base ml-1">New deck</router-link>
      </small>
    </h1>

    <Deck v-for="deck in decks" v-bind:key="deck.name" v-bind:deck="deck" />
  </div>
</template>

<script>
import Deck from '@/components/deck'

export default {
  components: { Deck },
  data() {
    return {
      decks: [
        { name: 'World capitals', cards_count: 169 },
        { name: 'U.S. state capitals', cards_count: 50 }
      ]
    }
  }
}
</script>
