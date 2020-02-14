<template>
  <div>
    <h2 class="heading-1 text-center mb-8">
      Features
    </h2>

    <div id="features" class="container mb-16">
      <div class="flex flex-col items-center max-w-sm mx-auto text-center">
        <inline-svg
          :src="require('@images/home/logo-markdown.svg')"
          class="w-24 h-24 text-gray-700 fill-current mb-2"
        />
        <h3 class="text-xl font-medium mb-6">
          Markdown support
        </h3>
        <p class="font-light text-gray-800 leading-normal">
          Use Markdown to add basic formatting to your flashcards: highlight elements, create lists.
        </p>
      </div>

      <div class="flex flex-col max-w-sm mx-auto text-center">
        <img
          src="@images/home/icon-features-04.svg"
          alt="Multiple card types"
          class="block mb-6"
        >
        <h3 class="font-medium mb-6">
          Multiple card types
        </h3>
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
