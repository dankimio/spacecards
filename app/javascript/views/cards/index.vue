<template>
  <div class="container flex">
    <div class="hidden md:block w-auto md:w-1/3 md:pr-4 lg:pr-8">
      <h2 class="text-2xl">
        Search
      </h2>

      <div class="field">
        <input
          type="text"
          class="form-control"
          placeholder="Search…"
        >
      </div>
    </div>

    <div class="w-full md:w-2/3">
      <h1 class="text-2xl mb-2 md:mb-4">
        {{ deck.name }}
      </h1>

      <router-link v-if="false" to="#" class="button button-primary mb-6">
        Add cards
      </router-link>

      <Card v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Card from '@/components/card'

export default {
  components: { Card },
  props: { id: String },
  metaInfo: {
    title: `Cards – ${'Deck name'}`
  },
  computed: {
    ...mapState(['cards', 'deck'])
  },
  created() {
    this.getDeckCards(this.id)
    this.getDeck(this.id)
  },
  methods: {
    ...mapActions(['getDeck', 'getDeckCards'])
  }
}
</script>
