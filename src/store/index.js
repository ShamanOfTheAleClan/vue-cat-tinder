import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    profileToggleLink: undefined,
    kittyProfileURL: '/kitty',
    cats: [],
    catIndex: undefined,
    isFetching: false,
    needCats: true,
    itsAMatch: false, // false
    recentMatch: undefined, // undefined
    newMatches: [],
    matches: [],
    currentlyChattingWith: undefined

  }),
  getters: {
    profileToggleLink: state => state.profileToggleLink,
    kittyProfileURL: state => state.kittyProfileURL,
    cats: state => state.cats,
    catIndex: state => state.catIndex,
    isFetching: state => state.isFetching,
    needCats: state => state.needCats,
    itsAMatch: state => state.itsAMatch,
    recentMatch: state => state.recentMatch,
    newMatches: state => state.newMatches,
    oldMatches: state => state.matches,
    currentlyChattingWith: state => state.currentlyChattingWith
  },
  mutations: {
    setProfileToggleLink (state, payload) {
      state.profileToggleLink = payload
    },
    setCats (state, payload) {
      state.cats = payload
    },
    resetCatIndex (state) {
      state.catIndex = 0
    },
    setCatIndex (state, payload) {
      state.catIndex = payload
    },
    addRandomAge (state, { payload, index }) {
      Vue.set(state.cats[index], 'age', payload)
    },
    addAffection (state, { payload, index }) {
      Vue.set(state.cats[index], 'likesYou', payload)
    },
    setIsFetching (state, payload) {
      state.isFetching = payload
    },
    setNeedCats (state, payload) {
      state.needCats = payload
    },
    setYouLike (state, payload) {
      Vue.set(state.cats[state.catIndex], 'youLike', payload)
    },
    setItsAMatch (state, payload) {
      state.itsAMatch = payload
    },
    setRecentMatch (state, payload) {
      state.recentMatch = payload
    },
    setNewMatchStatus (state, payload) {
      Vue.set(state.cats[state.catIndex], 'newMatch', payload)
    },
    addToNewMatches (state, payload) {
      state.newMatches.push(payload)
    },
    removeFromNewMatches (state, payload) {
      state.newMatches
        .splice(state.newMatches.indexOf(payload), 1)
    },
    addToOldMatches (state, payload) {
      state.matches.push(payload)
    },
    setCurrentlyChattingWith (state, payload) {
      state.currentlyChattingWith = payload
    }
  },
  actions: {
    toggleProfileToggleLink ({ commit }) {
      if (router.currentRoute.path === '/') {
        commit('setProfileToggleLink', 'MatchersBio')
      }
      if (router.currentRoute.path === '/kitty') {
        commit('setProfileToggleLink', 'Matching')
      }
    },
    async getPussies ({ commit, getters, dispatch }) {
      if (!getters.needCats) return
      commit('setIsFetching', true)
      await fetch('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'x-api-key': 'f4b25062-f541-4566-8c77-eb27f9a03250'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          commit('resetCatIndex')
          commit('setCats', data)
          dispatch('addRandomAge')
          dispatch('forgeCatsAffections')
          commit('setIsFetching', false)
          commit('setNeedCats', false)
        })
        .catch((error) => {
          commit('setIsFetching', false)
          console.log(error)
        })
    },
    addRandomAge ({ commit, getters }) {
      for (let i = 0; i < getters.cats.length; i++) {
        const age = Math.floor(Math.random() * Math.floor(10) + 1)
        commit('addRandomAge', { payload: age, index: i })
      }
    },
    forgeCatsAffections ({ commit, getters }) {
      for (let i = 0; i < getters.cats.length; i++) {
        const likesYou = () => {
          const rng = Math.floor(Math.random() * Math.floor(10))
          return rng >= 7
        }
        commit('addAffection', { payload: likesYou(), index: i })
      }
    },
    incrementCatIndex ({ commit, state }) {
      commit('setCatIndex', state.catIndex + 1)
    },
    judgeCat ({ getters, commit, dispatch }, judgement) {
      if (getters.catIndex < 9) {
        commit('setYouLike', judgement)
        dispatch('checkMutualAffection', judgement)
        dispatch('incrementCatIndex')
      } else {
        commit('setYouLike', judgement)
        dispatch('checkMutualAffection', judgement)
        commit('setNeedCats', true)
        dispatch('getPussies')
      }
    },
    checkMutualAffection ({ getters, commit }, judgement) {
      if (judgement === true &&
        getters.cats[getters.catIndex].likesYou === getters.cats[getters.catIndex].youLike) {
        commit('setRecentMatch', getters.cats[getters.catIndex])
        commit('setNewMatchStatus', true)
        commit('addToNewMatches', getters.cats[getters.catIndex])
        commit('setItsAMatch', true)
      }
    },
    fromNewMatchesToOld ({ commit }, cat) {
      commit('addToOldMatches', cat)
      commit('removeFromNewMatches', cat)
    }

  }
})
