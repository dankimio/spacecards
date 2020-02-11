<template>
  <div
    class="border px-4 py-3 rounded hover:shadow-lg transition transition-shadow duration-100"
  >
    <div class="flex flex-row items-center text-xs text-gray-500 mb-1">
      <inline-svg
        :src="require('@images/icon-film.svg')"
        class="w-4 h-4 mr-1 fill-current"
      />
      <span>{{ deck.category }}</span>
    </div>

    <router-link class="text-indigo-500 hover:text-indigo-800 font-medium tracking-wide block mb-1" to="/">
      {{ deck.name }}
    </router-link>

    <p class="text-gray-700 leading-tight text-sm block mb-3">
      {{ deck.description }}
    </p>

    <div class="flex flex-wrap">
      <router-link
        v-for="tag in deck.tags"
        :key="tag"
        to="#"
        class="px-2 bg-gray-500 text-xs mr-1 mb-1 rounded-lg text-white hover:bg-indigo-500 hover:text-white"
      >
        {{ tag }}
      </router-link>
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
      <button class="flex items-center text-sm text-gray-600 hover:text-red-400">
        <inline-svg
          :src="require('@images/icon-bookmark.svg')"
          class="w-4 h-4 mr-1 fill-current"
        />
        {{ deck.usersCount }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['deck']
}
</script>
