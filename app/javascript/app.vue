<template>
  <div class="flex min-h-screen flex-col">
    <VueNotification
      classes="vue-notification container"
      position="bottom center"
      width="100%"
    />
    <SiteHeader class="mb-6 md:mb-8" />
    <router-view class="flex-1 mb-8" />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: { SiteHeader, SiteFooter },
  metaInfo: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} – Spacecards` : 'Spacecards'
    },
    meta: [
      {
        name: 'description',
        content: 'Memorize everything with flashcards and spaced repetition. Learn languages, prepare for exams, improve yourself.'
      }
    ]
  }
}
</script>

<style scoped>
</style>
