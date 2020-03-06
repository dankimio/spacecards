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
        {{ deck.name }}
      </h1>

      <p class="text-lg text-gray-700 mb-5">
        {{ deck.description }}
      </p>

      <div class="flex justify-between text-lg flex mb-4">
        <div class="flex items-center mr-6">
          <img
            :src="'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'"
            alt="Avatar"
            class="w-6 h-6 mr-3 rounded-full"
          >

          <span class="text-gray-800">{{ 'Bill M.' }}</span>
        </div>

        <div class="flex">
          <span class="flex items-center text-gray-600 flex-shrink-0 mr-6">
            <inline-svg
              :src="require('@images/icon-albums.svg')"
              class="w-5 h-5 mr-1 fill-current"
            />
            12
          </span>
          <span class="flex items-center text-gray-600 flex-shrink-0">
            <inline-svg
              :src="require('@images/icon-bookmark.svg')"
              class="w-5 h-5 mr-1 fill-current"
            />
            {{ '42' }}
          </span>
        </div>
      </div>

      <hr class="mb-8 border-b-2 border-gray-200">

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
  metaInfo() {
    return {
      title: `${this.deck.name}`
    }
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
