<template>
  <div class="container flex">
    <div class="w-full md:w-2/3 mx-auto">
      <h1 class="text-3xl mb-2 md:mb-4">
        {{ userDeck.name }}

        <small>
          <router-link
            :to="{ name: 'editUserDeck', params: { id: userDeck.id } }"
            class="text-base ml-1"
          >
            Settings
          </router-link>
        </small>
      </h1>

      <p class="text-lg text-gray-700 mb-5 max-w-xl">
        {{ userDeck.description }}
      </p>

      <div class="bg-gray-100 px-5 py-4 rounded mb-6 flex">
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

      <router-link
        :to="{ name: 'studySession', params: { id: userDeck.id } }"
        class="button button-lg button-primary w-full uppercase tracking-wide mb-6"
      >
        Study
      </router-link>

      <hr class="mb-6 border-b-2 border-gray-200">

      <div
        class="button button-outlined button-lg
          w-full mb-5 uppercase tracking-wide text-gray-600 border-gray-400"
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

      <DeckCard
        v-for="userCard in userCards"
        :key="userCard.id"
        :card="userCard"
        :allow-editing="true"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import DeckCard from '@/components/DeckCard'

export default {
  components: { DeckCard },
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
    this.getUserDeck(this.id)
    this.getUserDeckUserCards(this.id)
  },
  methods: {
    ...mapActions('userDecks', ['getUserDeck']),
    ...mapActions('userCards', ['getUserDeckUserCards'])
  }
}
</script>
