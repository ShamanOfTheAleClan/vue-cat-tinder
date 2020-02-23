<template>
  <router-link
    :to="{name: profileToggleLink}"
    class="link"
  >
    <section class="matcher">
      <img
        :src="require('@/assets/images/' + profilePic)" class="matcher__photo"
        @click="toggleProfileToggleLink()"
      >
      <slot />
    </section>
  </router-link>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Matcher',
  mounted () {
    this.toggleProfileToggleLink()
  },
  props: {
    profilePic: {
      type: String,
      default: undefined
    }
  },
  computed: {
    ...mapGetters({
      profileToggleLink: 'profileToggleLink'
    })
  },
  methods: {
    ...mapMutations({
      setProfileToggleLink: 'setProfileToggleLink'
    }),
    ...mapActions({
      toggleProfileToggleLink: 'toggleProfileToggleLink'
    })
  }
}
</script>

<style lang="scss">
  .matcher {
    border-radius: 15px;
    width: calc(100% - 20px);
    max-width: 400px;
    margin: 10px auto;
    overflow: hidden;
    border: 2px solid #eee;

    &__photo {
      object-fit: cover;
      width: 100%;
      height: 55vh;
    }
  }
</style>
