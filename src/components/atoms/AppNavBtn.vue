<template>

  <router-link
    :to="{name: href}"
    :class="classList2"
  >

    <div
      class = "link--nav"
      v-if="classExt === 'empty'"
    >
    </div>

    <div
      :class="classList"
      v-else=""
    >
      <img
        v-if="classExt === 'chat-companion'"
        :src="chatRecipientImage"
        class="chat-companion-image"
      >
    </div>

    <p
      v-if="classExt === 'chat-companion'"
      class="chat-companion-name"
    >
      {{ chatRecipientName }}
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
    classExt: {
      type: String,
      default: undefined,
      validator: function (value) {
        return [
          'tinder',
          'tinder--active',
          'chat',
          'chat--active',
          'profile',
          'profile--active',
          'back',
          'chat-companion',
          'empty'

        ].indexOf(value) !== -1
      }
    },
    chatRecipientImage: {
      type: String,
      default: undefined
    },
    chatRecipientName: {
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
        `link-logo__${this.classExt}`
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

<style lang="scss" scoped>
.link {

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
    background-image: url("../../assets/images/tinder-icon.svg");

    &--active {
      background-image: url('../../assets/images/tinder-icon--active.svg');
    }
  }

  &__chat {
    background-image: url("../../assets/images/chat-icon.svg");

    &--active {
      background-image: url('../../assets/images/chat-icon--active.svg');
    }
  }

  &__profile {
    background-image: url('../../assets/images/profile-icon.svg');

    &--active {
      background-image: url('../../assets/images/profile-icon--active.svg');
    }
  }

  &__back {
    background-image: url('../../assets/images/back.svg');
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
