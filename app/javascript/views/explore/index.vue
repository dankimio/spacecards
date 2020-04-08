<template>
  <div class="container flex">
    <div v-if="false" class="hidden md:block w-auto md:w-1/3 md:pr-4 lg:pr-8">
      <div class="mb-8">
        <h2 class="text-2xl">
          Tags
        </h2>
        <div class="flex flex-wrap mb-2">
          <DeckTag
            v-for="tag in tags"
            :key="tag"
            :name="tag"
            class="mb-2"
          />
        </div>
        <router-link to="#" class="text-sm text-indigo-500 hover:text-indigo-800">
          See all tags
        </router-link>
      </div>

      <div>
        <h2 class="text-2xl">
          Content language
        </h2>

        <div class="field">
          <input
            type="text"
            class="form-control"
            placeholder="Filter by content language…"
          >
        </div>

        <ul>
          <li class="mb-2">
            <a href="#" class="text-gray-600">Any</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600">English</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600">Spanish</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600">French</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600">Chinese</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600">German</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600">Arabic</a>
          </li>
          <li class="mb-2">
            <a href="#" class="text-gray-600">Russian</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full">
      <h2 class="text-2xl">
        Popular
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SharedDeck
          v-for="sharedDeck in sharedDecks"
          :key="sharedDeck.id"
          :shared-deck="sharedDeck"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SharedDeck from '@/components/SharedDeck'
import DeckTag from '@/components/DeckTag'

export default {
  components: { SharedDeck, DeckTag },
  metaInfo: {
    title: 'Explore sharedDecks'
  },
  data() {
    return {
      tags: ['languages', 'easy', '🇬🇧 english', '🇫🇷 french', 'art', 'history', '🇩🇪 german', 'math', 'programming', 'biology', '🇷🇺 russian', 'philosophy', 'sat']
    }
  },
  computed: {
    ...mapState('sharedDecks', ['sharedDecks'])
  },
  created() {
    this.getSharedDecks()
  },
  methods: {
    ...mapActions('sharedDecks', ['getSharedDecks'])
  }
}

</script>
