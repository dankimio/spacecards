<template>
  <div
    class="border px-4 py-3 rounded hover:shadow-lg transition transition-shadow duration-100"
  >
    <router-link class="text-indigo-500 hover:text-indigo-800 font-medium tracking-wide block mb-1" to="/">
      {{ deck.name }}
    </router-link>

    <p class="text-gray-700 leading-tight text-sm block mb-3">
      {{ deck.description }}
    </p>

    <div class="flex flex-wrap">
      <Tag
        v-for="tag in deck.tags"
        :key="tag"
        :name="tag"
      />
    </div>

    <div class="border-b border-gray-100 my-2" />

    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img
          :src="deck.avatarUrl"
          alt="Avatar"
          class="w-5 h-5 mr-2 rounded-full"
        >

        <span class="text-sm text-gray-800">{{ deck.userName }}</span>
      </div>

      <div class="flex">
        <router-link to="#" class="flex items-center text-sm text-gray-600 hover:text-indigo-600 flex-shrink-0 mr-2">
          <inline-svg
            :src="require('@images/icon-albums.svg')"
            class="w-4 h-4 mr-1 fill-current"
          />
          {{ deck.cardsCount }}
        </router-link>

        <button class="flex items-center text-sm text-gray-600 hover:text-red-400 flex-shrink-0 transition duration-200">
          <inline-svg
            :src="require('@images/icon-bookmark.svg')"
            class="w-4 h-4 mr-1 fill-current"
          />
          {{ deck.usersCount }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/tag'

export default {
  components: { Tag },
  props: ['deck']
}
</script>
