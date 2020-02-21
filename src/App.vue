<template>
  <div class="app">

    <!-- AppNav component missing -->
    <router-view></router-view>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapMutations({

    }),
    ...mapActions({

    })
  }
}
</script>

<style>

</style>
