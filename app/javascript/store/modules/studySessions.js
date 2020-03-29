import axios from 'axios'

const state = {
  reviews: [],
  studySession: {},
  userDeck: {}
}

const getters = {
  reviewsLeft(state) {
    return state.reviews.filter(review => review.answer === null).length
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
        console.log(response.data)
        console.log('success')
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
