<template>
  <nav
    class="nav"
  >
  <AppNavBtn
    :href="btn1Href"
    :classExt="btn1ClassExt"
  ></AppNavBtn>

  <AppNavBtn
    :href="btn2Href"
    :classExt="btn2ClassExt"
    :chatRecipientImage="chatRecipientImage"
    :chatRecipientName="chatRecipientName"
    :chatProfileLink="chatProfileLink"
  ></AppNavBtn>

  <AppNavBtn
    :href="btn3Href"
    :classExt="btn3ClassExt"
  ></AppNavBtn>

  </nav>
</template>

<script>
import AppNavBtn from '@/components/atoms/AppNavBtn'

export default {
  name: 'AppNav',
  props: {
    btn1Href: {
      type: String,
      default: undefined
    },
    btn1ClassExt: {
      type: String,
      default: undefined
    },
    btn2Href: {
      type: String,
      default: undefined
    },
    btn2ClassExt: {
      type: String,
      default: undefined
    },
    btn3Href: {
      type: String,
      default: undefined
    },
    btn3ClassExt: {
      type: String,
      default: undefined
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
  components: {
    AppNavBtn
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    justify-content: space-between;
    border-bottom: 2px #eee solid;
    padding: 10px 5px 5px 5px;

  }
</style>
