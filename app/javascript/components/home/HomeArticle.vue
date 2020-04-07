<template>
  <a
    :href="url"
    target="_blank"
    class="article md:flex-1 flex flex-col
          md:mx-4 mb-8 md:mb-0
          border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg"
  >
    <div class="flex-grow flex flex-col p-5 bg-white">
      <p class="mb-2 text-sm">
        <span class="text-gray-600 text-sm">{{ datePublished }} —</span>
        <span class="text-gray-700 text-sm font-medium">
          {{ publisher }}
        </span>
      </p>

      <h3 class="font-medium text-xl mb-3">
        {{ title }}
      </h3>

      <p class="text-gray-700 font-light leading-normal">
        {{ excerpt }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    url: { type: String, required: true },
    datePublished: { type: String, required: true },
    publisher: { type: String, required: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true }
  }
}
</script>
