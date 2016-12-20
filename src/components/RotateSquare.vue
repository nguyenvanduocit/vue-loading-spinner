<template>
  <div v-bind:style="styles" class="spinner spinner--rotate-square"></div>
</template>

<script>
export default {
  props: {
    size: {
      default: '40px'
    },
    background: {
      default: '#41b883'
    },
    duration: {
      default: '1.2s'
    }
  },
  computed: {
    styles () {
      return {
        backgroundColor: this.background,
        width: this.size,
        height: this.size,
        animationDuration: this.duration
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner{
    display: inline-block;
    animation: rotateplane 1.2s infinite ease-in-out;
  }
  @keyframes rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
</style>
