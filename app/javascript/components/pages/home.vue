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
            <p class="text-lg text-grey-darkest font-light leading-normal mb-6">Start by creating flashcards from your content. These can be words from a book you’re reading, questions for your college exam, lines from a script you’re rehearsing, etc.</p>

            <p class="text-lg text-grey-darkest font-light leading-normal mb-6">Spacecards will then plan your study sessions for each day, in a way that will help you memorize the information—by spreading out material with intervals that increase over time as you progress.</p>

            <p class="text-lg text-grey-darkest font-light leading-normal mb-6">Based on your performance, Spacecards will schedule future sessions. The better you perform, the longer the intervals will be.</p>
          </div>

          <div class="lg:w-3/5">
            <img src="@images/chart.svg" alt="Spaced repetition chart" class="block lg:ml-auto">
          </div>
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
