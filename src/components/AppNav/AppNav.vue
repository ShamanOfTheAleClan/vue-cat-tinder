<template>
  <nav
    class="nav"
  >
  <slot />
  </nav>
</template>

<script>
// import smth from '@/components/AppNav/children/'

export default {
  name: 'AppNav'
}
</script>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px #eee solid;
    padding: 10px 5px 5px 5px ;
  }
</style>
