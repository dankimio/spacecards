<template>
  <div class="border-b border-gray-200">
    <div class="container flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
      <div class="mb-4 sm:mb-0">
        <router-link :to="{ name: 'root' }" class="flex items-center">
          <img src="@images/logo-compact.svg" alt="Logo" class="h-6">
          <span class="hidden md:block ml-4 text-gray-900 font-semibold text-2xl tracking-tight">
            spacecards
          </span>
        </router-link>
      </div>
      <div class="font-medium">
        <router-link
          v-if="!isLoggedIn"
          :to="{ name: 'login' }"
          class="mr-5 md:mr-0 md:ml-8"
        >
          Log in
        </router-link>
        <router-link
          :to="{ name: 'explore' }"
          class="mr-5 md:mr-0 md:ml-8"
        >
          Explore
        </router-link>
        <router-link
          v-if="isLoggedIn"
          :to="{ name: 'userDecks' }"
          class="mr-5 md:mr-0 md:ml-8"
        >
          My decks
        </router-link>
        <a
          v-if="isLoggedIn"
          class="mr-5 md:mr-0 md:ml-8"
          href=""
          @click.prevent="logOut"
        >
          Log out
        </a>
      </div>
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

        this.$router
          .push({ name: 'root' })
          // Handle log out on the same URL
          .catch(error => error)
      })
    }
  }
}
</script>
