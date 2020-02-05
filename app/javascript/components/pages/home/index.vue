<template>
  <div>
    <SectionHero />
    <SectionSpacedRepetition />
    <SectionHowTo />
    <SectionFeatures />
  </div>
</template>

<script>
import SectionHero from './SectionHero'
import SectionSpacedRepetition from './SectionSpacedRepetition'
import SectionHowTo from './SectionHowTo'
import SectionFeatures from './SectionFeatures'

export default {
  components: { SectionHero, SectionSpacedRepetition, SectionFeatures }
}
</script>

<style lang="postcss" scoped>

</style>
