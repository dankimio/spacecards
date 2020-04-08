<template>
  <div>
    <hr>
    <div class="container py-5">
      <h1 class="text-4xl text-gray-800 font-medium">
        New deck
      </h1>

      <form @submit.prevent="submit">
        <div class="field">
          <input
            v-model="userDeck.name"
            type="text"
            class="form-control p-4 text-lg"
            placeholder="Deck name, e.g. 'World capitals' or 'Months in French'"
            required
            autofocus
          >
        </div>

        <div class="field">
          <textarea
            v-model="userDeck.description"
            class="form-control p-4 text-lg"
            placeholder="Description (optional)"
          />
        </div>

        <input
          type="submit"
          value="Create"
          class="button button-lg button-primary"
        >
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      userDeck: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    submit() {
      this.createUserDeck(this.userDeck)
        .json(json => this.$router.push(`/user/decks/${json.id}`))
    },
    ...mapActions('userDecks', ['createUserDeck'])
  }
}
</script>
