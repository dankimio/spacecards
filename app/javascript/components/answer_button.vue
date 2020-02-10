<template>
  <button
    class="flex md:flex-1 items-center justify-center
    mb-3 md:mb-0 w-full py-2 rounded-md
    border-2 border-gray-200
    transition duration-200
    transform hover:-translate-y-1"
    v-bind:class="states[answer].class"
  >
    <span class="hover:text-white mr-3">
      {{ states[answer].label }}
    </span>
    <inline-svg class="fill-current"
      :src="states[answer].icon" />
  </button>
</template>

<script>
const states = {
  'bad': {
    label: 'Bad',
    class: 'answer-button--bad',
    icon: require('../images/icon-btn-bad.svg'),
  },
  'okay': {
    label: 'Okay',
    class: 'answer-button--okay',
    icon: require('../images/icon-btn-okay.svg'),
  },
  'good': {
    label: 'Good',
    class: 'answer-button--good',
    icon: require('../images/icon-btn-good.svg'),
  },
  'excellent': {
    label: 'Excellent',
    class: 'answer-button--excellent',
    icon: require('../images/icon-btn-excellent.svg'),
  },
}

export default {
  props: ['answer'],
  data() {
    return { states: states }
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
