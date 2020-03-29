import axios from 'axios'

const state = {
  reviews: [],
  unansweredReviews: [],
  answeredReviews: [],
  failedReviews: [],
  studySession: {},
  userDeck: {}
}

const getters = {
  reviewsLeft(state) {
    return state.unansweredReviews.length + state.failedReviews.length
  },
  nextReview(state) {
    if (state.unansweredReviews.length > 0) {
      return state.unansweredReviews[0]
    }
    if (state.failedReviews.length > 0) {
      return state.failedReviews[0]
    }
    return null
  }
}

const actions = {
  getStudySession(context, userDeckId) {
    return axios.get(`/user_decks/${userDeckId}/study_session`)
      .then(response => {
        const {
          reviews,
          userDeck,
          ...studySession
        } = response.data
        context.commit('SET_REVIEWS', reviews)
        context.commit('SET_STUDY_SESSION', studySession)
        context.commit('SET_USER_DECK', userDeck)
      })
  },
  updateReview(context, { reviewId, answer }) {
    if (answer === 0) {
      context.commit('FAIL_REVIEW', reviewId)
      return new Promise((resolve, reject) => {
        resolve()
      })
    }

    // TODO: remove study_sessions from URL and authorize on the server
    const studySessionId = context.state.studySession.id
    const data = { review: { answer: answer } }

    return axios.patch(`/study_sessions/${studySessionId}/reviews/${reviewId}`, data)
      .then(response => {
        context.commit(
          'ANSWER_REVIEW',
          { reviewId, answer: response.data.answer }
        )
      })
  }
}

const mutations = {
  SET_REVIEWS(state, reviews) {
    state.unansweredReviews = reviews.filter(review => review.answer === null)
    state.failedReviews = reviews.filter(review => review.answer === 0)
    state.answeredReviews = reviews.filter(review => review.answer !== null && review.answer !== 0)
  },
  SET_STUDY_SESSION(state, studySession) {
    state.studySession = studySession
  },
  SET_USER_DECK(state, userDeck) {
    state.userDeck = userDeck
  },
  ANSWER_REVIEW(state, { reviewId, answer }) {
    const indexInFailed = state.failedReviews.findIndex(review => review.id === reviewId)
    if (indexInFailed !== -1) {
      state.failedReviews[indexInFailed].answer = answer
      state.answeredReviews.push(state.failedReviews.splice(indexInFailed, 1)[0])
    }

    const indexInUnanswered = state.unansweredReviews.findIndex(review => review.id === reviewId)
    if (indexInUnanswered !== -1) {
      state.unansweredReviews[indexInUnanswered].answer = answer
      state.answeredReviews.push(state.unansweredReviews.splice(indexInUnanswered, 1)[0])
    }
  },
  // Move review to failedReviews
  FAIL_REVIEW(state, reviewId) {
    const indexInFailed = state.failedReviews.findIndex(review => review.id === reviewId)
    if (indexInFailed !== -1) {
      state.failedReviews.push(state.failedReviews.splice(indexInFailed, 1)[0])
    }
    const index = state.unansweredReviews.findIndex(review => review.id === reviewId)
    if (index !== -1) {
      state.failedReviews.push(state.unansweredReviews.splice(index, 1)[0])
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
