<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <router-view class="flex-1 mb-8" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Header, Footer },
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
