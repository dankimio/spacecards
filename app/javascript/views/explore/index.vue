<template>
  <div class="container flex">
    <div class="hidden md:block md:w-1/3">
      <h2 class="text-2xl">
        Tags
      </h2>
      <div class="flex flex-wrap pr-2">
        <div
          class="px-2 bg-gray-500 text-xs mr-1 mb-1 rounded-lg text-white"
        >
          Tag
        </div>
      </div>
    </div>
    <div class="md:w-2/3">
      <h2 class="text-2xl">
        Popular
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SharedDeck
          v-for="deck in decks"
          :key="deck.id"
          :deck="deck"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SharedDeck from '@/components/shared_deck'

const decks = Array.from(Array(10).keys()).map(i => {
  return {
    id: i,
    category: 'Movies',
    name: `World capitals ${i + 1}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tags: ['Geography', 'Easy'],
    avatarUrl: 'https://www.fillmurray.com/200/200',
    userName: 'Bill M.',
    usersCount: 440,
    cardsCount: 270
  }
})

export default {
  components: { SharedDeck },
  data() {
    return {
      decks: decks
    }
  }
}

</script>
