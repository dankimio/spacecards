<template>
  <div class="flex flex-col lg:flex-row border-2 border-gray-200 px-4 py-4 mb-3 rounded">
    <div class="w-1/3 text-gray-900">
      {{ card.front }}
    </div>

    <hr class="border-b-2 border-gray-100 my-3">

    <div class="w-2/3 mb-4 lg:mb-0 text-gray-900">
      {{ card.back }}
    </div>
    <div class="flex flex-shrink-0">
      <a href="" class="flex items-center text-gray-500 hover:text-gray-800 mr-5">
        <inline-svg
          :src="require('@images/icon-pencil.svg')"
          class="inline-block w-4 h-4 mr-1 stroke-current"
        />
        <span>Edit</span>
      </a>

      <a href="" class="flex items-center text-gray-500 hover:text-gray-800">
        <inline-svg
          :src="require('@images/icon-trash.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        <span>Delete</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>
