<template>
  <div class="cat-loader">

  </div>

</template>

<script>
export default {
  name: 'AppLoader'
}
</script>

<style lang="scss" scoped>
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .cat-loader {
    position: absolute;
    top: calc(40% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    background-image: url('../../assets/images/cat-loader.png');
    background-size: contain;
    background-position: center;
    animation-name: loading;
    animation-play-state: running;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    transform-origin: center;
    animation-direction: reverse;
    animation-timing-function: linear;
  }

</style>
