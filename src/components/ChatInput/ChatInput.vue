<template>
  <div class="chat-input">
    <textarea
      class="chat-input__input"
      id="chatInputInput"
      :placeholder="placeholder"
      rows="1"
      v-model="messageInput"
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
import { mapActions } from 'vuex'
export default {
  name: 'ChatInput',
  data () {
    return {
      messageInput: undefined
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
      addChatMessageToLog: 'addChatMessageToLog',
      storeMatchToLocalStorage: 'storeMatchToLocalStorage'
    }),
    sendMsg () {
      this.addChatMessageToLog({
        sender: 1,
        msg: this.messageInput
      })
      this.storeMatchToLocalStorage()
      this.messageInput = ''
    }
  }

}
</script>

<style lang="scss">
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
