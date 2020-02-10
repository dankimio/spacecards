<template>
  <div
    class="flex flex-col sm:flex-col md:flex-row justify-between items-center my-5"
  >
    <button
      class="flex items-center justify-center my-3 sm:my-3 md:my-0 w-48 sm:w-48 md:w-40 lg:w-48 h-10
		  border-solid border-2 border-gray-200 rounded-md hover:bg-red-500
		  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <span class="text-red-500 group-hover:text-white mr-3">Bad</span>
      <img class="icon-btn" alt="Sad icon" src="@images/icon-btn-bad.svg" />
    </button>
    <button
      class="flex items-center justify-center my-3 sm:my-3 md:my-0 w-48 sm:w-48 md:w-40 lg:w-48 h-10
		  border-solid border-2 border-gray-200 rounded-md hover:bg-orange-500
		  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <span class="text-orange-500 group-hover:text-white mr-3">Okay</span>
      <img class="icon-btn" alt="Okay icon" src="@images/icon-btn-okay.svg" />
    </button>
    <button
      class="flex items-center justify-center my-3 sm:my-3 md:my-0 w-48 sm:w-48 md:w-40 lg:w-48 h-10
		  border-solid border-2 border-gray-200 rounded-md hover:bg-blue-500
		  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <span class="text-blue-500 group-hover:text-white mr-3">Good</span>
      <img class="icon-btn" alt="Good icon" src="@images/icon-btn-good.svg" />
    </button>
    <button
      class="flex items-center justify-center my-3 sm:my-3 md:my-0 w-48 sm:w-48 md:w-40 lg:w-48 h-10
		  border-solid border-2 border-gray-200 rounded-md hover:bg-green-500
		  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <span class="text-green-500 group-hover:text-white mr-3">Excellent</span>
      <img class="icon-btn" alt="Excellent icon" src="@images/icon-btn-excellent.svg" />
    </button>
  </div>
</template>

<style scoped>
    button:hover .icon-btn {
        filter: brightness(0) invert(1);
    }
</style>
