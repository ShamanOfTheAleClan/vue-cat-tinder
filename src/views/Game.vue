<template>
  <div :class="classList">

    <GameCard
      v-if="!isFetching"
    ></GameCard>

    <GameNav
      v-if="!isFetching"
    >

      <GameNavBtn
        btnType="dislike"
        @click='judgeCat(false)'
      ></GameNavBtn>

      <GameNavBtn
        btnType="like"
        @click='judgeCat(true)'
      ></GameNavBtn>

    </GameNav>
  </div>
</template>

<script>
import GameCard from '@/components/organisms/GameCard'
import GameNav from '@/components/molecules/GameNav'
import GameNavBtn from '@/components/atoms/GameNavBtn'

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Game',
  created () {
    this.getPussies()
      .then(() => {
        this.preloadImage()
      })
  },

  computed: {
    ...mapGetters({
      cats: 'cats',
      catIndex: 'catIndex',
      isFetching: 'isFetching',
      recentMatch: 'recentMatch',
      itsAMatch: 'itsAMatch'
    }),
    classList () {
      return [
        'game',
        { 'game--blurred': this.itsAMatch }
      ]
    }
  },
  components: {
    GameCard,
    GameNav,
    GameNavBtn
  },
  methods: {
    ...mapActions({
      getPussies: 'getPussies',
      judgeCat: 'judgeCat',
      storeMatchToLocalStorage: 'storeMatchToLocalStorage'
    }),
    ...mapMutations({
      setYouLike: 'setYouLike',
      setRecentMatch: 'setRecentMatch',
      setNewMatchStatus: 'setNewMatchStatus',
      addToNewMatches: 'addToNewMatches',
      setItsAMatch: 'setItsAMatch',
      incrementCatIndex: 'incrementCatIndex',
      setNeedCats: 'setNeedCats'
    }),
    checkMutualAffection (judgement) {
      if (judgement === true &&
        this.cats[this.catIndex].likesYou ===
        this.cats[this.catIndex].youLike) {
        // if you get matched with last cat from array, you need to remember her
        // after new batch of cats instantly arrives and overrides old array
        // hence setRecentMatch
        this.setRecentMatch(this.cats[this.catIndex])
        this.setNewMatchStatus(true)
        this.addToNewMatches(this.cats[this.catIndex])
        this.setItsAMatch(true)
        this.storeMatchToLocalStorage()
      }
    },
    judgeCat (judgement) {
      if (this.catIndex < 9) {
        this.setYouLike(judgement)
        this.checkMutualAffection(judgement)
        this.incrementCatIndex()
        this.preloadImage()
      } else {
        this.setYouLike(judgement)
        this.checkMutualAffection(judgement)
        this.setNeedCats(true)
        this.getPussies()
          .then(() => {
            this.preloadImage()
          })
      }
    },
    preloadImage () {
      const img1 = new Image()
      const img2 = new Image()
      if (this.catIndex < 9) {
        img1.src = this.cats[this.catIndex + 1].url
      }
      if (this.catIndex < 8) {
        img2.src = this.cats[this.catIndex + 2].url
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--blurred {
      filter: blur(20px);
    }
  }
</style>
