<template>
  <div class="border-b border-gray-200">
    <div class="container flex flex-row justify-between items-center py-3">
      <div class="">
        <router-link :to="{ name: 'root' }" class="flex items-center">
          <img src="@images/logo-compact.svg" alt="Logo" class="h-8 md:h-6">
          <span class="hidden md:block ml-4 text-gray-900 font-semibold text-2xl tracking-tight">
            spacecards
          </span>
        </router-link>
      </div>
      <div class="font-medium">
        <router-link
          v-if="!isLoggedIn"
          :to="{ name: 'login' }"
          class="ml-5 md:ml-8"
        >
          Log in
        </router-link>
        <router-link
          :to="{ name: 'explore' }"
          class="ml-5 md:ml-8"
        >
          Explore
        </router-link>
        <router-link
          v-if="isLoggedIn"
          :to="{ name: 'userDecks' }"
          class="ml-5 md:ml-8"
        >
          My decks
        </router-link>
        <a
          v-if="isLoggedIn"
          class="ml-5 md:ml-8"
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
