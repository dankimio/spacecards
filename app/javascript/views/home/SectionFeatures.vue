<template>
  <div>
    <h2 class="heading-1 text-center mb-8">
      Features
    </h2>

    <p v-if="false" class="text-center text-gray-700 text-lg max-w-xl mx-auto mb-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos ex quibusdam quod, sit deserunt fugiat, tenetur blanditiis sint beatae incidunt?
    </p>

    <div id="features" class="container mb-16">
      <div class="flex flex-col items-center max-w-sm mx-auto text-center">
        <inline-svg
          :src="require('@images/home/logo-markdown.svg')"
          class="w-24 h-24 text-gray-700 fill-current mb-2"
        />
        <div class="mb-4 flex items-start">
          <h3 class="text-xl font-medium mb-0">
            Markdown
          </h3>

          <span
            class="ml-3 border border-orange-400 text-orange-500 rounded px-1 text-xs font-light uppercase tracking-wider"
            style="font-size: .66rem"
          >
            Coming soon
          </span>
        </div>
        <p class="font-light text-gray-800 leading-normal">
          Use Markdown to add basic formatting to your flashcards: highlight elements, create lists.
        </p>
      </div>

      <div class="flex flex-col items-center max-w-sm mx-auto text-center">
        <inline-svg
          :src="require('@images/home/icon-albums.svg')"
          class="w-24 h-24 text-gray-700 fill-current mb-2"
        />
        <div class="mb-4 flex items-start">
          <h3 class="text-xl font-medium mb-0">
            Card types
          </h3>

          <span
            class="ml-3 border border-orange-400 text-orange-500 rounded px-1 text-xs font-light uppercase tracking-wider"
            style="font-size: .66rem"
          >
            Coming soon
          </span>
        </div>
        <p class="font-light text-gray-800 leading-normal">
          One-way & reverse cards, cards with context, images, pronunciation via text-to-speech.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#features {
  display: grid;

  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 3rem;
}

@screen md {
  #features {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
  }
}
</style>
