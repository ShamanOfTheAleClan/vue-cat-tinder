<template>
  <div :class="classList"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MatchingNavBtn',
  computed: {
    ...mapGetters({
      kittyProfileURL: 'kittyProfileURL'
    }),
    classList () {
      return [
        { nav__button: this.$route.path !== this.kittyProfileURL },
        { 'nav__button--small': this.$route.path === this.kittyProfileURL },
        { 'nav__button--like': this.btnType === 'like' },
        { 'nav__button--dislike': this.btnType === 'dislike' }
      ]
    }
  },
  props: {
    btnType: {
      type: String,
      required: true,
      function (value) {
        return [
          'like',
          'dislike'
        ].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss">
  .nav__button {
    border-radius: 50%;
    height: 125px;
    width: 125px;
    border: 12px solid #eee;
    background-color: #fff;
    margin: 0 -6px;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.5s cubic-bezier(0.41, -0.32, 0.62, 1.42);

    &--small {
      border-radius: 50%;
      height: 60px;
      width: 60px;
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.25s cubic-bezier(0.41, -0.32, 0.62, 1.42);

    }

    &--like {
      background-image: url('../../../assets/images/meow.svg');
    }

    &--dislike {
      background-image: url('../../../assets/images/neow.svg');
      background-size: 40%;
    }
  }

  .nav__button--small.nav__button--like {
    background-color: #49cc93;
    background-image: url('../../../assets/images/meow--inverted.svg');
    box-shadow: 1px 1px 5px 0px rgb(52, 145, 105);
  }

  .nav__button--small.nav__button--dislike {
    background-color: #e76e54;
    background-image: url('../../../assets/images/neow--inverted.svg');
    box-shadow: 1px 1px 5px 0px rgb(161, 77, 59);
  }
</style>
