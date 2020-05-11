<template>
  <button
    class="flex md:flex-1 items-center justify-center
      mb-3 md:mb-0 w-full py-2 rounded-md
      border-2 border-gray-200
      transition-colors duration-150"
    :class="states[answerValue].class"
    @click.prevent="answer"
  >
    <span class="hover:text-white mr-3">
      {{ states[answerValue].label }}
    </span>
    <inline-svg
      class="fill-current"
      :src="states[answerValue].icon"
    />
  </button>
</template>

<script>
const states = {
  0: {
    label: 'Bad',
    class: 'answer-button--bad',
    icon: require('../images/icon-button-bad.svg')
  },
  1: {
    label: 'Okay',
    class: 'answer-button--okay',
    icon: require('../images/icon-button-okay.svg')
  },
  2: {
    label: 'Good',
    class: 'answer-button--good',
    icon: require('../images/icon-button-good.svg')
  },
  3: {
    label: 'Excellent',
    class: 'answer-button--excellent',
    icon: require('../images/icon-button-excellent.svg')
  }
}

export default {
  props: {
    answerValue: {
      type: Number,
      required: true
    }
  },
  data() {
    return { states: states }
  },
  methods: {
    answer() {
      this.$emit('answer', this.answerValue)
    }
  }
}
</script>

<style scoped>
.answer-button--bad {
  &:hover {
    @apply .bg-red-500 .border-red-500;
    & span, & svg { @apply .text-white; }
  }
  & span, & svg { @apply .text-red-500; }
}
.answer-button--okay {
  &:hover {
    @apply .bg-orange-500 .border-orange-500;
    & span, & svg { @apply .text-white; }
  }
  & span, & svg { @apply .text-orange-500; }
}
.answer-button--good {
  &:hover {
    @apply .bg-blue-500 .border-blue-500;
    & span, & svg { @apply .text-white; }
  }
  & span, & svg { @apply .text-blue-500; }
}
.answer-button--excellent {
  &:hover {
    @apply .bg-green-500 .border-green-500;
    & span, & svg { @apply .text-white; }
  }
  & span, & svg { @apply .text-green-500; }
}
</style>
