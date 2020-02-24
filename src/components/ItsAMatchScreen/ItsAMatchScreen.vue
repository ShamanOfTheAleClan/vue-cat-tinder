<template>
  <section class="its-a-match">
    <h1 class="heading1">It's a Match!</h1>
    <p class="text">You and {{ recentMatch.breeds[0].name }} like each other.</p>
    <div class="love-cats">
      <img class="love-cats__image" src="" alt="">
      <img class="love-cats__image" :src="recentMatch.url" alt="">
    </div>

    <button
      class="button"

    >Send Message</button>
    <button
      class="button"
      @click="keepPlaying"
    >Keep Playing</button>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ItsAMatchScreen',
  computed: {
    ...mapGetters({
      cats: 'cats',
      recentMatch: 'recentMatch'
    })
  },
  methods: {
    ...mapMutations({
      setItsAMatch: 'setItsAMatch'
    }),
    keepPlaying () {
      this.setItsAMatch(false)
    }
  }
}
</script>

<style lang="scss">
  .its-a-match {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  .heading1 {
    font-family: "Montez";
    color: #fff;
    font-size: 72px;
    text-align: center;
    margin-bottom: 20px;
  }

  .text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }
  .love-cats {
    display: flex;
    justify-content: space-between;
    width: 320px;
    margin: 0 auto 50px auto;

    &__image {
      border-radius: 50%;
      height: 150px;
      width: 150px;
      object-fit: cover;
      object-position: center;
      border: 4px solid #fff;
    }
  }

  .button {
    display: block;
    margin: 0 auto 20px auto;
    width: 85%;
    height: 70px;
    background: none;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-family: 'Montserrat';
    font-size: 18px;
  }

</style>
