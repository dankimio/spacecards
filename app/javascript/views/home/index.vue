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
import SectionHero from '@/components/home/SectionHero'
import SectionSpacedRepetition from '@/components/home/SectionSpacedRepetition'
import SectionHowTo from '@/components/home/SectionHowTo'
import SectionFeatures from '@/components/home/SectionFeatures'
import SectionArticles from '@/components/home/SectionArticles'
import SectionFaq from '@/components/home/SectionFaq'

export default {
  metaInfo: {
    title: ''
  },
  components: {
    SectionHero,
    SectionSpacedRepetition,
    SectionHowTo,
    SectionFeatures,
    SectionArticles,
    SectionFaq
  }
}
</script>
