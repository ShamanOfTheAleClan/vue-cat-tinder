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
  data () {
    return {
      route: console.log(this)
    }
  },
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
