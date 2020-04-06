<template>
  <div class="flex flex-col items-center bg-gray-100 px-4 py-6 md:p-6">
    <div class="text-center mb-4 md:mb-6">
      <h2 class="text-2xl md:text-3xl font-medium mb-2">
        You're all done!
      </h2>

      <p class="md:text-lg text-gray-700 max-w-md mb-2">
        You have reached your daily review limit. Come back tomorrow to review more cards.
      </p>
    </div>

    <div class="flex flex-col md:flex-row md:text-lg text-gray-900 w-full mb-6">
      <div
        class="flex-1 px-5 py-4
        flex justify-between items-center
        bg-gray-200 rounded-lg"
      >
        <span>Cards studied</span>
        <span class="text-xl font-semibold text-gray-800">14</span>
      </div>
      <div class="md:w-6 my-2 md:my-0" />
      <div
        class="flex-1 px-5 py-4
        flex justify-between items-center
        bg-gray-200 rounded-lg"
      >
        <span>Deck progress</span>
        <span class="text-xl font-semibold text-gray-800">55%</span>
      </div>
    </div>

    <router-link to="/user/decks" class="button button-lg button-primary w-full uppercase tracking-wide">
      Return to decks
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>
