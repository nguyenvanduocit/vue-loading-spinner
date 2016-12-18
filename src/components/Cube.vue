<template>
    <div v-bind:style="styles" class="spinner spinner--cube">
      <div v-bind:style='cubeStyles' class="cube1"></div>
      <div v-bind:style='cubeStyles' class="cube2"></div>
    </div>
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
    cubeStyles () {
      return {
        backgroundColor: this.background,
        animationName: 'sk-cubemove',
        animationDuration: this.duration,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite'
      }
    },
    styles () {
      return {
        width: this.size,
        height: this.size
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner {
    display: inline-block;
    position: relative;
  }

  .cube1, .cube2 {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;

  }

  .cube2 {
    animation-delay: -0.9s;
  }

  @keyframes sk-cubemove {
    25% {
      transform: translateX(20px) rotate(-90deg) scale(0.5);
    }
    50% {
      transform: translateX(20px) translateY(20px) rotate(-179deg);
    }
    50.1% {
      transform: translateX(20px) translateY(20px) rotate(-180deg);
    }
    75% {
      transform: translateX(0px) translateY(20px) rotate(-270deg) scale(0.5);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
