<template>
  <div class="flex flex-col justify-center items-center bg-gray-100 rounded p-4">
    <pre
      class="md:py-4 font-semibold text-3xl"
      v-text="card.front"
    />

    <hr v-show="answerShown" class="w-full border-b-2 border-gray-200 my-4">

    <pre
      v-show="answerShown"
      class="md:py-4 md:py-6 font-semibold text-3xl"
      v-text="card.back"
    />
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    answerShown: {
      type: Boolean,
      default: false
    }
  }
}
</script>
