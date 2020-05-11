<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader class="mb-4 md:mb-6" />
    <div class="flex-1 mb-8">
      <router-view />
      <VueNotification
        classes="vue-notification container"
        position="bottom center"
        width="100%"
      />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: { TheHeader, TheFooter },
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
