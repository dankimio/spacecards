<template>
  <div class="container py-12">
    <h1 class="heading-1 text-center mb-8">
      How to use Spacecards
    </h1>

    <div class="max-w-xs mx-auto lg:max-w-none lg:mb-10 flex flex-col lg:flex-row justify-between">
      <div class="lg:flex-1 mb-12 lg:mb-0 lg:mr-3">
        <h3>
          <span class="pill mr-2">1</span>
          Bring your own content
        </h3>

        <div class="flex lg:mb-6 lg:justify-between">
          <img src="@images/home/camera-film.svg" alt="" class="mr-6 lg:mr-0">
          <img src="@images/home/photography.svg" alt="" class="mr-6 lg:mr-0">
          <img src="@images/home/console.svg" alt="" class="mr-6 lg:mr-0">
          <img src="@images/home/dj-mixer.svg" alt="" class="mr-6 lg:mr-0">
        </div>
      </div>

      <inline-svg
        :src="require('@images/home/icon-step-arrow.svg')"
        class="text-gray-400 fill-current lg:mx-8 self-center hidden lg:block"
      />

      <div class="lg:flex-1 mb-12 lg:mb-0 lg:mr-3">
        <h3>
          <span class="pill mr-2">2</span>
          Create cards
        </h3>

        <div class="mb-4 lg:mb-5">
          <div class="mb-3 text-gray-700 font-medium">
            <span>une croissance</span>
            <span class="text-gray-600 text-sm font-normal">→</span>
            <span>growth</span>
            <span class="text-gray-500">/kʁwa.sɑ̃s/</span>
          </div>
          <div class="mb-3 text-gray-700 font-medium">
            <span>World War I dates</span>
            <span class="text-gray-600 text-sm font-normal">→</span>
            <span>November 11,</span>
            <span class="text-gray-500">1918</span>
          </div>
          <div class="mb-3 text-gray-700 font-medium">
            <span>Standard gravity</span>
            <span class="text-gray-600 text-sm font-normal">→</span>
            <span>9.81</span>
            <span class="text-gray-500">m/s²</span>
          </div>
        </div>
      </div>

      <inline-svg
        :src="require('@images/home/icon-step-arrow.svg')"
        class="text-gray-400 fill-current lg:mx-8 self-center hidden lg:block"
      />

      <div class="lg:flex-1 mb-12 lg:mb-0 lg:mr-3">
        <h3>
          <span class="pill mr-2">3</span>
          Practice daily
        </h3>

        <img src="@images/home/step-03.png" alt="Step 3" class="block w-full max-w-xs">
      </div>
    </div>

    <div class="border-b-2 border-gray-100" />
  </div>
</template>

<style scoped>
h3 {
  @apply font-medium text-lg text-indigo-400 uppercase mb-6;
}

@screen lg {
  h3 {
    @apply mb-8;
  }
}
</style>
