<template>
  <div
    class="flex flex-col md:flex-row justify-between mb-5 py-5 px-5 bg-gray-100 rounded duration-150 transform hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="mb-2 md:mb-0">
      <div class="text-lg md:mb-2">
        <router-link to="/study-session">
          {{ deck.name }}
        </router-link>
      </div>
      <router-link to="#" class="text-sm text-gray-500 hover:text-gray-800">
        {{ deck.cardsCount }} cards
      </router-link>
    </div>

    <div class="flex-shrink-0 md:text-right">
      <router-link to="/study-session" class="inline-flex items-center mr-5 text-gray-500 hover:text-indigo-600">
        <inline-svg
          :src="require('@images/icon-play.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        Study
      </router-link>

      <router-link to="/cards" class="inline-flex items-center mr-5 text-gray-500 hover:text-indigo-600">
        <inline-svg
          :src="require('@images/icon-list.svg')"
          class="inline-block w-4 h-4 mr-1 stroke-current"
        />
        Browse
      </router-link>

      <router-link to="/decks/1/edit" class="inline-flex items-center text-gray-500 hover:text-indigo-600">
        <inline-svg
          :src="require('@images/icon-settings.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        Settings
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['deck']
}
</script>
