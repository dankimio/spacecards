<template>
  <div
    class="px-4 py-3
    border border-gray-200 rounded-md hover:shadow-lg
    transition transition-shadow duration-100"
  >
    <router-link
      class="block mb-1
      font-medium tracking-wide text-indigo-500 hover:text-indigo-800"
      :to="{ name: 'sharedDeck', params: { id: sharedDeck.id.toString() }}"
    >
      {{ sharedDeck.name }}
    </router-link>

    <p class="text-gray-700 text-sm block mb-3">
      {{ sharedDeck.description.slice(0, 100) }}
    </p>

    <div v-if="false" class="flex flex-wrap">
      <DeckTag
        v-for="tag in sharedDeck.tags"
        :key="tag"
        :name="tag"
      />
    </div>

    <div class="flex justify-between items-center">
      <div v-if="false" class="flex items-center">
        <img
          :src="sharedDeckData.avatarUrl"
          alt="Avatar"
          class="w-5 h-5 mr-2 rounded-full"
        >

        <span class="text-sm text-gray-800">
          Created by {{ sharedDeckData.userName }}
        </span>
      </div>

      <div class="flex">
        <router-link
          :to="{ name: 'sharedDeck', params: { id: sharedDeck.id.toString() }}"
          class="flex items-center text-sm text-gray-600 hover:text-indigo-600 flex-shrink-0 mr-2"
        >
          <inline-svg
            :src="require('@images/icon-albums.svg')"
            class="w-4 h-4 mr-1 fill-current"
          />
          {{ sharedDeck.sharedCardsCount }}
        </router-link>

        <button v-if="false" class="flex items-center text-sm text-gray-600 hover:text-red-400 flex-shrink-0 transition duration-200">
          <inline-svg
            :src="require('@images/icon-bookmark.svg')"
            class="w-4 h-4 mr-1 fill-current"
          />
          {{ sharedDeckData.usersCount }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DeckTag from '@/components/DeckTag'

export default {
  components: { DeckTag },
  props: {
    sharedDeck: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      sharedDeckData: {
        tags: ['Geography', 'Easy'],
        avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        userName: 'Bill M.',
        usersCount: 440
      }
    }
  }
}
</script>
