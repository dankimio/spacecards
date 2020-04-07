<template>
  <div class="container flex flex-col lg:max-w-3xl mb-4 lg:mb-8">
    <h1 class="text-3xl mb-4 leading-tight">
      <span class="font-bold">
        {{ userDeck.name }}
      </span>
      <span class="mx-3 font-light">→</span>
      <span class="font-light">Study</span>
    </h1>

    <SessionSummary
      v-if="reviewCompleted && !isLoading"
      :reviewed-cards-count="answeredReviews.length"
    />

    <div
      v-if="!reviewCompleted && !isLoading"
      class="flex flex-row justify-between mb-4"
    >
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
      v-if="!reviewCompleted && !isLoading"
      class="mb-4"
      :card="currentReview.userCard"
      :answer-shown="answerShown"
    />

    <div
      v-if="!reviewCompleted && !isLoading"
      class="flex flex-col sm:flex-col md:flex-row justify-between items-center mb-4"
    >
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
import SessionSummary from '@/components/SessionSummary'

export default {
  components: { StudyCard, AnswerButton, SessionSummary },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentReview: {},
      answerShown: false
    }
  },
  computed: {
    reviewCompleted() {
      if (this.currentReview && this.currentReview.userCard) {
        return false
      }
      return true
    },
    ...mapGetters('studySessions', ['reviewsLeft', 'nextReview']),
    ...mapState(
      'studySessions',
      ['reviews', 'userDeck', 'studySession', 'answeredReviews', 'isLoading']
    )
  },
  created() {
    this.getStudySession(this.id)
      .then(() => {
        if (this.nextReview) {
          this.currentReview = this.nextReview
        } else {
          this.handleEmptyStudySession()
        }
      })
      .catch(() => {
        this.handleEmptyStudySession()
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
          this.currentReview = this.nextReview

          if (this.currentReview) {
            this.answerShown = false
          }
        })
    },
    handleEmptyStudySession() {
      this.$notify({ title: 'No cards to review in this deck. Come back tomorrow.' })
      this.$router.push('/user/decks')
    }
  },
  metaInfo: {
    title: `Study – ${'Deck name'}`
  }
}
</script>
