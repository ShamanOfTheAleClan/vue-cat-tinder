<template>
  <div
    class="chat-log"
    ref='chatLog'
  >
    <div
      v-for="(msg, index) of chatMessages"
      :class="['chat-log__message',
        { 'chat-log__message--left': msg.sender === 0 },
        { 'chat-log__message--right': msg.sender === 1 }]"
      :key="index"
      ref="msg"
    >
      {{ msg.message }}
      <span class="chat-log__timestamp"> {{ getTimePassed(msg.timeStamp) }}ago</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ChatLog',
  mounted () {
    this.$refs.chatLog.scrollTop = this.$refs.chatLog.scrollHeight
  },
  updated () {
    this.$refs.chatLog.scrollTop = this.$refs.chatLog.scrollHeight
  },
  data () {
    return {
      sender: undefined
    }
  },
  computed: {
    ...mapGetters({
      chatMessages: 'chatMessages'
    })

  },
  methods: {
    getTimePassed (time) {
      const timeNow = new Date().getTime()
      const timePassed = new Date(timeNow - time).getTime()
      if (new Date(timePassed).getMinutes() < 60) {
        const response = new Date(timePassed).getMinutes()
        return `${response} min. `
      }
      if (new Date(timePassed).getHours() < 24) {
        const response = new Date(timePassed).getHours()
        return `${response} hr. `
      }
      const response = new Date(timePassed).getDay()
      return `${response} d. `
      // yes, after 7 days it will show 0 d. again. Im aware
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat-log {
    height: calc(100vh - 84px - 64px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px;
    overflow: scroll;

    &__message {
      position: relative;
      max-width: 75%;
      font-family: 'Montserrat';
      font-size: 16px;
      font-weight: 500;
      line-height: 1.25;
      letter-spacing: 0.025em;
      padding: 10px 15px;
      margin: 0 0 20px 0;

      &--right {
        background-color: #2db4c8;
        color: #fff;
        align-self: flex-end;
        border-radius: 20px 20px 5px 20px;

        & + & {
          border-radius: 20px 5px 5px 20px;
        }
      }

      &--left {
        background-color: #e5e5e5;
        color: #000;
        align-self: flex-start;
        border-radius: 20px 20px 20px 5px;

        & + & {
          border-radius: 5px 20px 20px 5px;
        }
      }
    }

    &__timestamp {
      position: absolute;
      bottom: -16px;
      font-size: 12px;
      font-weight: 400;
      white-space: nowrap;
    }

    &__message--right > &__timestamp {
      right: 5px;
      color: #000;
    }

    &__message--left > &__timestamp {
      left: 10px;
    }

  }
</style>
