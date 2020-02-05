<template>
  <div>
    <Header />
    <SectionHero />
    <SectionSpacedRepetition />
    <SectionHowTo />
    <SectionFeatures />
    <SectionArticles />
    <SectionFaq />
  </div>
</template>

<script>
import Header from '@/components/header'
import SectionHero from './SectionHero'
import SectionSpacedRepetition from './SectionSpacedRepetition'
import SectionHowTo from './SectionHowTo'
import SectionFeatures from './SectionFeatures'
import SectionArticles from './SectionArticles'
import SectionFaq from './SectionFaq'

export default {
  components: {
    Header,
    SectionHero,
    SectionSpacedRepetition,
    SectionHowTo,
    SectionFeatures,
    SectionArticles,
    SectionFaq
  }
}
</script>

<style lang="postcss" scoped>

</style>
