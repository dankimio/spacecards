<template>
  <div class="flex flex-col lg:flex-row lg:items-start border-2 border-gray-200 px-4 py-4 mb-3 rounded">
    <div class="lg:w-2/5 lg:pr-2">
      <div v-if="!isEditing" class="text-gray-900" v-text="front" />

      <textarea
        v-if="isEditing"
        v-model="front"
        name="front"
        class="form-control w-full"
        autofocus
      />
    </div>

    <hr class="border-b-2 border-gray-100 my-3">

    <div class="lg:w-3/5 mb-4 lg:px-2 lg:mb-0 text-gray-900">
      <div v-if="!isEditing" class="text-gray-900" v-text="back" />

      <textarea
        v-if="isEditing"
        v-model="back"
        name="back"
        class="form-control w-full"
      />
    </div>

    <div v-if="!isEditing" class="lg:w-48 flex lg:pl-2">
      <button
        class="flex items-center text-gray-500 hover:text-gray-800 mr-5"
        @click="toggleEdit"
      >
        <inline-svg
          :src="require('@images/icon-pencil.svg')"
          class="inline-block w-4 h-4 mr-1 stroke-current"
        />
        <span>Edit</span>
      </button>

      <button
        class="flex items-center text-gray-500 hover:text-red-700"
        @click="destroy"
      >
        <inline-svg
          :src="require('@images/icon-trash.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        <span>Delete</span>
      </button>
    </div>
    <div v-if="isEditing" class="lg:w-48 flex lg:pl-2">
      <button
        v-if="isEditing"
        class="flex items-center text-gray-500 hover:text-gray-800 mr-3"
        @click="toggleEdit"
      >
        <inline-svg
          :src="require('@images/icon-checkmark.svg')"
          class="inline-block w-4 h-4 mr-1 stroke-current"
        />
        <span>Save</span>
      </button>
      <button
        v-if="isEditing"
        class="flex items-center text-gray-500 hover:text-gray-800"
        @click="toggleEdit"
      >
        <inline-svg
          :src="require('@images/icon-close.svg')"
          class="inline-block w-4 h-4 mr-1 fill-current"
        />
        <span>Cancel</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  data() {
    return {
      front: this.card.front,
      back: this.card.back,
      isEditing: false
    }
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing
    },
    destroy() {
    }
  }
}
</script>
