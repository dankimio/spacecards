<template>
  <div class="container">
    <div v-if="$store.state.sharedDecks.isLoading" class="mb-6" style="width: 256px; height: 48px;">
      <ContentLoader
        :width="256"
        :height="48"
      >
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <rect x="0" y="0" rx="3" ry="3" width="256" height="48" />
      </ContentLoader>
    </div>
    <h1 v-else class="heading-2">
      {{ sharedDeck.name }}
    </h1>

    <div class="lg:grid grid-cols-3 gap-8">
      <div class="col-start-3 row-start-1">
        <router-link
          v-if="sharedDeck.userDeckId"
          :to="{ name: 'userDeck', params: { id: sharedDeck.userDeckId } }"
          class="button button-lg button-disabled mb-6 w-full"
        >
          ✓ Added to library
        </router-link>

        <button
          v-if="isSignedIn && !sharedDeck.userDeckId"
          class="button button-lg button-outlined button-outlined-primary mb-6 w-full"
          @click.prevent="addToLibrary"
        >
          + Add to library
        </button>

        <p class="text-lg text-gray-700 mb-5 max-w-xl">
          {{ sharedDeck.description }}
        </p>

        <div class="flex justify-between text-lg flex mb-4">
          <div
            v-if="false"
            class="flex items-center mr-6"
          >
            <img
              v-if="false"
              :src="'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'"
              alt="Avatar"
              class="w-6 h-6 mr-3 rounded-full"
            >

            <span class="text-gray-800">Created by {{ 'Bill M.' }}</span>
          </div>

          <div class="flex mb-2">
            <span class="flex items-center text-gray-600 flex-shrink-0">
              <inline-svg
                :src="require('@images/icon-albums.svg')"
                class="w-5 h-5 mr-1 fill-current"
              />
              12
            </span>
            <span
              v-if="false"
              class="flex items-center text-gray-600 flex-shrink-0 ml-6"
            >
              <inline-svg
                :src="require('@images/icon-bookmark.svg')"
                class="w-5 h-5 mr-1 fill-current"
              />
              {{ '42' }}
            </span>
          </div>
        </div>
        <hr class="lg:hidden mb-8 border-b-2 border-gray-200">
      </div>

      <div class="col-span-2 col-start-1 row-start-1">
        <template v-if="$store.state.sharedCards.isLoading">
          <DeckCardLoader v-for="index in 12" :key="index" />
        </template>
        <template v-else>
          <DeckCard v-for="card in sharedCards" :key="card.id" :card="card" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { ContentLoader } from 'vue-content-loader'

import DeckCard from '@/components/DeckCard'
import DeckCardLoader from '@/components/DeckCardLoader'

export default {
  components: { ContentLoader, DeckCard, DeckCardLoader },
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
    ...mapGetters('users', ['isSignedIn'])
  },
  created() {
    this.$store.commit('sharedDecks/RESET_SHARED_DECK')
    this.$store.commit('sharedCards/RESET_SHARED_CARDS')

    this.getSharedDeckCards(this.id)
    this.getSharedDeck(this.id)
  },
  methods: {
    addToLibrary() {
      this.createUserDeck({ shared_deck_id: this.id })
        .then(json => {
          this.$router.push({ name: 'userDeck', params: { id: json.id.toString() } })
          this.$notify({ title: `${json.name} has been added to your library` })
        })
        .catch(() => this.$notify({ title: 'Something went wrong' }))
    },
    ...mapActions('sharedCards', ['getSharedDeckCards']),
    ...mapActions('sharedDecks', ['getSharedDeck']),
    ...mapActions('userDecks', ['createUserDeck'])
  }
}
</script>
