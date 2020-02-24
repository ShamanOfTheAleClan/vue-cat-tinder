<template>
  <div :class="classList">

    <AppNav v-if="$route.path !== kittyProfileURL">
      <AppNavBtn
        href=""
        logo="profile"
      ></AppNavBtn>

      <AppNavBtn
        href=""
        logo="tinder--active"
      ></AppNavBtn>

      <AppNavBtn
        href="Matches"
        logo="chat"
      ></AppNavBtn>

    </AppNav>

    <Matcher
      :profilePic="cats[catIndex].url"
      v-if="!isFetching"
    >
      <MatcherInfo
        :name="cats[catIndex].breeds[0].name"
        :age="cats[catIndex].age"
        funFact="You both like napping"
      >
        <router-view></router-view>
      </MatcherInfo>
    </Matcher>

    <MatchingNav>
      <MatchingNavBtn
        btnType="dislike"
        @click='judgeCat(false)'
      ></MatchingNavBtn>
      <MatchingNavBtn
        btnType="like"
        @click='judgeCat(true)'
      ></MatchingNavBtn>
    </MatchingNav>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav/AppNav'
import AppNavBtn from '@/components/AppNav/children/AppNavBtn'
import Matcher from '@/components/Matcher/Matcher'
import MatcherInfo from '@/components/Matcher/children/MatcherInfo'
import MatchingNav from '@/components/MatchingNav/MatchingNav'
import MatchingNavBtn from '@/components/MatchingNav/children/MatchingNavBtn'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Matching',
  created () {
    this.getPussies()
  },
  computed: {
    ...mapGetters({
      kittyProfileURL: 'kittyProfileURL',
      cats: 'cats',
      catIndex: 'catIndex',
      isFetching: 'isFetching',
      recentMatch: 'recentMatch',
      itsAMatch: 'itsAMatch'
    }),
    classList () {
      return [
        'matching',
        { 'matching--blurred': this.itsAMatch }
      ]
    }
  },
  components: {
    AppNav,
    AppNavBtn,
    Matcher,
    MatcherInfo,
    MatchingNav,
    MatchingNavBtn
  },
  methods: {
    ...mapActions({
      getPussies: 'getPussies',
      judgeCat: 'judgeCat'
    })
  }
}
</script>

<style lang="scss">
  .matching--blurred {
    filter: blur(20px);
  }
</style>
