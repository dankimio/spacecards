<template>
  <transition name="rotate">
    <div
      class="flex flex-col justify-center items-center bg-gray-100 rounded p-4"
      v-show="$store.getters.rotated"
    >
      <span class="font-semibold text-3xl">Zimbabwe</span>

      <hr class="w-full border-b-2 border-gray-200 my-4" />

      <span class="font-semibold text-3xl">Harare</span>
    </div>
  </transition>
</template>
<script>
export default {};
</script>
<style scoped>

</style>
