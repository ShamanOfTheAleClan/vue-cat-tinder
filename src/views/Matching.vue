<template>
  <div class="matching">

    <AppNav>
      <AppNavBtn
        href=""
        logo="profile"
      ></AppNavBtn>

      <AppNavBtn
        href=""
        logo="tinder--active"
      ></AppNavBtn>

      <AppNavBtn
        href=""
        logo="chat"
      ></AppNavBtn>

    </AppNav>

    <Matcher></Matcher>

    <!-- MatchingNavigation component missing -->
    <!-- <MatchingNavigation></MatchingNavigation> -->
  </div>
</template>

<script>
import AppNav from '@/components/AppNav/AppNav'
import AppNavBtn from '@/components/AppNav/children/AppNavBtn'
import Matcher from '@/components/Matcher/Matcher'

export default {
  name: 'Matching',
  components: {
    AppNav,
    AppNavBtn,
    Matcher
  }
}
</script>

<style>
</style>
