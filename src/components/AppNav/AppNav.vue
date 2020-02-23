<template>
  <nav
    :class="classList"
  >
  <slot />
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppNav',
  computed: {
    ...mapGetters({
      viewingKittyProfile: 'viewingKittyProfile'
    }),
    classList () {
      return [
        'nav',
        { 'nav--hidden': this.viewingKittyProfile }
      ]
    }
  }
}
</script>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px #eee solid;
    padding: 10px 5px 5px 5px ;

    &--hidden {
      height: 0;
    }
  }
</style>
