<template>
  <div class="container flex flex-col sm:flex-row sm:justify-between sm:items-center py-8">
    <div class="text-4xl mb-3 sm:mb-0">
      <router-link to="/">
        <img src="@images/logo.png" alt="Logo" class="h-8">
      </router-link>
    </div>
    <div class="">
      <router-link to="/log-in" v-if="!$store.getters.loggedIn">Log in</router-link>
      <router-link to="/decks" v-if="$store.getters.loggedIn">Decks</router-link>
    </div>
  </div>
</template>
