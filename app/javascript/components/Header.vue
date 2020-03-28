<template>
  <div class="container flex flex-col sm:flex-row sm:justify-between sm:items-center py-8">
    <div class="text-4xl mb-4 sm:mb-0">
      <router-link to="/">
        <img src="@images/logo.png" alt="Logo" class="h-8">
      </router-link>
    </div>
    <div class="">
      <router-link
        v-if="!isLoggedIn"
        to="/log-in"
        class="mr-6 md:mr-0 md:ml-10"
      >
        Log in
      </router-link>
      <router-link
        to="/explore"
        class="mr-6 md:mr-0 md:ml-10"
      >
        Explore
      </router-link>
      <router-link
        v-if="isLoggedIn"
        to="/decks"
        class="mr-6 md:mr-0 md:ml-10"
      >
        Decks
      </router-link>
      <a
        v-if="isLoggedIn"
        class="mr-6 md:mr-0 md:ml-10"
        href="#"
        @click="logOut"
      >
        Log out
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('users', ['isLoggedIn'])
  },
  methods: {
    logOut() {
      this.$store.dispatch('users/logOut').then(() => {
        this.$notify({ title: 'Logged out successfully' })
      })
    }
  }
}
</script>
