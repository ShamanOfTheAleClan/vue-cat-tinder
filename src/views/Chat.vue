<template>
  <div class="chat">

    <AppNav
      class="nav--shadowed"
    >
      <AppNavBtn
        href="Matches"
        logo="back"
      ></AppNavBtn>

      <AppNavBtn
        href=""
        logo="chat-companion"
        :chatCompanionImage="currentlyChattingWith.url"
        :chatCompanionName="currentlyChattingWith.breeds[0].name"
        :chatProfileLink="true"
      ></AppNavBtn>

      <div class="link--nav"></div>

    </AppNav>

    <ChatLog></ChatLog>

    <ChatInput
      placeholder="Type a message"
      btnText="Send"
    ></ChatInput>

  </div>
</template>

<script>
import AppNav from '@/components/AppNav/AppNav'
import AppNavBtn from '@/components/AppNav/children/AppNavBtn'
import ChatInput from '@/components/ChatInput/ChatInput'
import ChatLog from '@/components/ChatLog/ChatLog'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Chat',
  updated () {
    this.storeMatchToLocalStorage()
  },
  components: {
    AppNav,
    AppNavBtn,
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

<style class="scss">
  .nav--shadowed {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
</style>
