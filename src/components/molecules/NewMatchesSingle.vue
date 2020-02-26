<template>
  <router-link
    :to="{name:'Chat'}"
    class="link"
    @click.native="setCurrentlyChattingWith(catObject)
    fromNewMatchesToOld(catObject)"
  >
    <div class="new-match">
      <img
        :src="imgHref"
        class="new-match__photo"
      >
      <p class="new-match__name">{{ name }}</p>
    </div>
  </router-link>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'NewMatchesSingle',
  props: {
    imgHref: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: undefined
    },
    catObject: {
      type: Object,
      default: undefined
    }
  },
  methods: {
    ...mapMutations({
      setCurrentlyChattingWith: 'setCurrentlyChattingWith'
    }),
    ...mapActions({
      fromNewMatchesToOld: 'fromNewMatchesToOld'
    })
  }
}
</script>

<style lang="scss" scoped>
  .new-match {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90px;
    margin-right: 10px;

    &__photo {
      border-radius: 50%;
      height: 85px;
      width: 85px;
      margin-bottom: 5px;
      object-fit: cover;
      object-position: center;
    }

    &__name {
      font-size: 16px;
      font-weight: 600;
      font-family: 'Montserrat';
      width: 100%;
      text-align: center;
      color: #333;
    }
  }
</style>
