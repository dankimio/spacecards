<template>
  <div class="container flex flex-col lg:max-w-3xl mb-4 lg:mb-8">
    <h1 class="text-3xl mb-4">
      <span class="font-bold">
        {{ userDeck.name }}
      </span>
      <span class="mx-3 font-light">→</span>
      <span class="font-light">Study</span>
    </h1>

    <div class="flex flex-row justify-between mb-4">
      <div class="flex flex-row">
        <span class="text-gray-600 font-medium">World</span>
      </div>

      <div class="flex flex-row">
        <span class="text-3xl mr-2 leading-none">
          {{ reviewsLeft }}
        </span>
        <span class="text-sm font-medium text-gray-600">
          Cards left
        </span>
      </div>
    </div>

    <StudyCard
      v-if="currentReview && currentReview.userCard"
      class="mb-4"
      :card="currentReview.userCard"
    />

    <div class="flex flex-col sm:flex-col md:flex-row justify-between items-center mb-4">
      <button
        v-if="!answerShown"
        class="button button-lg button-primary
          w-full uppercase tracking-wider font-normal"
        @click="answerShown = true"
      >
        Show answer
      </button>
      <AnswerButton
        v-show="answerShown"
        :answer-value="0"
        class="mr-0 md:mr-2 lg:mr-3"
        @answer="answer($event)"
      />
      <AnswerButton
        v-show="answerShown"
        :answer-value="1"
        class="mr-0 md:mr-2 lg:mr-3"
        @answer="answer($event)"
      />
      <AnswerButton
        v-show="answerShown"
        :answer-value="2"
        class="mr-0 md:mr-2 lg:mr-3"
        @answer="answer($event)"
      />
      <AnswerButton
        v-show="answerShown"
        :answer-value="3"
        class="mr-0"
        @answer="answer($event)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import StudyCard from '@/components/StudyCard'
import AnswerButton from '@/components/AnswerButton'

export default {
  components: { StudyCard, AnswerButton },
  props: {
    id: {
      type: String,
      required: true
    },
    answerShown: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentReview: {}
    }
  },
  computed: {
    ...mapGetters('studySessions', ['reviewsLeft', 'nextReview']),
    ...mapState('studySessions', ['reviews', 'userDeck', 'studySession'])
  },
  created() {
    this.getStudySession(this.id)
      .then(() => {
        if (this.nextReview) {
          this.currentReview = this.nextReview
        } else {
          // TODO: end session
        }
      })
  },
  methods: {
    ...mapActions(
      'studySessions',
      ['getStudySession', 'answerReview']
    ),
    answer(answerValue) {
      const payload = {
        reviewId: this.currentReview.id,
        answer: answerValue
      }
      this.answerReview(payload)
        .then(() => {
          if (this.nextReview) {
            this.currentReview = this.nextReview
          } else {
          // TODO: end session
          }
        })
    }
  },
  metaInfo: {
    title: `Study – ${'Deck name'}`
  }
}
</script>
