<template>
  <div class="container flex flex-col mx-auto max-w-4xl px-6 mb-64">
    <Card class="mb-4" />

    <div class="flex flex-col sm:flex-col md:flex-row justify-between items-center mb-4">
      <AnswerButton answer="bad" />
      <AnswerButton answer="okay" />
      <AnswerButton answer="good" />
      <AnswerButton answer="excellent" />
    </div>
  </div>
</template>

<script>
import Card from './card'
import AnswerButton from '@/components/answer_button'

export default {
  components: { Card, AnswerButton }
}
</script>
