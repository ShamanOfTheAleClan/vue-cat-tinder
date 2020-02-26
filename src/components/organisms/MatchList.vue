<template>
  <div class="match-list">
    <h4 class="match-list__headline">MESSAGES</h4>
    <div class="match-list__list">

      <MatchListSingle
        v-for="(match, index) of oldMatches"
        :key="index"
        :imgHref="match.url"
        :name="match.breeds[0].name"
        :catObject="match"
      ></MatchListSingle>

    </div>
  </div>
</template>

<script>
import MatchListSingle from '@/components/molecules/MatchListSingle'
import { mapGetters } from 'vuex'

export default {
  name: 'MatchList',
  components: {
    MatchListSingle
  },
  computed: {
    ...mapGetters({
      oldMatches: 'oldMatches'
    })
  }
}
</script>

<style lang="scss" scoped>
  .match-list {
    font-family: 'Montserrat';
    padding: 20px 10px;

    &__headline {
      color: #e76e54;
    }

    &__list {
      padding-top: 20px;
    }
  }

</style>
