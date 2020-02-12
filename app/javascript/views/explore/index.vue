<template>
  <div class="container flex">
    <div class="hidden md:block w-auto md:w-1/3">
      <h2 class="text-2xl">
        Tags
      </h2>
      <div class="flex flex-wrap pr-2 mb-2">
        <Tag
          v-for="tag in tags"
          :key="tag"
          :name="tag"
          class="mb-2"
        />
      </div>
      <button class="mb-8 text-sm text-indigo-500 hover:text-indigo-800">
        See all tags
      </button>
    </div>
    <div class="w-full md:w-2/3">
      <h2 class="text-2xl">
        Popular
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
import Tag from '@/components/tag'

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
  components: { SharedDeck, Tag },
  data() {
    return {
      decks: decks,
      tags: ['Languages', 'Easy', 'Programming', 'French', 'Art', 'History']
    }
  }
}

</script>
