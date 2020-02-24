<template>
  <div class="matches">

    <AppNav>
      <AppNavBtn
        href="Matching"
        logo="tinder"
      ></AppNavBtn>

      <AppNavBtn
        href=""
        logo="chat--active"
      ></AppNavBtn>

      <div class="link--nav"></div>

    </AppNav>

    <NewMatches
      v-if="newMatches.length > 0"
    >
      <SingleNewMatch
        v-for="(match, index) of newMatches"
        :key="index"
        :imgHref="match.url"
        :name="match.breeds[0].name"
        :catObject="match"
      ></SingleNewMatch>
    </NewMatches>

    <MatchList
      v-if="oldMatches.length > 0"
    >
      <SingleMatch
        v-for="(match, index) of oldMatches"
        :key="index"
        :imgHref="match.url"
        :name="match.breeds[0].name"
        :catObject="match"
      ></SingleMatch>
    </MatchList>

  </div>
</template>

<script>
import AppNav from '@/components/AppNav/AppNav'
import AppNavBtn from '@/components/AppNav/children/AppNavBtn'
import NewMatches from '@/components/NewMatches/NewMatches'
import SingleNewMatch from '@/components/NewMatches/children/SingleNewMatch'
import MatchList from '@/components/MatchList/MatchList'
import SingleMatch from '@/components/MatchList/children/SingleMatch'
import { mapGetters } from 'vuex'

export default {
  name: 'Matches',
  components: {
    AppNav,
    AppNavBtn,
    NewMatches,
    SingleNewMatch,
    MatchList,
    SingleMatch
  },
  computed: {
    ...mapGetters({
      oldMatches: 'oldMatches',
      newMatches: 'newMatches'
    })
  }
}
</script>

<style>

</style>
