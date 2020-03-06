<template>
  <div>
    <hr>
    <div class="container py-5">
      <h1 class="text-4xl text-gray-800 font-medium">
        New deck
      </h1>

      <form @submit.prevent="submit">
        <div class="field">
          <input
            type="text"
            class="form-control p-4 text-lg"
            placeholder="Deck name, e.g. 'World capitals' or 'Months in French'"
            required
            autofocus
          >
        </div>

        <div class="field text-lg text-gray-800 mb-8">
          <input
            id="public"
            type="checkbox"
            name="public"
            class="mr-1"
          >
          <label for="public">Public</label>
        </div>

        <input
          type="submit"
          value="Create"
          class="button button-lg button-primary"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      console.log(42)
    }
  }
}
</script>
