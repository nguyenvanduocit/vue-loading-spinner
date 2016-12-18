<template>
    <div v-bind:style="styles" class="spinner spinner--cube-shadow"></div>
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
      default: '1.8s'
    }
  },
  computed: {
    styles () {
      return {
        width: this.size,
        height: this.size,
        backgroundColor: this.background,
        animationName: 'cube-shadow-spinner',
        animationDuration: this.duration,
        animationTimingFunction: 'cubic-bezier(0.75, 0, 0.5, 1)',
        animationIterationCount: 'infinite'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes cube-shadow-spinner {
    50% {
      border-radius: 50%;
      transform: scale(0.5) rotate(360deg);
    }
    100% {
      transform: scale(1) rotate(720deg);
    }
  }
</style>
