<template>
  <form class="flex flex-col border mb-4 rounded" @submit.prevent="submit">
    <div class="flex flex-col">
      <div class="px-4 py-3">
        <span class="uppercase tracking-wide text-gray-500 text-xs">
          Front
        </span>
        <div
          v-if="!isEditing"
          class="text-gray-800 text-lg"
          v-text="currentCard.front"
        />

        <textarea
          v-if="allowEditing"
          v-show="isEditing"
          v-model="currentCard.front"
          name="front"
          class="form-control w-full"
          required
          autofocus
        />
      </div>

      <hr class="border-gray-200">

      <div class="px-4 py-3">
        <span class="uppercase tracking-wide text-gray-500 text-xs">
          Back
        </span>
        <div
          v-show="!isEditing"
          class="text-gray-800 text-lg"
          v-text="currentCard.back"
        />

        <textarea
          v-if="allowEditing"
          v-show="isEditing"
          v-model="currentCard.back"
          name="back"
          class="form-control w-full"
          required
        />
      </div>
    </div>
    <div
      v-if="allowEditing"
      class="bg-gray-100 text-gray-600 text-sm px-4 py-2"
    >
      <div
        v-if="allowEditing"
        v-show="!isEditing"
        class="lg:w-48 flex"
      >
        <button
          class="flex items-center text-gray-500 hover:text-gray-800 mr-6"
          @click.prevent="isEditing = true"
        >
          <inline-svg
            :src="require('@images/icon-pencil.svg')"
            class="inline-block w-4 h-4 mr-1 stroke-current"
          />
          <span>Edit</span>
        </button>

        <button
          class="flex items-center text-gray-500 hover:text-red-700"
          @click.prevent="destroy"
        >
          <inline-svg
            :src="require('@images/icon-trash.svg')"
            class="inline-block w-4 h-4 mr-1 fill-current"
          />
          <span>Delete</span>
        </button>
      </div>
      <div
        v-if="allowEditing"
        v-show="isEditing"
        class="lg:w-48 flex"
      >
        <button
          v-if="allowEditing"
          v-show="isEditing"
          href="#"
          type="submit"
          class="flex items-center text-gray-500 hover:text-gray-800 mr-6"
        >
          <inline-svg
            :src="require('@images/icon-checkmark.svg')"
            class="inline-block w-4 h-4 mr-1 stroke-current"
          />
          <span>Save</span>
        </button>
        <button
          v-if="allowEditing"
          v-show="isEditing"
          class="flex items-center text-gray-500 hover:text-gray-800"
          @click.prevent="cancel"
        >
          <inline-svg
            :src="require('@images/icon-close.svg')"
            class="inline-block w-4 h-4 mr-1 fill-current"
          />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    allowEditing: Boolean,
    isNew: Boolean,
    userDeckId: {
      type: Number,
      default: null
    },
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentCard: this.card,
      isEditing: this.isNew
    }
  },
  methods: {
    cancel() {
      this.isEditing = false
      if (this.isNew) {
        this.$emit('cancel')
      }
    },
    destroy() {
      if (confirm('Are you sure?')) {
        this.deleteUserCard(this.currentCard)
          .then(() => this.$notify({ title: 'Card was deleted successfully' }))
      }
    },
    submit() {
      if (this.isNew) {
        this.createUserCard({ userDeckId: this.userDeckId, userCard: this.currentCard })
          .then(() => { this.isEditing = false })
          .then(() => this.$emit('create'))
          .then(() => { this.$notify({ title: 'Card was created successfully' }) })
      } else {
        this.updateUserCard(this.currentCard)
          .then(() => { this.isEditing = false })
          .then(() => { this.$notify({ title: 'Card was updated successfully' }) })
      }
    },
    ...mapActions(
      'userCards',
      ['createUserCard', 'updateUserCard', 'deleteUserCard']
    )
  }
}
</script>
