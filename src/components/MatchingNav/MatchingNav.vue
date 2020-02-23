<template>
  <nav class="nav nav--matching">
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'MatchingNav'
}
</script>

<style lang="scss">
  .nav--matching {
    border-bottom: none;
    justify-content: center;
  }
</style>
