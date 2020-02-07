<template>
  <div class="my-6 md:my-12">
    <h1 class="heading-1 text-center">Log in</h1>

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
            autocomplete="current-password" placeholder="Password" required
            class="form-control"
            v-model="user.password"
          >

          <p class="mt-4 text-right">
            <router-link to="/" class="text-gray-700">
              Forgot your password?
            </router-link>
          </p>
        </div>

        <div class="actions my-8">
          <input type="submit" value="Start learning" class="btn btn-primary btn-lg w-full">
        </div>
      </form>
    </div>

    <p class="text-center text-gray-700">
      Don't have an account?
      <router-link to="/sign-up">Sign up</router-link>
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
        .dispatch('logIn', { user: this.user })
        .then(() => this.$router.push('/'))
    }
  }
}
</script>
