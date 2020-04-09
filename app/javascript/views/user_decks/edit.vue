<template>
  <div class="container md:max-w-lg md:mx-auto">
    <h1 class="text-3xl mb-4">
      <span class="font-bold">{{ userDeck.name }}</span>
      <span class="mx-3 font-light">→</span>
      <span class="font-light">Settings</span>
    </h1>

    <form action="#" @submit.prevent="submit">
      <h2 class="text-xl mb-2">
        Deck
      </h2>

      <div class="field">
        <label for="name">Name</label>
        <input
          v-model="userDeck.name"
          type="text"
          required
          placeholder="Name"
          class="form-control"
        >
      </div>

      <h2 class="text-xl mb-2 mt-8">
        Review
      </h2>

      <div class="field">
        <label for="reviews_per_day">Reviews per pday</label>
        <input
          v-model="userDeck.reviewsPerDay"
          type="text"
          min="0"
          placeholder="Reviews per day"
          class="form-control"
        >
      </div>

      <div class="field">
        <label for="reviews_per_day">New cards per pday</label>
        <input
          v-model="userDeck.newCardsPerDay"
          type="text"
          min="0"
          placeholder="New cards per day"
          class="form-control"
        >
      </div>

      <div class="my-8">
        <input
          type="submit"
          value="Save"
          class="button button-primary button-lg w-full"
        >
      </div>
    </form>

    <h2 class="text-xl mb-2">
      Danger zone
    </h2>

    <p class="text-gray-800 mb-4">
      You will lose all your content and progress. This action is irreversible.
    </p>

    <button class="button button-danger" @click.prevent="destroy">
      <inline-svg
        :src="require('@images/icon-trash.svg')"
        class="inline-block w-4 h-4 mr-1 fill-current"
      />
      Delete
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('userDecks', ['userDeck'])
  },
  created() {
    this.getUserDeck(this.id)
  },
  methods: {
    ...mapActions(
      'userDecks',
      ['getUserDeck', 'updateUserDeck', 'deleteUserDeck']
    ),
    submit() {
      this.updateUserDeck(this.userDeck)
        .then(() => {
          this.$notify({ title: 'Deck was updated successfully' })
        })
    },
    destroy() {
      if (confirm('Are you sure?')) {
        this.deleteUserDeck(this.userDeck.id)
          .then(() => {
            this.$notify({ title: 'Deck was deleted successfully' })
            this.$router.push('/user/decks')
          })
      }
    }
  }
}
</script>
