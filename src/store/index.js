import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    profileToggleLink: undefined,
    viewingKittyProfile: false,
    kittyProfileURL: '/kitty'
  }),
  getters: {
    profileToggleLink: state => state.profileToggleLink,
    viewingKittyProfile: state => state.viewingKittyProfile,
    kittyProfileURL: state => state.kittyProfileURL
  },
  mutations: {
    setProfileToggleLink (state, payload) {
      state.profileToggleLink = payload
    },
    setViewingKittyProfile (state, payload) {
      state.viewingKittyProfile = payload
    }
  },
  actions: {
    toggleProfileToggleLink ({ commit, getters }) {
      if (router.currentRoute.path !== '/kitty') {
        // commit('setViewingKittyProfile', false)
        commit('setProfileToggleLink', 'MatchersBio')
      }
      if (router.currentRoute.path === '/kitty') {
        // commit('setViewingKittyProfile', true)
        commit('setProfileToggleLink', 'Matching')
      }
    }

  }
})
