<template>
  <div
    class="flex flex-col py-4 md:py-6 border-b-2 border-gray-100"
  >
    <router-link
      :to="{ name: 'userDeck', params: { id: userDeck.id.toString() } }"
      class="text-lg md:text-xl mb-2 font-medium"
    >
      {{ userDeck.name }}
    </router-link>

    <div class="flex text-sm mb-1">
      <router-link
        :to="{ name: 'studySession', params: { id: userDeck.id.toString() } }"
        class="flex items-center mr-5 text-gray-500 hover:text-indigo-600"
      >
        <inline-svg
          :src="require('@images/icon-play.svg')"
          class="inline-block w-4 h-4 mr-2 fill-current"
        />
        Study
      </router-link>

      <router-link
        :to="{ name: 'userDeck', params: { id: userDeck.id.toString() } }"
        class="flex items-center mr-5 text-gray-500 hover:text-indigo-600"
      >
        <inline-svg
          :src="require('@images/icon-albums.svg')"
          class="inline-block w-4 h-4 mr-2 fill-current"
        />
        Cards
      </router-link>

      <router-link
        :to="{ name: 'editUserDeck', params: { id: userDeck.id.toString() } }"
        class="flex items-center text-gray-500 hover:text-indigo-600"
      >
        <inline-svg
          :src="require('@images/icon-settings.svg')"
          class="inline-block w-4 h-4 mr-2 fill-current"
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
