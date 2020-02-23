<template>
  <nav :class="classList">
    <slot />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MatchingNav',
  computed: {
    ...mapGetters({
      kittyProfileURL: 'kittyProfileURL'
    }),
    classList () {
      return [
        'nav',
        { 'nav--matching': this.$route.path !== this.kittyProfileURL },
        { 'nav--inverted': this.$route.path === this.kittyProfileURL }
      ]
    }
  }
}
</script>

<style lang="scss">
  .nav {
    transition: 0.5s cubic-bezier(0.41, -0.32, 0.62, 1.42);

    &--matching {
    border-bottom: none;
    justify-content: center;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    }

    &--inverted {
      position: fixed;

      bottom: 0;
      background-color: rgba(255, 255, 255, 0.75);
      right: 0;
      left: 0;
      border-bottom: none;
      justify-content: space-evenly;
      padding-bottom: 20px;
      box-shadow: 0px 20px 20px 37px rgba(255, 255, 255, 0.75);
    }
  }
</style>
