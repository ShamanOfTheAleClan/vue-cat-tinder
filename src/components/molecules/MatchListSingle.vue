<template>
  <router-link
    :to="{name:'Chat'}"
    class="link"
    @click.native="setCurrentlyChattingWith(catObject)"
  >
    <div class="single-match">
      <img :src="imgHref" class="single-match__photo">
      <div class="single-match__info">
        <h2 class="single-match__name">{{ name }}</h2>
        <p
          class="single-match__last-message"
          v-if="!!lastMessage"
        >{{ lastMessage }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MatchListSingle',
  props: {
    catObject: {
      type: Object,
      default: undefined,
      required: true
    },
    imgHref: {
      type: String,
      default: undefined,
      required: true
    },
    name: {
      type: String,
      default: undefined,
      required: true
    },
    lastMessage: {
      type: String,
      default: '\xa0'
    }
  },
  methods: {
    ...mapMutations({
      setCurrentlyChattingWith: 'setCurrentlyChattingWith'
    })
  }
}
</script>

<style lang="scss" scoped>
  .single-match {
    display: flex;
    align-items: center;

    &__photo {
      border-radius: 50%;
      height: 85px;
      width: 85px;
      object-fit: cover;
      object-position: center;
      margin-right: 15px;
      flex-shrink: 0;
    }

    &__info {
      max-width: calc(100% - 85px - 15px);
    }

    &__name {
      font-weight: 600;
      font-size: 24px;
      color: #555;
    }

    &__last-message {
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 10px;
      color: #888;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: auto;
    }
  }
</style>
