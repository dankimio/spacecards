import axios from 'axios'

const state = {
  reviews: [],
  studySession: {},
  userDeck: {}
}

const getters = {
  reviewsLeft(_, getters) {
    return getters.unansweredReviews.length
  },
  nextReview(_, getters) {
    return getters.unansweredReviews.length > 0 ? getters.unansweredReviews[0] : null
  },
  unansweredReviews(state) {
    return state.reviews
      .filter(review => review.answer === null || review.answer === 0)
  },
  getReviewById: (state) => (id) => {
    return state.reviews.filter(review => review.id === id)
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
    const studySessionId = context.state.studySession.id
    const data = { review: { answer: answer } }

    return axios.patch(`/study_sessions/${studySessionId}/reviews/${reviewId}`, data)
      .then(response => {
        context.commit('UPDATE_REVIEW', response.data)
      })
  }
}

const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews
  },
  SET_STUDY_SESSION(state, studySession) {
    state.studySession = studySession
  },
  SET_USER_DECK(state, userDeck) {
    state.userDeck = userDeck
  },
  UPDATE_REVIEW(state, data) {
    if (data.answer === 0) {
      state.reviews.push(
        state.reviews.splice(state.reviews.findIndex(review => review.id === data.id), 1)[0]
      )
    } else {
      const index = state.reviews.findIndex(review => review.id === data.id)
      state.reviews[index].answer = data.answer
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
