<template>
  <div>
    <div class="container">
      <img src="@images/home.svg" alt="Hero" class="block mx-auto mb-8 md:mb-10 max-w-md w-full">

      <div class="flex flex-col items-center text-center mb-6">
        <h1 class="mb-8 md:text-4xl lg:text-5xl max-w-md">Memorize everything with flashcards</h1>

        <p class="mb-8 text-xl font-light leading-normal max-w-md">Spacecards uses spaced repetition to help you memorize all kinds of information: words, exam questions, formulas, quotes, etc. Bring your own content—there’s no limit.</p>

        <router-link to="/" class="btn btn-primary btn-lg tracking-wide mb-8">
          Start learning
        </router-link>

        <p class="text-sm text-grey-darkest flex items-center">
          <span class="mx-2">Sign in with</span>

          <router-link to="/" class="mx-3">
            <img src="@images/icon-google.svg" alt="Sign in with Google">
          </router-link>
        </p>
      </div>
    </div>

    <div class="py-12" style="background-color: #fbfbfc">
      <div class="container">
        <h2 class="heading-1 text-center" style="margin-bottom: 2rem;">How it works</h2>

        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-2/5 mb-6 lg:mb-0">
            <p class="text-lg text-grey-darkest font-light leading-normal mb-6">
              Start by creating flashcards from your content. These can be words from a book you’re reading, questions for your college exam, lines from a script you’re rehearsing, etc.
            </p>

            <p class="text-lg text-grey-darkest font-light leading-normal mb-6">
              Spacecards will then plan your study sessions for each day, in a way that will help you memorize the information—by spreading out material with intervals that increase over time as you progress.
            </p>

            <p class="text-lg text-grey-darkest font-light leading-normal mb-6">
              Based on your performance, Spacecards will schedule future sessions. The better you perform, the longer the intervals will be.
            </p>
          </div>

          <div class="lg:w-3/5">
            <img src="@images/chart.svg" alt="Spaced repetition chart" class="block lg:ml-auto">
          </div>
        </div>
      </div>
    </div>

    <div id="how-to" class="container py-12">
      <h1 class="heading-1 text-center" style="margin-bottom: 2.5rem;">How to use Spacecards</h1>

      <div class="lg:mb-10 flex flex-col lg:flex-row justify-between">
        <div class="flex-1 mb-12 lg:mb-0 lg:mr-3">
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

        <img src="@images/icon-step-arrow.svg" alt="Arrow (step)" class="'lg:mx-8 self-center hidden lg:block">

        <div class="flex-1 mb-12 lg:mb-0 lg:mr-3">
          <h3>
            <span class="pill mr-2">2</span>
            Create cards
          </h3>

          <div class="mb-4 lg:mb-5">
            <div class="mb-3 text-grey-darker font-medium">
              <span class="word">un marché</span>
              <span class="text-sm">→</span>
              <span class="word mr-1">market</span>
              <span class="text-grey">/maʁ.ʃe/</span>
            </div>
            <div class="mb-3 text-grey-darker font-medium">
              <span class="word">une croissance</span>
              <span class="text-sm">→</span>
              <span class="word mr-1">growth</span>
              <span class="text-grey">/kʁwa.sɑ̃s/</span>
            </div>
            <div class="mb-3 text-grey-darker font-medium">
              <span class="word">une mère</span>
              <span class="text-sm">→</span>
              <span class="word mr-1">mother</span>
              <span class="text-grey">/mɛʁ/</span>
            </div>
          </div>
        </div>

        <img src="@images/icon-step-arrow.svg" alt="Arrow (step)" class="'lg:mx-8 self-center hidden lg:block">

        <div class="flex-1 mb-12 lg:mb-0 lg:mr-3">
          <h3>
            <span class="pill mr-2">3</span>
            Practice daily
          </h3>

          <img src="@images/step-03.png" alt="Step 3" class="block w-full max-w-xs">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>

</style>
