<template>
  <div class="matching">

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
        href=""
        logo="chat"
      ></AppNavBtn>

    </AppNav>

    <Matcher
      profilePic="cat.jpg"
    >
      <MatcherInfo
        name="Kitty"
        :age="2"
        funFact="You both like napping"
      >
        <router-view></router-view>
      </MatcherInfo>
    </Matcher>

    <MatchingNav>
      <MatchingNavBtn
        btnType="dislike"
      ></MatchingNavBtn>
      <MatchingNavBtn
        btnType="like"
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
import { mapGetters } from 'vuex'

export default {
  name: 'Matching',
  computed: {
    ...mapGetters({
      kittyProfileURL: 'kittyProfileURL'
    })
  },
  components: {
    AppNav,
    AppNavBtn,
    Matcher,
    MatcherInfo,
    MatchingNav,
    MatchingNavBtn
  }
}
</script>

<style>
</style>
