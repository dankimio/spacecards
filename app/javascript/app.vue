<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from '@/views/layouts/DefaultLayout'

export default {
  components: { DefaultLayout },
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout'
    }
  },
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
