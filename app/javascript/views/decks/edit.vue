<template>
  <div class="container md:max-w-sm md:mx-auto">
    <h1 class="text-3xl mb-4">
      <span class="font-bold">World Capitals</span>
      <span class="mx-3 font-light">→</span>
      <span class="font-light">Edit</span>
    </h1>

    <form action="#">
      <h2 class="text-xl mb-2">Deck</h2>

      <div class="field">
        <label for="name">Name</label>
        <input type="text" required placeholder="Name" class="form-control">
      </div>

      <h2 class="text-xl mb-2 mt-8">Review</h2>

      <div class="field">
        <label for="reviews_per_day">Reviews per pday</label>
        <input type="text" min="0" placeholder="Reviews per day" class="form-control">
      </div>

      <div class="my-8">
        <input type="submit" value="Save" class="button button-primary button-lg w-full">
      </div>

    </form>

    <h2 class="text-xl mb-2">Danger zone</h2>

    <button class="button button-danger">
      <inline-svg
        :src="require('@images/icon-trash.svg')"
        class="inline-block w-4 h-4 mr-1 fill-current"
      />
      Delete
    </button>
  </div>
</template>
