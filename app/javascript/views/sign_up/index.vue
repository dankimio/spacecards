<template>
  <div class="container md:my-8 lg:my-12 md:max-w-sm mx-auto">
    <h1 class="heading-1 mb-3 md:text-center">
      Sign up for Spacecards
    </h1>

    <p class="md:text-center text-xl font-light mb-6 md:mb-12 text-gray-800">
      Create an account to add your own cards and track progress.
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
        >
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
        >
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
      Already have an account?
      <router-link to="/log-in">
        Log in
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
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
      this.$store
        .dispatch('signUp', { user: this.user })
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
