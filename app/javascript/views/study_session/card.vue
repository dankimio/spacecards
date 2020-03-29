<template>
  <div class="flex flex-col justify-center items-center bg-gray-100 rounded p-4">
    <span class="font-semibold text-3xl">
      {{ card.front }}
    </span>

    <hr class="w-full border-b-2 border-gray-200 my-4">

    <span class="font-semibold text-3xl">
      {{ card.back }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>
