<template>
  <div class="flex min-h-screen flex-col">
    <VueNotification
      classes="vue-notification container"
      position="bottom center"
      width="100%"
    />
    <Header />
    <router-view class="flex-1 mb-8" />
    <SiteFooter />
  </div>
</template>

<script>
import Header from '@/components/Header'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: { Header, SiteFooter },
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
