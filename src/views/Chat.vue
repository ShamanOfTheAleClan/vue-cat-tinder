<template>
  <div class="chat">

    <AppNav>
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

  </div>
</template>

<script>
import AppNav from '@/components/AppNav/AppNav'
import AppNavBtn from '@/components/AppNav/children/AppNavBtn'
import { mapGetters } from 'vuex'

export default {
  name: 'Chat',
  components: {
    AppNav,
    AppNavBtn
  },
  computed: {
    ...mapGetters({
      currentlyChattingWith: 'currentlyChattingWith'
    })
  }
}
</script>

<style>

</style>
