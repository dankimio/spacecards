<template>
  <div class="container flex flex-col lg:max-w-3xl mb-4 lg:mb-8">
    <h1 class="text-3xl mb-4">
      <span class="font-bold">World Capitals</span>
      <span class="mx-3 font-light">→</span>
      <span class="font-light">Study</span>
    </h1>

    <div class="flex flex-row justify-between mb-4">
      <div class="flex flex-row">
        <span class="text-gray-600 font-medium">World</span>
      </div>

      <div class="flex flex-row">
        <span class="text-3xl mr-2 leading-none">12</span>
        <span class="text-sm font-medium text-gray-600">
          Cards left
        </span>
      </div>
    </div>

    <Card class="mb-4" />

    <div
      class="flex flex-col sm:flex-col md:flex-row justify-between items-center mb-4"
    >
      <AnswerButton answer="bad" class="mr-0 md:mr-2 lg:mr-3" />
      <AnswerButton answer="okay" class="mr-0 md:mr-2 lg:mr-3" />
      <AnswerButton answer="good" class="mr-0 md:mr-2 lg:mr-3" />
      <AnswerButton answer="excellent" class="mr-0" />
    </div>
  </div>
</template>

<script>
import Card from "./card";
import AnswerButton from "@/components/answer_button";

export default {
  components: { Card, AnswerButton },
  metaInfo: {
    title: `Study – ${"Deck name"}`
  },
};
</script>
