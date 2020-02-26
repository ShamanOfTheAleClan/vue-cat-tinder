<template>
  <div class="chat">

    <ChatLog></ChatLog>

    <ChatInput
      placeholder="Type a message"
      btnText="Send"
    ></ChatInput>

  </div>
</template>

<script>
import ChatInput from '@/components/molecules/ChatInput'
import ChatLog from '@/components/molecules/ChatLog'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Chat',
  updated () {
    this.storeMatchToLocalStorage()
  },
  components: {
    ChatInput,
    ChatLog
  },
  computed: {
    ...mapGetters({
      currentlyChattingWith: 'currentlyChattingWith'
    })
  },
  methods: {
    ...mapActions({
      storeMatchToLocalStorage: 'storeMatchToLocalStorage'
    })
  }
}
</script>

<style class="scss" scoped>
  .nav--shadowed {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
</style>
