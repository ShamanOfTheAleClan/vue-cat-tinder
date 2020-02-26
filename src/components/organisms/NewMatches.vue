<template>
  <div class='new-matches'>
    <h4 class="new-matches__headline">NEW MATCHES</h4>
    <div class="new-matches__list">

      <NewMatchesSingle
        v-for="(match, index) of newMatches"
        :key="index"
        :imgHref="match.url"
        :name="match.breeds[0].name"
        :catObject="match"
      ></NewMatchesSingle>

    </div>
  </div>
</template>

<script>
import NewMatchesSingle from '@/components/molecules/NewMatchesSingle'
import { mapGetters } from 'vuex'

export default {
  name: 'NewMatches',
  components: {
    NewMatchesSingle
  },
  computed: {
    ...mapGetters({
      newMatches: 'newMatches'
    })
  }
}
</script>

<style lang="scss" scoped>
  .new-matches {
    padding: 20px 10px 20px 10px;
    border-bottom: 2px #eee solid;

    &__headline {
      font-family: 'Montserrat';
      color: #e76e54;
      margin-bottom: 20px;
    }

    &__list {
      display: flex;
      width: 100%;
      overflow-x: scroll;
      justify-content: flex-start;
    }
  }
</style>
