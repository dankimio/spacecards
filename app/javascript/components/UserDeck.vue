<template>
  <div
    class="flex flex-col justify-between mb-5 border border-gray-200 rounded duration-100 transform hover:shadow-lg"
  >
    <div class="py-4 px-5">
      <div class="text-lg md:text-xl">
        <router-link :to="{ name: 'userDeck', params: { id: userDeck.id.toString() } }">
          {{ userDeck.name }}
        </router-link>
      </div>
    </div>

    <hr class="border-gray-200">

    <div class="bg-gray-100 flex text-sm py-2 px-5">
      <router-link
        :to="{ name: 'studySession', params: { id: userDeck.id.toString() } }"
        class="flex items-center mr-5 text-gray-500 hover:text-indigo-600"
      >
        <inline-svg
          :src="require('@images/icon-play.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        Study
      </router-link>

      <router-link
        :to="{ name: 'userDeck', params: { id: userDeck.id.toString() } }"
        class="flex items-center mr-5 text-gray-500 hover:text-indigo-600"
      >
        <inline-svg
          :src="require('@images/icon-albums.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        Cards
      </router-link>

      <router-link
        :to="{ name: 'editUserDeck', params: { id: userDeck.id.toString() } }"
        class="flex items-center text-gray-500 hover:text-indigo-600"
      >
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
  props: {
    userDeck: {
      type: Object,
      required: true
    }
  }
}
</script>
