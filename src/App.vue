<template>
  <div :class="classList">
    <ItsAMatchScreen
      v-if="itsAMatch"
    ></ItsAMatchScreen>
    <!-- AppNav component missing -->
    <router-view></router-view>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ItsAMatchScreen from '@/components/ItsAMatchScreen/ItsAMatchScreen'

export default {
  name: 'App',
  data () {
    return {
      route: console.log(this)
    }
  },
  components: {
    ItsAMatchScreen
  },
  computed: {
    ...mapGetters({
      itsAMatch: 'itsAMatch'
    }),
    classList () {
      return [
        'app'
      ]
    }
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
