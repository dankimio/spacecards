<template>
  <div class="container">
    <div
      v-for="deck in decks" v-bind:key="deck.name"
      class="flex justify-between mb-5 py-5 px-5 bg-gray-100 rounded duration-150 transform hover:-translate-y-1 hover:shadow-lg"
    >
      <div class="">
        <div class="text-lg mb-2">
          <router-link to="#">{{ deck.name }}</router-link>
        </div>
        <router-link to="#" class="text-sm text-gray-500 hover:text-gray-800">
          {{ deck.cards_count }} cards
        </router-link>
      </div>
      <div class="flex-shrink-0 text-right">
        <router-link to="#" class="inline-flex items-center mr-5 text-gray-600 hover:text-indigo-600">
          <inline-svg
            :src="require('@images/icon-play.svg')"
            class="inline-block w-4 h-4 mr-1 fill-current"
          />
          Study
        </router-link>

        <router-link to="#" class="inline-flex items-center mr-5 text-gray-600 hover:text-indigo-600">
          <inline-svg
            :src="require('@images/icon-list.svg')"
            class="inline-block w-4 h-4 mr-1 fill-current"
          />
          Browse
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
