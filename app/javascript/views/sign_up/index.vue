<template>
  <div class="my-6 md:my-12">
    <h1 class="heading-1 text-center">Sign up for Spacecards</h1>

    <p class="text-center text-xl font-light mb-6 md:mb-12 text-gray-800">Create an account to add your own cards and track progress.</p>

    <div class="max-w-sm mx-auto">
      <form action="" method="post" @submit.prevent="submit">
        <div class="field">
          <label for="email">Email</label>
          <input
            type="email" name="email"
            autocomplete="email" placeholder="johndoe@example.com"
            autofocus required
            class="form-control"
            v-model="user.email"
          >
        </div>

        <div class="field">
          <label for="password">Password</label>
          <input
            type="password" name="password"
            autocomplete="new-password" placeholder="Password" required
            class="form-control"
            v-model="user.password"
          >
        </div>

        <div class="actions my-8">
          <input
            type="submit" value="Start learning"
            class="btn btn-primary btn-lg w-full"
          >
        </div>
      </form>
    </div>

    <p class="text-center text-gray-700">
      Already have an account?
      <router-link to="/log-in">Log in</router-link>
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
      this.$store.dispatch('logIn', { user: this.user })
    }
  }
}
</script>
