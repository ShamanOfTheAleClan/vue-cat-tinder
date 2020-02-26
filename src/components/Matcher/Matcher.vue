<template>
  <router-link
    :to="{name: profileToggleLink}"
    class="link"
    @click.native="toggleProfileToggleLink()"
    >
    <section :class="classList1">
      <img
        :src="profilePic"
        :class="classList2"
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
      profileToggleLink: 'profileToggleLink',
      kittyProfileURL: 'kittyProfileURL'
    }),
    classList1 () {
      return [
        'matcher',
        { 'matcher--opened': this.$route.path === this.kittyProfileURL }
      ]
    },
    classList2 () {
      return [
        'matcher__photo',
        { 'matcher__photo--opened': this.$route.path === this.kittyProfileURL }
      ]
    }
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
  @keyframes enlarge {
    from {
      margin: 67px  auto 0 auto;
    }
    to {
      margin: 0 auto;
    }
  }
  @keyframes shrink {
    from {
      margin: 0;
    }
    to {
      margin: 0 auto;
    }
  }

  .matcher {
    border-radius: 15px;
    width: calc(100% - 20px);
    max-width: 400px;
    margin: 10px auto;
    overflow: hidden;
    border: 2px solid #eee;
    transition: 0.25s ease-in-out;
    // animation-name: shrink;
    // animation-duration: 0.25s;

    &--opened {
      margin: 0 auto;
      width: 100%;
      border-radius: 0px;
      max-width: none;
      border: none;
      padding-bottom: 100px;
      animation-name: enlarge;
      animation-duration: 0.25s;
      animation-fill-mode: both;
    }

    &__photo {
      object-fit: cover;
      width: 100%;
      height: 55vh;
      transition: 0.25s ease-in-out;

      &--opened {
        height: 50vh;
      }
    }
  }
</style>
