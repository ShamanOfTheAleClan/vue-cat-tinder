<template>
  <div class="app">

    <AppNav
      v-if="currentPath === '/Chat'"
      class="nav--shadowed"
      btn1Href="Matches"
      btn1ClassExt="back"
      btn2Href=""
      btn2ClassExt="chat-companion"
      :chatRecipientImage="currentlyChattingWith.url"
      :chatRecipientName="currentlyChattingWith.breeds[0].name"
      :chatProfileLink="true"
      btn3ClassExt="empty"
    ></AppNav>

    <AppNav
      v-else-if="currentPath === '/Matches'"
      btn1Href="Game"
      btn1ClassExt="tinder"
      btn2Href=""
      btn2ClassExt="chat--active"
      btn3ClassExt="empty"
    ></AppNav>

    <AppNav
      v-if="currentPath === '/'"
      btn1Href=""
      btn1ClassExt="profile"
      btn2Href=""
      btn2ClassExt="tinder--active"
      btn3Href="Matches"
      btn3ClassExt="chat"
    ></AppNav>

    <ItsAMatchScreen
      v-if="itsAMatch"
    ></ItsAMatchScreen>

    <keep-alive :include="['Game', 'Matches']"
    >
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItsAMatchScreen from '@/components/organisms/ItsAMatchScreen'
import AppNav from '@/components/organisms/AppNav'

export default {
  name: 'App',
  data () {
    return {
      route: console.log(this)
    }
  },
  components: {
    ItsAMatchScreen,
    AppNav
  },
  computed: {
    ...mapGetters({
      itsAMatch: 'itsAMatch',
      currentlyChattingWith: 'currentlyChattingWith'
    }),
    currentPath () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
  .link {
    text-decoration: none;
    color: unset;
  }

  .nav {
    display: flex;
    transition: 0.5s cubic-bezier(0.41, -0.32, 0.62, 1.42);
  }

</style>
