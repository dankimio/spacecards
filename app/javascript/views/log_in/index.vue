<template>
  <div class="container mb-8 md:my-8 md:max-w-sm mx-auto">
    <h1 class="heading-1 mb-3 md:mb-6 md:text-center leading-tight">
      Log in
    </h1>

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
        >
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input
          v-model="user.password"
          type="password"
          name="password"
          autocomplete="current-password"
          placeholder="Password"
          required
          class="form-control"
        >

        <p class="mt-4 text-right">
          <!-- TODO: -->
          <router-link
            to="#"
            class="text-gray-700"
          >
            Forgot your password?
          </router-link>
        </p>
      </div>

      <div class="actions my-8">
        <input
          type="submit"
          value="Start learning"
          class="button button-primary button-lg w-full"
        >
      </div>
    </form>

    <p class="md:text-center text-gray-700">
      Don't have an account?
      <router-link :to="{ name: 'signup' }">
        Sign up
      </router-link>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  metaInfo: {
    title: 'Log in'
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      this.logIn({ user: this.user })
        .then(() => {
          this.$router.push('/')
          this.$notify({ title: 'Logged in successfully' })
        })
        .catch(() => this.$notify({ title: 'Email or password is incorrect' }))
    },
    ...mapActions('users', ['logIn'])
  }
}
</script>
