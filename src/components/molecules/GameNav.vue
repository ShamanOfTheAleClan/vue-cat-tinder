<template>
  <nav
    :class="classList"
    v-if="!itsAMatch"
  >
    <slot />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GameNav',
  computed: {
    ...mapGetters({
      isInProfile: 'isInProfile',
      itsAMatch: 'itsAMatch'
    }),
    classList () {
      return [
        'nav',
        { 'nav--matching': !this.isInProfile },
        { 'nav--inverted': this.isInProfile }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {

    &--matching {
    border-bottom: none;
    justify-content: center;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 20px;
    }

    &--inverted {
      position: fixed;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.75);
      right: 0;
      left: 0;
      border-bottom: none;
      justify-content: center;
      padding-bottom: 20px;
      box-shadow: 0px 20px 20px 37px rgba(255, 255, 255, 0.75);
    }
  }
</style>
