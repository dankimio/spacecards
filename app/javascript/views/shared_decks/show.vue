<template>
  <div class="container flex">
    <div v-if="false" class="hidden md:block w-auto md:w-1/3 md:pr-4 lg:pr-8">
      <h2 class="text-2xl">
        Search
      </h2>

      <div class="field">
        <input
          type="text"
          class="form-control"
          placeholder="Search…"
        >
      </div>
    </div>

    <div class="w-full md:w-2/3 mx-auto">
      <h1 class="text-3xl mb-2 md:mb-4">
        {{ sharedDeck.name }}
      </h1>

      <p class="text-lg text-gray-700 mb-5 max-w-xl">
        {{ sharedDeck.description }}
      </p>

      <router-link
        v-if="sharedDeck.userDeckId"
        :to="{ name: 'userDeck', params: { id: sharedDeck.userDeckId } }"
        class="button button-lg button-disabled mb-8 w-full md:w-auto"
      >
        ✓ Added to library
      </router-link>

      <button
        v-if="isLoggedIn && !sharedDeck.userDeckId"
        class="button button-lg button-outlined button-outlined-primary mb-8 w-full md:w-auto"
        @click.prevent="addToLibrary"
      >
        + Add to library
      </button>

      <div class="flex justify-between text-lg flex mb-4">
        <div class="flex items-center mr-6">
          <img
            v-if="false"
            :src="'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'"
            alt="Avatar"
            class="w-6 h-6 mr-3 rounded-full"
          >

          <span class="text-gray-800">Created by {{ 'Bill M.' }}</span>
        </div>

        <div class="flex">
          <span class="flex items-center text-gray-600 flex-shrink-0 mr-6">
            <inline-svg
              :src="require('@images/icon-albums.svg')"
              class="w-5 h-5 mr-1 fill-current"
            />
            12
          </span>
          <span class="flex items-center text-gray-600 flex-shrink-0">
            <inline-svg
              :src="require('@images/icon-bookmark.svg')"
              class="w-5 h-5 mr-1 fill-current"
            />
            {{ '42' }}
          </span>
        </div>
      </div>

      <hr class="mb-8 border-b-2 border-gray-200">

      <DeckCard v-for="card in sharedCards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import DeckCard from '@/components/DeckCard'

export default {
  components: { DeckCard },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  metaInfo() {
    return {
      title: `${this.sharedDeck.name}`
    }
  },
  computed: {
    ...mapState('sharedCards', ['sharedCards']),
    ...mapState('sharedDecks', ['sharedDeck']),
    ...mapGetters('users', ['isLoggedIn'])
  },
  created() {
    this.getSharedDeckCards(this.id)
    this.getSharedDeck(this.id)
  },
  methods: {
    addToLibrary() {
      this.createUserDeck({ shared_deck_id: this.id })
        .then(json => {
          this.$router.push(`/user/decks/${json.id}`)
          this.$notify({ title: `${json.name} has been added to your library` })
        })
    },
    ...mapActions('sharedCards', ['getSharedDeckCards']),
    ...mapActions('sharedDecks', ['getSharedDeck']),
    ...mapActions('userDecks', ['createUserDeck'])
  }
}
</script>
