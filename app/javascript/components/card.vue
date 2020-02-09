<template>
  <div class="flex flex-col lg:flex-row lg:items-start border-2 border-gray-200 px-4 py-4 mb-3 rounded">
    <div class="w-1/3 lg:pr-2">
      <div v-text="front" v-if="!isEditing" class="text-gray-900"></div>

      <textarea name="front"
        class="form-control"
        v-if="isEditing"
        v-model="front"></textarea>
    </div>

    <hr class="border-b-2 border-gray-100 my-3">

    <div class="w-2/3 mb-4 lg:px-2 lg:mb-0 text-gray-900">
      <div v-text="back" v-if="!isEditing" class="text-gray-900"></div>

      <textarea name="back"
        class="form-control"
        v-if="isEditing"
        v-model="back"></textarea>
    </div>
    <div class="flex flex-shrink-0 lg:pl-2">
      <button
        v-on:click="toggleEdit"
        class="flex items-center text-gray-500 hover:text-gray-800 mr-5"
      >
        <inline-svg
          :src="require('@images/icon-pencil.svg')"
          class="inline-block w-4 h-4 mr-1 stroke-current"
        />
        <span>Edit</span>
      </button>

      <button
        v-on:click="destroy"
        class="flex items-center text-gray-500 hover:text-gray-800"
      >
        <inline-svg
          :src="require('@images/icon-trash.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        <span>Delete</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      front: this.card.front,
      back: this.card.back,
      isEditing: false
    }
  },
  props: ['card'],
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing
    },
    destroy() {
    }
  }
}
</script>
