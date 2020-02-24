<template>
  <div class="match-list">
    <h4 class="match-list__headline">MESSAGES</h4>
    <div class="match-list__list">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchList'
}
</script>

<style lang="scss">
  .match-list {
    font-family: 'Montserrat';
    padding: 20px 10px;

    &__headline {
      color: #e76e54;
    }

    &__list {
      padding-top: 20px;
    }
  }

</style>
