<template>
  <div class="container py-12">
    <h1 class="heading-1 text-center mb-10">How to use Spacecards</h1>

    <div class="max-w-xs mx-auto lg:max-w-none lg:mb-10 flex flex-col lg:flex-row justify-between">
      <div class="lg:flex-1 mb-12 lg:mb-0 lg:mr-3">
        <h3>
          <span class="pill mr-2">1</span>
          Bring your own content
        </h3>

        <div class="flex lg:mb-6 lg:justify-between">
          <img src="@images/camera-film.svg" alt="" class="mr-6 lg:mr-0">
          <img src="@images/photography.svg" alt="" class="mr-6 lg:mr-0">
          <img src="@images/console.svg" alt="" class="mr-6 lg:mr-0">
          <img src="@images/dj-mixer.svg" alt="" class="mr-6 lg:mr-0">
        </div>
      </div>

      <img src="@images/icon-step-arrow.svg" alt="Arrow (step)" class="arrow text-gray-400 lg:mx-8 self-center hidden lg:block">

      <div class="lg:flex-1 mb-12 lg:mb-0 lg:mr-3">
        <h3>
          <span class="pill mr-2">2</span>
          Create cards
        </h3>

        <div class="mb-4 lg:mb-5">
          <div class="mb-3 text-gray-700 font-medium">
            <span class="word">un marché</span>
            <span class="text-sm">→</span>
            <span class="word mr-1">market</span>
            <span class="text-gray-500">/maʁ.ʃe/</span>
          </div>
          <div class="mb-3 text-gray-700 font-medium">
            <span class="word">une croissance</span>
            <span class="text-sm">→</span>
            <span class="word mr-1">growth</span>
            <span class="text-gray-500">/kʁwa.sɑ̃s/</span>
          </div>
          <div class="mb-3 text-gray-700 font-medium">
            <span class="word">une mère</span>
            <span class="text-sm">→</span>
            <span class="word mr-1">mother</span>
            <span class="text-gray-500">/mɛʁ/</span>
          </div>
        </div>
      </div>

      <img src="@images/icon-step-arrow.svg" alt="Arrow (step)" class="arrow text-gray-400 lg:mx-8 self-center hidden lg:block">

      <div class="lg:flex-1 mb-12 lg:mb-0 lg:mr-3">
        <h3>
          <span class="pill mr-2">3</span>
          Practice daily
        </h3>

        <img src="@images/step-03.png" alt="Step 3" class="block w-full max-w-xs">
      </div>
    </div>

    <div class="border-b-2 border-gray-100"></div>
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
