<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <router-view class="flex-1" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: { Header, Footer },
  metaInfo: {
    title: 'Spacecards',
    titleTemplate: '%s – Spacecards',
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
