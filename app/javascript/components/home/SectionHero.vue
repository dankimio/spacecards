<template>
  <div class="container md:pt-4">
    <img
      src="@images/home/home.png"
      alt="Hero"
      class="block mx-auto mb-8 md:mb-10 max-w-lg lg:max-w-xl w-full"
      width="1600"
      height="718"
    >

    <div class="flex flex-col items-center text-center mb-6">
      <h1 class="heading-1 mb-6 md:mb-8 text-3xl md:text-4xl lg:text-5xl max-w-lg">
        Memorize everything with flashcards
      </h1>

      <p class="mb-8 text-xl font-light leading-normal max-w-lg">
        Spacecards uses spaced repetition to help you memorize all kinds of information: words, exam questions, formulas, quotes, etc. Bring your own content—there’s no limit.
      </p>

      <div class="mb-6 flex-col md:flex-row">
        <router-link
          v-if="!isSignedIn"
          :to="{ name: 'signup' }"
          class="button button-primary button-lg w-full md:w-auto tracking-wide mb-4 md:mb-0 md:mr-2"
        >
          Start learning
        </router-link>

        <router-link
          v-if="isSignedIn"
          :to="{ name: 'userDecks' }"
          class="button button-outlined button-outlined-primary button-lg w-full md:w-auto tracking-wide"
        >
          My decks
        </router-link>
      </div>

      <p v-if="false" class="text-sm text-gray-800 flex items-center">
        <span class="mx-2">Sign in with</span>

        <router-link
          to="#"
          class="mx-3"
        >
          <img src="@images/icon-google.svg" alt="Sign in with Google">
        </router-link>
      </p>
    </div>

    <img
      src="@images/home/icon-down.svg"
      alt="Arrow down"
      class="block mx-auto mb-4"
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: { ...mapGetters('users', ['isSignedIn']) }
}
</script>
