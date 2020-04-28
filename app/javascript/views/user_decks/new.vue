<template>
  <div>
    <div class="container py-5">
      <h1 class="heading-2">
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
        .then(json => {
          this.$router.push({ name: 'userDeck', params: { id: json.id.toString() } })
        })
    },
    ...mapActions('userDecks', ['createUserDeck'])
  }
}
</script>
