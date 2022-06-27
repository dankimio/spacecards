<template>
  <div class="container flex flex-row justify-between items-center py-4">
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
        v-if="!isSignedIn"
        :to="{ name: 'signin' }"
        class="ml-5 md:ml-8"
      >
        Sign in
      </router-link>
      <!-- <router-link
        :to="{ name: 'explore' }"
        class="ml-5 md:ml-8"
      >
        Explore
      </router-link> -->
      <router-link
        v-if="isSignedIn"
        :to="{ name: 'userDecks' }"
        class="ml-5 md:ml-8"
      >
        My decks
      </router-link>
      <a
        v-if="isSignedIn"
        class="ml-5 md:ml-8"
        href=""
        @click.prevent="logOut"
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
    ...mapGetters('users', ['isSignedIn'])
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
