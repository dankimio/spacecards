<template>
  <div class="container flex flex-col mx-auto max-w-4xl px-6 mb-64">
    <Card />
    <CardButtons />
  </div>
</template>

<script>
import CardButtons from './card_buttons'
import Card from './card'

export default {
  components: { Card, CardButtons }
}
</script>
