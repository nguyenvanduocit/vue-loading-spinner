<template>
    <div v-bind:style="styles" class="spinner spinner--scale-out"></div>
</template>

<script>
export default {
  props: {
    width: {
      default: '40px'
    },
    height: {
      default: '40px'
    },
    background: {
      default: '#41b883'
    },
    duration: {
      default: '1.0s'
    }
  },
  computed: {
    styles () {
      return {
        width: this.width,
        height: this.height,
        backgroundColor: this.background,
        animationName: 'sk-scaleout',
        animationDuration: this.duration,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner {
    border-radius: 100%;
      display: inline-block;
  }
  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    } 100% {
        transform: scale(1.0);
        opacity: 0;
      }
  }
</style>
