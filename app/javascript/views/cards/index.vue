<template>
  <div class="container">
    <h1 class="heading-2 text-center">
      World capitals <span class="font-light mx-2">→</span> Cards
    </h1>

    <router-link to="#" class="btn btn-primary mb-6">
      Add cards
    </router-link>

    <div v-for="card in cards" v-bind:key="card.id"
      class="flex flex-col lg:flex-row border-2 border-gray-200 px-4 py-4 mb-3 rounded"
    >
      <div class="w-1/3">
        {{ card.front }}
      </div>

      <hr class="border-b-2 border-gray-100 my-3">

      <div class="w-2/3 mb-4 lg:mb-0">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, front: 'France', back: 'Paris' },
        { id: 2, front: 'Germany', back: 'Berlin' },
        { id: 3, front: 'Italy', back: 'Rome' },
        { id: 4, front: 'Spain', back: 'Madrid' }
      ]
    }
  }
}
</script>
