<template>
  <div class="container flex">
    <div class="hidden md:block md:w-1/3">
      <h2 class="text-2xl">
        Tags
      </h2>
      <div class="flex flex-wrap pr-2">
        <div v-for="tag in new Array(10)" :key="tag" class="px-2 bg-gray-500 text-xs mr-1 mb-1 rounded-lg text-white">
          Tag {{ tag }}
        </div>
      </div>
    </div>
    <div class="md:w-2/3">
      <h2 class="text-2xl">
        Popular
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="tag in new Array(10)"
          :key="tag"
          class="border px-4 py-3 rounded hover:shadow-lg transition transition-shadow duration-100"
        >
          <div class="flex flex-row items-center text-xs text-gray-500 mb-1">
            <inline-svg
              :src="require('@images/icon-film.svg')"
              class="w-4 h-4 mr-1 fill-current"
            />
            <span>Movie</span>
          </div>

          <router-link class="text-indigo-500 hover:text-indigo-800 font-medium tracking-wide block mb-1" to="/">
            Top 3000 most used French words
          </router-link>

          <p class="text-gray-700 leading-tight text-sm block mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div class="flex flex-wrap">
            <router-link
              v-for="tag in new Array(3)"
              :key="tag"
              to="#"
              class="px-2 bg-gray-500 text-xs mr-1 mb-1 rounded-lg text-white"
            >
              Tag {{ tag }}
            </router-link>
          </div>

          <div class="border-b border-gray-100 my-2" />

          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img
                src="https://www.fillmurray.com/200/200"
                alt="Avatar"
                class="w-5 h-5 mr-2 rounded-full"
              >

              <span class="text-sm text-gray-800">Bill Murray</span>
            </div>
            <button class="flex items-center text-sm text-gray-600 hover:text-red-400">
              <inline-svg
                :src="require('@images/icon-bookmark.svg')"
                class="w-4 h-4 mr-1 fill-current"
              />
              440
            </button>
          </div>
        </div>
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
