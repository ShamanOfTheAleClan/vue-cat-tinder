<template>
  <div :class="classList"></div>
</template>

<script>
export default {
  name: 'MatchingNavBtn',
  computed: {
    classList () {
      return [
        'nav__button',
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

    &--like {
      background-image: url('../../../assets/images/meow.svg');
    }

    &--dislike {
      background-image: url('../../../assets/images/neow.svg');
      background-size: 40%;
    }
  }
</style>
