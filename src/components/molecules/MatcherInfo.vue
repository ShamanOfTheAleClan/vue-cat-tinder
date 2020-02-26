<template>
  <div class="matcher__info">
    <div class="matcher__credentials">
      <h2 class="matcher__name">
        {{ name }}
      </h2>
      <h3 class="matcher__age">
        {{ age }}
      </h3>

    </div>
      <p class="matcher__fun-fact">
        {{ funFact }}
      </p>
  <slot />
  </div>
</template>

<script>
export default {
  name: 'MatcherInfo',
  props: {
    name: {
      type: String,
      default: undefined
    },
    age: {
      type: Number,
      default: null
    },
    funFact: {
      type: String,
      default: '\xa0'
    }
  }
}
</script>

<style lang="scss" scoped>
  .matcher {

    &__info {
      padding: 10px 20px;
    }

    &__credentials {
      display: flex;
      font-family: "Montserrat";
      vertical-align: bottom;
      margin-bottom: 2px;
    }

    &__name {
      font-weight: 600;
      font-size: 24px;
      word-spacing: -0.3em;

      &::after {
        content: ",";
        font-weight: 600;
        font-size: 24px;
      }
    }

    &__age {
      font-weight: 500;
      font-size: 24px;
      text-indent: 8px;
    }

    &__fun-fact {
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 10px;
      color: #888;
    }
  }
</style>
