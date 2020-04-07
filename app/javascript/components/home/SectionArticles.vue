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
        <HomeArticle
          url="https://qz.com/1211561/how-to-learn-a-language-use-spaced-repetition/"
          date-published="Feb 23, 2018"
          publisher="Quartz"
          title="The scientific, efficient way to learn languages: “spaced repetition”"
          excerpt="Learning a language can be frustrating. Progress often feels slow. Part of that is because there is a lot to learn. But part of it is also that language education often does not utilize the best methods out there."
        />

        <HomeArticle
          url="https://www.theguardian.com/education/2016/jan/23/spaced-repetition-a-hack-to-make-your-brain-store-information"
          date-published="Jan 23, 2016"
          publisher="The Guardian"
          title="Spaced repetition: a hack to make your brain store information"
          excerpt="The way we think about health has been revolutionised by our growing evidence of how the body works. Yet the way most of us approach learning remains the same as it has for centuries."
        />

        <HomeArticle
          url="https://fs.blog/2018/12/spacing-effect/"
          date-published="Dec 18, 2018"
          publisher="Farnam Street"
          title="The Spacing Effect: How to Improve Learning and Maximize Retention"
          excerpt="We are not taught how to learn in school, we are taught how to pass tests. The spacing effect is a far more effective way to learn and retain information that works with our brain instead of against it."
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeArticle from './HomeArticle'

export default {
  components: { HomeArticle }
}
</script>

<style scoped>
.article {
  @apply transition-all duration-200;

  &:hover {
    @apply transition-all duration-200;
  }
}
</style>
