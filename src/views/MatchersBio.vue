<template>
  <div>
    <div class="line"></div>
    <p class="matcher__bio">{{ cats[catIndex].breeds[0].description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MathersBio',
  computed: {
    ...mapGetters({
      cats: 'cats',
      catIndex: 'catIndex'
    })
  }
}
</script>

<style lang="scss">
  .matcher__bio {
    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #888;
  }

  .line {
    border-bottom: 1px solid #eee;
    // width: 100%;
    margin: 30px -20px;
  }
</style>
