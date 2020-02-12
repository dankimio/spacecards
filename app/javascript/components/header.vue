<template>
  <div class="container flex flex-col sm:flex-row sm:justify-between sm:items-center py-8">
    <div class="text-4xl mb-3 sm:mb-0">
      <router-link to="/">
        <img src="@images/logo.png" alt="Logo" class="h-8">
      </router-link>
    </div>
    <div class="">
      <router-link
        v-if="!$store.getters.loggedIn"
        to="/log-in"
        class="ml-5"
      >
        Log in
      </router-link>
      <router-link
        to="/explore"
        class="ml-5"
      >
        Explore
      </router-link>
      <router-link
        v-if="$store.getters.loggedIn"
        to="/decks"
        class="ml-5"
      >
        Decks
      </router-link>
    </div>
  </div>
</template>
