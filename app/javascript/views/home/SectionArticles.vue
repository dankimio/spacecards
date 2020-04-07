<template>
  <div style="background-color: #fbfbfc">
    <div class="container py-12">
      <h2 class="heading-1 mb-8 text-center">
        Articles
      </h2>

      <p class="md:max-w-lg mx-auto text-center mb-12 text-lg font-light leading-normal">
        “We are not taught how to learn in school, we are taught how to pass tests. The spacing effect is a far more effective way to learn and retain information that works with our brain instead of against it.”
      </p>

      <div class="flex flex-col md:flex-row">
        <a
          href="https://qz.com/1211561/how-to-learn-a-language-use-spaced-repetition/"
          target="_blank"
          class="article md:flex-1 flex flex-col
          md:mx-4 mb-8 md:mb-0
          border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg"
        >
          <div class="flex-grow flex flex-col p-5 bg-white">
            <p class="mb-2 text-sm">
              <span class="text-gray-600 text-sm">Feb 23, 2018 — </span>
              <span class="text-gray-700 text-sm font-medium">Quartz</span>
            </p>

            <h3 class="font-medium text-xl mb-3">The scientific, efficient way to learn languages: “spaced repetition”</h3>

            <p class="text-gray-700 font-light leading-normal">Learning a language can be frustrating. Progress often feels slow. Part of that is because there is a lot to learn. But part of it is also that language education often does not utilize the best methods out there.</p>
          </div>
        </a>
        <a
          href="https://www.theguardian.com/education/2016/jan/23/spaced-repetition-a-hack-to-make-your-brain-store-information"
          target="_blank"
          class="article md:flex-1 flex flex-col
          md:mx-4 mb-8 md:mb-0
          border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg"
        >
          <div class="flex-grow flex flex-col p-5 bg-white">
            <p class="mb-2 text-sm">
              <span class="text-gray-600">Jan 23, 2016 — </span>
              <span class="text-gray-700 font-medium">The Guardian</span>
            </p>

            <h3 class="font-medium text-xl mb-3">Spaced repetition: a hack to make your brain store information </h3>

            <p class="text-gray-700 font-light leading-normal">The way we think about health has been revolutionised by our growing evidence of how the body works. Yet the way most of us approach learning remains the same as it has for centuries.</p>
          </div>
        </a>
        <a
          href="https://fs.blog/2018/12/spacing-effect/"
          target="_blank"
          class="article md:flex-1 flex flex-col
          md:mx-4 mb-8 md:mb-0
          border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg"
        >
          <div class="flex-grow flex flex-col p-5 bg-white">
            <p class="mb-2 text-sm">
              <span class="text-gray-600 text-sm">Dec 18, 2018 — </span>
              <span class="text-gray-700 text-sm font-medium">Farnam Street</span>
            </p>

            <h3 class="font-medium text-xl mb-3">The Spacing Effect: How to Improve Learning and Maximize Retention</h3>

            <p class="text-gray-700 font-light leading-normal">We are not taught how to learn in school, we are taught how to pass tests. The spacing effect is a far more effective way to learn and retain information that works with our brain instead of against it.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article {
  @apply transition-all duration-200;

  &:hover {
    @apply transition-all duration-200;
  }
}
</style>
