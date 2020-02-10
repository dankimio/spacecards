<template>
  <div class="container flex flex-col mx-auto max-w-4xl px-6 mb-64">
    <Card />

    <div class="flex flex-col sm:flex-col md:flex-row justify-between items-center my-5">
      <button
        class="flex md:flex-1 items-center justify-center
        mb-3 md:mb-0 w-full py-2 rounded-md
        border-2 border-gray-200 hover:border-red-500
        hover:bg-red-500 transition duration-200
        transform hover:-translate-y-1"
      >
        <span class="text-red-500 group-hover:text-white mr-3">Bad</span>
        <img class="icon-btn" alt="Sad icon" src="@images/icon-btn-bad.svg">
      </button>
      <button
        class="flex md:flex-1 items-center justify-center
        mb-3 md:mb-0 w-full py-2 rounded-md
        border-2 border-gray-200 hover:border-orange-500
        hover:bg-orange-500 transition duration-200
        transform hover:-translate-y-1"
      >
        <span class="text-orange-500 group-hover:text-white mr-3">Okay</span>
        <img class="icon-btn" alt="Okay icon" src="@images/icon-btn-okay.svg">
      </button>
      <button
        class="flex md:flex-1 items-center justify-center
        mb-3 md:mb-0 w-full py-2 rounded-md
        border-2 border-gray-200 hover:border-blue-500
        hover:bg-blue-500 transition duration-200
        transform hover:-translate-y-1"
      >
        <span class="text-blue-500 group-hover:text-white mr-3">Good</span>
        <img class="icon-btn" alt="Good icon" src="@images/icon-btn-good.svg">
      </button>
      <button
        class="flex md:flex-1 items-center justify-center
        mb-3 md:mb-0 w-full py-2 rounded-md
        border-2 border-gray-200 hover:border-green-500
        hover:bg-green-500 transition duration-200
        transform hover:-translate-y-1"
      >
        <span class="text-green-500 group-hover:text-white mr-3">Excellent</span>
        <img class="icon-btn" alt="Excellent icon" src="@images/icon-btn-excellent.svg">
      </button>
    </div>
  </div>
</template>

<script>
import Card from './card'

export default {
  components: { Card }
}
</script>
