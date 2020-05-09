<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader class="mb-4 md:mb-6" />
    <router-view class="flex-1 mb-8" />
    <SiteFooter />
    <VueNotification
      classes="vue-notification container"
      position="bottom center"
      width="100%"
    />
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
