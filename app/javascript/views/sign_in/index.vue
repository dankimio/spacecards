<template>
  <div>
    <h1 class="heading-1 md:text-center">
      Sign in
    </h1>

    <form @submit.prevent="submit">
      <div class="field">
        <label for="email">Email</label>
        <input
          v-model="user.email"
          type="email"
          name="email"
          autocomplete="email"
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
          required
          class="form-control"
        >

        <p v-if="false" class="mt-4 text-right">
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
          value="Sign in"
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
    title: 'Sign in'
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
      this.signIn({ user: this.user })
        .then(() => {
          this.$router.push({ name: 'root' })
          this.$notify({ title: 'Logged in successfully' })
        })
        .catch(() => this.$notify({ title: 'Email or password is incorrect' }))
    },
    ...mapActions('users', ['signIn'])
  }
}
</script>
