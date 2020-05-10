<template>
  <div class="container mb-8 md:my-8 md:max-w-sm mx-auto">
    <h1 class="heading-1 md:text-center">
      Sign up
    </h1>

    <p class="md:text-center text-xl font-light mb-6 md:mb-12 text-gray-800">
      Create an account to add cards and track your progress.
    </p>

    <form
      action=""
      method="post"
      @submit.prevent="submit"
    >
      <div class="field">
        <label for="email">Email</label>
        <input
          v-model="user.email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="johndoe@example.com"
          autofocus
          required
          class="form-control"
          :class="{ 'form-control--error': errors.has('email') }"
        >
        <small
          v-if="errors.has('email')"
          class="field-help field-help--error"
        >
          Email {{ errors.get('email') }}
        </small>
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input
          v-model="user.password"
          type="password"
          name="password"
          autocomplete="new-password"
          placeholder="Password"
          required
          class="form-control"
          :class="{ 'form-control--error': errors.has('password') }"
        >
        <small
          v-if="errors.has('password')"
          class="field-help field-help--error"
        >
          Password {{ errors.get('password') }}
        </small>
      </div>

      <div class="actions my-8">
        <input
          type="submit"
          value="Sign up"
          class="button button-primary button-lg w-full"
        >
      </div>
    </form>
    <p class="md:text-center text-gray-700">
      Already have an account?
      <router-link :to="{ name: 'signin' }">
        Sign in
      </router-link>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Errors from '@/lib/errors'

export default {
  metaInfo: {
    title: 'Sign up'
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: new Errors()
    }
  },
  methods: {
    submit() {
      this.signUp({ user: this.user })
        .then(() => this.$router.push({ name: 'root' }))
        .then(() => this.$notify({ title: 'Signed up successfully' }))
        .catch(error => this.errors.record(error.json.errors))
    },
    ...mapActions('users', ['signUp'])
  }
}
</script>
