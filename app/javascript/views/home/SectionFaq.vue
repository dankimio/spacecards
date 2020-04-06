<template>
  <div class="container py-12">
    <h2 class="heading-1 text-center">
      FAQ
    </h2>

    <div class="sm:max-w-md lg:max-w-lg mx-auto">
      <div class="faq-item">
        <h3 class="faq-item-heading">
          Is it free?
        </h3>
        <p class="faq-item-content">
          Yes, Spacecards is free.
        </p>
      </div>
      <div class="faq-item">
        <h3 class="faq-item-heading">
          How many cards should I review each day?
        </h3>
        <p class="faq-item-content">
          We recommend reviewing up to 20 cards each day. Reviewing more
          material may degrade your performance.
        </p>
      </div>
      <div class="faq-item">
        <h3 class="faq-item-heading">
          What can I memorize using Spacecards?
        </h3>
        <p class="faq-item-content">
          Languages (words, phrases, grammar rules, alphabets & characters),
          exam questions (facts, dates, formulas), poems, speeches, lines from
          the script.
        </p>
      </div>
      <div class="faq-item">
        <h3 class="faq-item-heading">
          Does it work?
        </h3>
        <p class="faq-item-content">
          Spaced repetition is a learning technique that has been studied and
          researched.
          <a href="https://en.wikipedia.org/wiki/Spaced_repetition">
            Further reading</a>.
        </p>
      </div>
      <div class="faq-item">
        <h3 class="faq-item-heading">
          Is there a mobile app?
        </h3>
        <p class="faq-item-content">
          Not at the moment. We'll post an update once the app goes live.
        </p>
      </div>
      <div class="faq-item">
        <h3 class="faq-item-heading">
          My question is not mentioned here.
        </h3>
        <p class="faq-item-content">
          Feel free <a href="mailto:dan@spacecards.app">drop us</a> a line!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-item {
  @apply border-b py-6;

  &:last-child {
    @apply border-none;
  }

  & .faq-item-heading {
    @apply mb-4 flex justify-between items-center text-gray-900 font-medium text-lg;
  }

  & .faq-item-content {
    @apply text-gray-700 leading-normal;

    &.active {
      @apply block;
    }
  }
}
</style>
