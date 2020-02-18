<template>
  <div class="container">
    <h1 class="heading-2 mb-2 md:mb-4 text-center">
      {{ deck.name }} <span class="font-light mx-2">→</span> Cards
    </h1>

    <router-link to="#" class="button button-primary mb-6">
      Add cards
    </router-link>

    <Card v-for="card in deck.cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import Card from '@/components/card'

export default {
  components: { Card },
  props: { id: String },
  metaInfo: {
    title: `Cards – ${'Deck name'}`
  },
  computed: {
    deck() {
      return this.$store.getters.getDeckById(this.id)
    }
  }
}
</script>
