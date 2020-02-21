<template>
  <router-link :to="{name: href}" class="link">
    <div :class="classList"></div>
  </router-link>
</template>

<script>
export default {
  name: 'AppNavBtn',
  props: {
    href: {
      type: String,
      default: undefined
    },
    logo: {
      type: String,
      default: undefined
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return [
        'link-logo',
        `link-logo__${this.logo}`,
        { activeLogoClass: this.active }
      ]
    }
  }
}
</script>

<style lang="scss">
.link {
  width: 50px;
}

.link-logo {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 35px;
  width: 100%;

  &__tinder {
    background-image: url("../../../assets/images/tinder-icon.svg");

    &--active {
      background-image: url('../../../assets/images/tinder-icon--active.svg');
    }
  }

  &__chat {
    background-image: url("../../../assets/images/chat-icon.svg");
  }

  &__profile {
    background-image: url('../../../assets/images/profile-icon.svg');
  }
}
</style>
