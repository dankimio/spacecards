<template>
  <div class="container">
    <h1 class="heading-2 mb-2 md:mb-4 text-center">
      World capitals <span class="font-light mx-2">→</span> Cards
    </h1>

    <router-link to="#" class="button button-primary mb-6">
      Add cards
    </router-link>

    <Card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import Card from '@/components/card'

export default {
  components: { Card },
  data() {
    return {
      cards: [
        { id: 1, front: 'France', back: 'Paris' },
        { id: 2, front: 'Germany', back: 'Berlin' },
        { id: 3, front: 'Italy', back: 'Rome' },
        { id: 4, front: 'Spain', back: 'Madrid' }
      ]
    }
  }
}
</script>
