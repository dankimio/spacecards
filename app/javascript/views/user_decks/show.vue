<template>
  <div class="container">
    <div v-if="$store.state.userDecks.isLoading" class="mb-6" style="width: 256px; height: 48px;">
      <ContentLoader
        :width="256"
        :height="48"
      >
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <rect x="0" y="0" rx="3" ry="3" width="256" height="48" />
      </ContentLoader>
    </div>
    <h1 v-else class="heading-2">
      {{ userDeck.name }}

      <small>
        <router-link
          v-if="userDeck.id"
          :to="{ name: 'editUserDeck', params: { id: userDeck.id.toString() } }"
          class="text-base ml-1"
        >
          Settings
        </router-link>
      </small>
    </h1>

    <div class="lg:grid grid-cols-3 gap-8">
      <div class="col-start-3 row-start-1">
        <router-link
          v-if="userDeck.id"
          :to="{ name: 'studySession', params: { id: userDeck.id.toString() } }"
          class="button button-lg button-primary w-full tracking-wide mb-6"
        >
          Study
        </router-link>

        <div class="bg-gray-100 px-5 py-4 rounded mb-4 flex">
          <div class="w-1/2">
            <p class="mb-1 text-gray-600 uppercase tracking-wide text-sm">
              Due cards
            </p>
            <span class="text-xl font-semibold text-gray-700">
              {{ userDeck.dueCardsCount }}
            </span>
          </div>
          <div class="w-1/2">
            <p class="mb-1 text-gray-600 uppercase tracking-wide text-sm">
              New cards
            </p>
            <span class="text-xl font-semibold text-gray-700">
              {{ userDeck.newCardsCount }}
            </span>
          </div>
        </div>

        <p class="text-lg text-gray-700 mb-5 max-w-xl">
          {{ userDeck.description }}
        </p>
      </div>

      <div class="col-span-2 col-start-1 row-start-1">
        <div
          class="button button-outlined button-lg
          w-full mb-6 tracking-wide text-gray-600 border-gray-400"
          @click="addingNewCard = !addingNewCard"
        >
          Add cards
        </div>

        <DeckCard
          v-if="addingNewCard"
          :user-deck-id="userDeck.id"
          :card="{ front: '', back: '' }"
          :allow-editing="true"
          :is-new="true"
          @create="addingNewCard = false"
          @cancel="addingNewCard = false"
        />

        <template v-if="$store.state.userCards.isLoading">
          <DeckCardLoader v-for="index in 12" :key="index" />
        </template>
        <template v-else>
          <DeckCard
            v-for="userCard in userCards"
            :key="userCard.id"
            :card="userCard"
            :allow-editing="true"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
  data() {
    return {
      addingNewCard: false
    }
  },
  metaInfo() {
    return {
      title: `${this.userDeck.name}`
    }
  },
  computed: {
    ...mapState('userDecks', ['userDeck']),
    ...mapState('userCards', ['userCards'])
  },
  created() {
    this.$store.commit('userDecks/RESET_USER_DECK')
    this.$store.commit('userCards/RESET_USER_CARDS')

    this.getUserDeck(this.id)
    this.getUserDeckUserCards(this.id)
  },
  methods: {
    ...mapActions('userDecks', ['getUserDeck']),
    ...mapActions('userCards', ['getUserDeckUserCards'])
  }
}
</script>
