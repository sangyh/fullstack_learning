import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // cannot modify the state unless it's through action or mutation
  state: { // global states of application we want to keep track of (useful for changing display etc)
    token: null, // to change this, must invoke mutation. to invoke mutation, must invoke action
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: { // always invoke actions from vue compoenents
    setToken ({commit}, token) {
      commit('setToken', token) // add async logic here
    },
    setUser ({commit}, user) {
      commit('setUser', user) // add async logic here
    }
  }
})
