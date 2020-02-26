<template>
  <div class="chat-input">
    <textarea
      class="chat-input__input"
      id="chatInputInput"
      :placeholder="placeholder"
      rows="1"
      v-model="messageInput"
      v-on:keyup.enter="sendMsg()"
    ></textarea>
      <button
        class="button button--send-msg"
        @click="sendMsg()"
      >
        {{ btnText }}
      </button>

  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'ChatInput',
  data () {
    return {
      messageInput: undefined,
      catIsResponding: false,
      catResponse: [
        'Meow',
        'Mau',
        'Purrrr',
        '...',
        '*yawns*',
        '*continues to ignore you*',
        'Get back to your duties, mortal',
        'MEOW',
        '?'
      ]
    }
  },
  props: {
    placeholder: {
      type: String,
      default: undefined
    },
    btnText: {
      type: String,
      default: undefined
    }
  },
  methods: {
    ...mapActions({
      storeMatchToLocalStorage: 'storeMatchToLocalStorage'
    }),
    ...mapMutations({
      addToChatLog: 'addToChatLog'

    }),
    sendMsg () {
      if (this.messageInput) {
        // addChatMessageToLog
        const packet = {
          sender: 1,
          message: this.messageInput,
          timeStamp: new Date().getTime()
        }
        this.addToChatLog(packet)
        this.storeMatchToLocalStorage()
        this.messageInput = ''

        // fake cat response
        if (!this.catIsResponding) {
          this.catIsResponding = true

          setTimeout(() => {
            // choose random message
            const rng = Math.floor(Math.random() * this.catResponse.length)
            const packet = {
              sender: 0,
              message: this.catResponse[rng],
              timeStamp: new Date().getTime()
            }
            this.addToChatLog(packet)

            this.storeMatchToLocalStorage()
            this.catIsResponding = false
            // set random response time in between
            // 2s-7s
          }, Math.floor(Math.random() * 5000 + 2000))
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .chat-input {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;

    &__input {
      display: block;
      font-size: 18px;
      font-family: 'Montserrat';
      padding: 10px 70px 10px 20px;
      background-color: #f8f8f8;
      border: 1px solid #cecece;
      border-radius: 20px;
      width: 100%;
      resize: none;
      outline: none;

      &::placeholder {
        color: #cecece;
      }
    }

  }

  .button--send-msg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #cecece;
    right: 20px;
    border: none;
    width: auto;
    height: auto;
    margin: 0;
  }
</style>
