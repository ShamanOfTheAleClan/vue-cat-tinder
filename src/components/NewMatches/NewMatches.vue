<template>
  <div class='new-matches'>
    <h4 class="new-matches__headline">NEW MATCHES</h4>
    <div class="new-matches__list">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewMatches'
}
</script>

<style lang="scss">
  .new-matches {
    padding: 20px 10px 20px 10px;
    border-bottom: 2px #eee solid;

    &__headline {
      font-family: 'Montserrat';
      color: #e76e54;
      margin-bottom: 20px;
    }

    &__list {
      display: flex;
      width: 100%;
      overflow-x: scroll;
      justify-content: flex-start;
    }
  }
</style>
