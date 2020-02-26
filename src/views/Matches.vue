<template>
  <div class="matches">

    <NewMatches
      v-if="newMatches.length > 0"
    ></NewMatches>

    <MatchList
      v-if="oldMatches.length > 0"
    ></MatchList>

  </div>
</template>

<script>
import NewMatches from '@/components/organisms/NewMatches'
import MatchList from '@/components/organisms/MatchList'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Matches',
  beforeMount () {
    this.getMatchesFromServer()
  },
  updated () {
    this.storeMatchToLocalStorage()
  },
  components: {
    NewMatches,
    MatchList
  },
  computed: {
    ...mapGetters({
      oldMatches: 'oldMatches',
      newMatches: 'newMatches'
    })
  },
  methods: {
    ...mapActions({
      getMatchesFromServer: 'getMatchesFromServer',
      storeMatchToLocalStorage: 'storeMatchToLocalStorage'
    })
  }
}
</script>

<style>
</style>
