<template>
  <div
    class="flip relative flex flex-col justify-center items-center bg-gray-100 rounded p-4 h-40 cursor-pointer"
    @click="flipCard"
  >
    <div
      class="front flex flex-col justify-center items-center"
      :class="{
        'front-flip': $store.getters.rotated
      }"
    >
      <span class="font-semibold text-3xl">Zimbabwe</span>
    </div>
    <div
      class="back w-full flex flex-col justify-center items-center"
      vclass="{
        'back-flip': $store.getters.rotated
      }"
    >
      <span class="font-semibold text-3xl">Zimbabwe</span>
      <hr class="w-11/12 border-b-2 border-gray-200 my-4">
      <span class="font-semibold text-3xl">Harare</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    flipCard() {
      this.$store.dispatch('rotateCard')
    }
  }
}
</script><style scoped>
.flip {
  & > .front,
  & > .back {
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }
  & > .front {
    transform: rotateY(0deg);
  }
  & > .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  & .front-flip {
    transform: rotateY(180deg);
    display: none;
  }

  & .back-flip {
    opacity: 1;
    transform: rotateY(0deg);
  }
}
</style>
