<template>
  <div class="container flex">
    <div v-if="false" class="hidden md:block w-auto md:w-1/3 md:pr-4 lg:pr-8">
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

    <div class="w-full md:w-2/3 mx-auto">
      <h1 class="text-3xl mb-2 md:mb-4">
        {{ userDeck.name }}
      </h1>

      <p class="text-lg text-gray-700 mb-5 max-w-xl">
        {{ userDeck.description }}
      </p>

      <hr class="mb-8 border-b-2 border-gray-200">

      <router-link v-if="false" to="#" class="button button-primary mb-6">
        Add cards
      </router-link>

      <!-- <Card v-for="userCard in userCards" :key="userCard.id" :card="card" /> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Card from '@/components/Card'

export default {
  components: { Card },
  props: { id: String },
  metaInfo() {
    return {
      title: `${this.userDeck.name}`
    }
  },
  computed: {
    ...mapState('userDecks', ['userDeck'])
    // ...mapState('userCards', ['userCards']),
  },
  created() {
    this.getUserDeck(this.id)
    // this.getUserDeckUserCards(this.id)
  },
  methods: {
    ...mapActions('userDecks', ['getUserDeck'])
    // ...mapActions('userCards', ['getUserDeckUserCards']),
  }
}
</script>
