import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    isInProfile: false,
    cats: [],
    catIndex: undefined,
    isFetching: false,
    needCats: true,
    itsAMatch: false,
    recentMatch: undefined,
    newMatches: [],
    matches: [],
    currentlyChattingWith: undefined

  }),
  getters: {
    isInProfile: state => state.isInProfile,
    cats: state => state.cats,
    catIndex: state => state.catIndex,
    isFetching: state => state.isFetching,
    needCats: state => state.needCats,
    itsAMatch: state => state.itsAMatch,
    recentMatch: state => state.recentMatch,
    newMatches: state => state.newMatches,
    oldMatches: state => state.matches,
    currentlyChattingWith: state => state.currentlyChattingWith,
    chatMessages: state => state.currentlyChattingWith.chatMessages
  },

  mutations: {
    setIsInProfile (state, payload) {
      state.isInProfile = payload
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
    incrementCatIndex (state) {
      state.catInex++
    },
    formatCats (state, index) {
      Vue.set(state.cats[index], 'age', undefined)
      Vue.set(state.cats[index], 'likesYou', undefined)
      Vue.set(state.cats[index], 'youLike', undefined)
      Vue.set(state.cats[index], 'newMatch', undefined)
      Vue.set(state.cats[index], 'chatMessages', [])
    },
    addRandomAge (state, { payload, index }) {
      state.cats[index].age = payload
    },
    addAffection (state, { payload, index }) {
      state.cats[index].likesYou = payload
    },
    setIsFetching (state, payload) {
      state.isFetching = payload
    },
    setNeedCats (state, payload) {
      state.needCats = payload
    },
    setYouLike (state, payload) {
      state.cats[state.catIndex].youLike = payload
    },
    setItsAMatch (state, payload) {
      state.itsAMatch = payload
    },
    setRecentMatch (state, payload) {
      state.recentMatch = payload
    },
    setNewMatchStatus (state, payload) {
      state.cats[state.catIndex].newMatch = payload
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
    clearMatches (state, payload) {
      state.matches = []
      state.newMatches = []
    },
    setCurrentlyChattingWith (state, payload) {
      state.currentlyChattingWith = payload
    },
    addToChatLog (state, payload) {
      state.currentlyChattingWith.chatMessages.push(payload)
    }

  },
  actions: {
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
          console.log(data)

          commit('resetCatIndex')
          commit('setCats', data)
          getters.cats.forEach((e, i) => {
            commit('formatCats', i)
          })
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
    fromNewMatchesToOld ({ commit }, cat) {
      commit('addToOldMatches', cat)
      commit('removeFromNewMatches', cat)
    },
    getMatchesFromServer ({ commit }) {
      // lets pretend our localStorage is the server

      const cache = JSON.parse(localStorage.getItem('matches'))
      if (cache) {
        commit('clearMatches')
        for (const cat of cache.newMatches) {
          commit('addToNewMatches', cat)
        }
        for (const cat of cache.oldMatches) {
          commit('addToOldMatches', cat)
        }
      }
    },
    storeMatchToLocalStorage ({ getters }) {
      const matches = {
        newMatches: [...getters.newMatches],
        oldMatches: [...getters.oldMatches]
      }
      localStorage.setItem('matches', JSON.stringify(matches))
    }

  }
})
