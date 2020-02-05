<template>
  <div>
    <SectionHero />
    <SectionSpacedRepetition />
    <SectionHowTo />
    <SectionFeatures />
    <SectionArticles />
  </div>
</template>

<script>
import SectionHero from './SectionHero'
import SectionSpacedRepetition from './SectionSpacedRepetition'
import SectionHowTo from './SectionHowTo'
import SectionFeatures from './SectionFeatures'
import SectionArticles from './SectionArticles'

export default {
  components: {
    SectionHero,
    SectionSpacedRepetition,
    SectionFeatures,
    SectionArticles
  }
}
</script>

<style lang="postcss" scoped>

</style>
