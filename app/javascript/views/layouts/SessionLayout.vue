<template>
  <div class="flex min-h-screen flex-col md:bg-gray-100 py-8">
    <div class="container flex justify-between items-center mb-8">
      <router-link :to="{ name: 'root' }">
        <img src="@images/logo-compact.svg" alt="Logo" class="h-10">
      </router-link>
      <div>
        <span class="text-sm text-gray-700 font-medium mr-4">
          Already have an account?
        </span>

        <router-link
          :to="{ name: 'signin' }"
          class="button button-outlined button-outlined-primary"
        >
          Sign in
        </router-link>
      </div>
    </div>

    <div
      class="container mb-8 md:mb-16 flex-1
      flex flex-col md:justify-center items-center"
    >
      <div class="bg-white md:max-w-md w-full md:p-12 rounded-md">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
