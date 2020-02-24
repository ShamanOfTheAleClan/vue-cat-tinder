<template>
  <router-link
    :to="{name: href}"
    :class="classList2"
  >
    <div :class="classList">
      <img
        v-if="logo === 'chat-companion'"
        :src="chatCompanionImage"
        class="chat-companion-image"
      >
    </div>
    <p
      v-if="logo === 'chat-companion'"
      class="chat-companion-name"
    >
      {{ chatCompanionName }}
    </p>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
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
    },
    chatCompanionImage: {
      type: String,
      default: undefined
    },
    chatCompanionName: {
      type: String,
      default: undefined
    },
    chatProfileLink: {
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
    },
    classList2 () {
      return [
        'link',
        { 'link--nav': !this.chatProfileLink },
        { 'link--profile': this.chatProfileLink }
      ]
    },
    ...mapGetters({
      currentlyChattingWith: 'currentlyChattingWith'
    })
  }
}
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: unset;

  &--nav {
    width: 50px;
  }

  &--chatProfileLink {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.link-logo {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 100%;

  &__tinder {
    background-image: url("../../../assets/images/tinder-icon.svg");

    &--active {
      background-image: url('../../../assets/images/tinder-icon--active.svg');
    }
  }

  &__chat {
    background-image: url("../../../assets/images/chat-icon.svg");

    &--active {
      background-image: url('../../../assets/images/chat-icon--active.svg');
    }
  }

  &__profile {
    background-image: url('../../../assets/images/profile-icon.svg');

    &--active {
      background-image: url('../../../assets/images/profile-icon--active.svg');
    }
  }

  &__back {
    background-image: url('../../../assets/images/back.svg');
    height: 30px;
    margin-top: 10px;
  }

  &__chat-companion {
    height: auto;
    display: flex;
    justify-content: center;
  }
}

  .chat-companion-image {
    height: 50px;
    width: 50px;
    object-position: center;
    object-fit: cover;
    border-radius: 50%;
  }

  .chat-companion-name {
    font-family: 'Montserrat';
    color: #555;
    white-space: nowrap;
    text-align: center;
    font-size: 12px;
    margin-bottom: 2px;
  }
</style>
