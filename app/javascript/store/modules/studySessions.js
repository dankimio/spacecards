import axios from 'axios'

const state = {
  unansweredReviews: [],
  answeredReviews: [],
  studySession: {},
  userDeck: {}
}

const getters = {
  reviewsLeft(state) {
    return state.unansweredReviews.length
  },
  nextReview(state) {
    if (state.unansweredReviews.length > 0) {
      return state.unansweredReviews[0]
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
  answerReview(context, { reviewId, answer }) {
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
    state.answeredReviews = reviews.filter(review => review.answer !== null)
  },
  SET_STUDY_SESSION(state, studySession) {
    state.studySession = studySession
  },
  SET_USER_DECK(state, userDeck) {
    state.userDeck = userDeck
  },
  ANSWER_REVIEW(state, { reviewId, answer }) {
    const indexInUnanswered = state.unansweredReviews.findIndex(review => review.id === reviewId)
    if (indexInUnanswered !== -1) {
      state.unansweredReviews[indexInUnanswered].answer = answer
      state.answeredReviews.push(state.unansweredReviews.splice(indexInUnanswered, 1)[0])
    }
  },
  FAIL_REVIEW(state, reviewId) {
    const index = state.unansweredReviews.findIndex(review => review.id === reviewId)
    if (index !== -1) {
      state.unansweredReviews.push(state.unansweredReviews.splice(index, 1)[0])
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
