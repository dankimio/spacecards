import axios from 'axios'

const state = {
  reviews: [],
  studySession: {}
}

const getters = {}

const actions = {
  getStudySession(context, userDeckId) {
    return axios.get(`/user_decks/${userDeckId}/study_session`)
      .then(response => {
        const { reviews, ...studySession } = response.data
        context.commit('SET_REVIEWS', reviews)
        context.commit('SET_STUDY_SESSION', studySession)
      })
  }
}

const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews
  },
  SET_STUDY_SESSION(state, studySession) {
    state.studySession = studySession
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
