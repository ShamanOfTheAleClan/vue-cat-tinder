<template>

    <section
      :class="classList1"
      @click="toggleProfileView()"
    >

      <img
        :src="cats[catIndex+incrementIndexBy].url"
        :class="classList2"
      >
      <GameCardInfo
        :name="cats[catIndex+incrementIndexBy].breeds[0].name"
        :age="cats[catIndex+incrementIndexBy].age"
        funFact="You both like napping"
      >
      </GameCardInfo>

      <GameCardBio
        v-if="isInProfile"
      ></GameCardBio>

    </section>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import GameCardBio from '@/components/molecules/GameCardBio'
import GameCardInfo from '@/components/molecules/GameCardInfo'

export default {
  name: 'Matcher',
  props: {
    incrementIndexBy: {
      type: Number,
      default: 0
    }
  },
  components: {
    GameCardBio,
    GameCardInfo
  },
  computed: {
    classList1 () {
      return [
        'matcher',
        { 'matcher--opened': this.isInProfile }
      ]
    },
    classList2 () {
      return [
        'matcher__photo',
        { 'matcher__photo--opened': this.isInProfile }
      ]
    },
    ...mapGetters({
      isInProfile: 'isInProfile',
      cats: 'cats',
      catIndex: 'catIndex'
    })
  },
  methods: {
    toggleProfileView () {
      this.isInProfile
        ? this.setIsInProfile(false)
        : this.setIsInProfile(true)
    },
    ...mapMutations({
      setIsInProfile: 'setIsInProfile'
    })
  }
}
</script>

<style lang="scss" scoped>
  @keyframes shrink {
    from {
      margin: 0;
    }
    to {
      margin: 0 auto;
    }
  }

  .matcher {
    border-radius: 15px;
    width: calc(100% - 20px);
    max-width: 400px;
    margin: 10px auto;
    overflow: hidden;
    border: 2px solid #eee;
    transition: 0.25s ease-in-out;
    color: #555;

    &--opened {
      margin: 0 auto;
      width: 100%;
      border-radius: 0px;
      max-width: none;
      border: none;
      padding-bottom: 100px;
      transform: translateY(-57px);
    }

    &__photo {
      object-fit: cover;
      width: 100%;
      height: 55vh;
      transition: 0.25s ease-in-out;

      &--opened {
        height: 50vh;
      }
    }
  }
</style>
