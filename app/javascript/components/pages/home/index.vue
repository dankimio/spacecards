<template>
  <div>
    <SectionHero />
    <SectionSpacedRepetition />
    <SectionHowTo />
    <SectionFeatures />
    <SectionArticles />
    <SectionFaq />
  </div>
</template>

<script>
import SectionHero from './SectionHero'
import SectionSpacedRepetition from './SectionSpacedRepetition'
import SectionHowTo from './SectionHowTo'
import SectionFeatures from './SectionFeatures'
import SectionArticles from './SectionArticles'
import SectionFaq from './SectionFaq'

export default {
  components: {
    SectionHero,
    SectionSpacedRepetition,
    SectionFeatures,
    SectionArticles,
    SectionFaq
  }
}
</script>

<style lang="postcss" scoped>

</style>
