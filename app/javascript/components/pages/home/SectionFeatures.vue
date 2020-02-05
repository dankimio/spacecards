<template>
  <div>
    <h2 class="heading-1 text-center" style="margin-bottom: 2rem;">Features</h2>

    <div id="features" class="container mb-16">
      <div class="flex flex-col max-w-sm mx-auto text-center">
        <img src="@images/icon-features-01.svg" alt="Markdown support" class="block mb-6">
        <h3 class="font-medium mb-6">Markdown support</h3>
        <p class="font-light text-grey-darkest leading-normal">Use Markdown to emphasize key elements, create lists and add formatting to your flashcards.</p>
      </div>
      <div class="flex flex-col max-w-sm mx-auto text-center">
        <img src="@images/icon-features-04.svg" alt="Multiple card types" class="block mb-6">
        <h3 class="font-medium mb-6">Multiple card types</h3>
        <p class="font-light text-grey-darkest leading-normal">One-way & reverse cards, cards with context, images, pronunciation via text-to-speech.</p>
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
