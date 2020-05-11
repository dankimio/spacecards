<template>
  <div>
    <router-link
      class="block text-xl font-medium
      text-indigo-600 hover:text-indigo-800 truncate"
      :to="{ name: 'sharedDeck', params: { id: sharedDeck.id.toString() }}"
    >
      {{ sharedDeck.name }}
    </router-link>

    <div class="flex justify-between items-center mb-3">
      <div class="flex items-center">
        <img
          v-if="false"
          :src="sharedDeckData.avatarUrl"
          alt="Avatar"
          class="w-5 h-5 mr-2 rounded-full"
        >

        <span class="text-sm">

          <span class="text-gray-700">by</span>
          <span class="text-gray-800">Spacecards</span>
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

        <button class="flex items-center text-sm text-gray-600 hover:text-red-400 flex-shrink-0 transition duration-200">
          <inline-svg
            :src="require('@images/icon-bookmark.svg')"
            class="w-4 h-4 mr-1 fill-current"
          />
          {{ sharedDeckData.usersCount }}
        </button>
      </div>
    </div>

    <div class="flex flex-wrap mb-2">
      <DeckTag
        v-for="tag in sharedDeckData.tags"
        :key="tag"
        :name="tag"
      />
    </div>

    <p class="text-gray-700 text block mb-2">
      {{ sharedDeck.description.slice(0, 100) }}
    </p>
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
        tags: ['official', 'languages'],
        avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        usersCount: 440
      }
    }
  }
}
</script>
