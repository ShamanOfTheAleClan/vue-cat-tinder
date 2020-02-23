import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    profileToggleLink: undefined
  }),
  getters: {
    profileToggleLink: state => state.profileToggleLink
  },
  mutations: {
    setProfileToggleLink (state, payload) {
      state.profileToggleLink = payload
    }
  },
  actions: {
    toggleProfileToggleLink ({ commit }) {
      switch (router.currentRoute.path) {
        case '/':
          commit('setProfileToggleLink', 'MatchersProfile')
          break
        case '/kitty':
          commit('setProfileToggleLink', 'Matching')
      }
    }
  }
})
