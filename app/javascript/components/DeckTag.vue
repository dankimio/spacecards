<template>
  <router-link
    to="#"
    class="px-2 bg-gray-500 text-xs mr-1 rounded-lg text-white hover:bg-indigo-500 hover:text-white hover:shadow-md"
  >
    {{ name }}
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
