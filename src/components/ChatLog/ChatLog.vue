<template>
  <div class="chat-log">
    <div
      :class="classList"
      v-for="(msg, index) of chatMessages"
      :key="index"
      :sender="msg.sender"
    >
      {{ msg.message }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ChatLog',
  data () {
    return {
      sender: undefined
    }
  },
  computed: {
    ...mapGetters({
      chatMessages: 'chatMessages'
    }),
    classList () {
      return [
        'chat-log__message',
        { 'chat-log__message--left': this.sender === 0 },
        { 'chat-log__message--right': this.sender === 1 }
      ]
    }
  }
}
</script>

<style lang="scss">
  .chat-log {
    height: calc(100vh - 84px - 64px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px;

    &__message {
      max-width: 75%;
      font-family: 'Montserrat';
      font-size: 16px;
      font-weight: 500;
      line-height: 1.25;
      letter-spacing: 0.025em;

      &--right {
        background-color: #2db4c8;
        color: #fff;
        padding: 10px 15px;
        align-self: flex-end;
        margin: 0 0 5px 0;
        border-radius: 20px 20px 5px 20px;

        & + & {
          border-radius: 20px 5px 5px 20px;
        }
      }
    }

  }
</style>
