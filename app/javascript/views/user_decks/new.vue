<template>
  <div class="container">
    <div class="md:max-w-xl">
      <h1 class="heading-2">
        New deck
      </h1>

      <form @submit.prevent="submit">
        <div class="field">
          <label for="email">Name</label>
          <input
            v-model="userDeck.name"
            type="text"
            class="form-control p-4 text-lg"
            placeholder="Name of your deck, e.g. World capitals"
            required
            autofocus
            :class="{ 'form-control--error': errors.has('name') }"
          >
          <small
            v-if="errors.has('name')"
            class="field-help field-help--error"
          >
            {{ errors.get('name') }}
          </small>
        </div>

        <div class="field">
          <label for="email">Description</label>
          <textarea
            v-model="userDeck.description"
            class="form-control p-4 text-lg"
            placeholder="Description (optional)"
            :class="{ 'form-control--error': errors.has('description') }"
          />
          <small
            v-if="errors.has('description')"
            class="field-help field-help--error"
          >
            {{ errors.get('description') }}
          </small>
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
import Errors from '@/lib/errors'

export default {
  data() {
    return {
      userDeck: {
        name: '',
        description: ''
      },
      errors: new Errors()
    }
  },
  methods: {
    submit() {
      this.createUserDeck(this.userDeck)
        .then(json => {
          this.$router.push({ name: 'userDeck', params: { id: json.id.toString() } })
        })
        .catch(error => this.errors.record(error.json))
    },
    ...mapActions('userDecks', ['createUserDeck'])
  }
}
</script>
