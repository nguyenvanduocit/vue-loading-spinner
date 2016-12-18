<template>
    <div v-bind:style="styles" class="spinner spinner--double-bounce">
      <div class="double-bounce1" v-bind:style="bounceStyle"></div>
      <div class="double-bounce2" v-bind:style="bounceStyle"></div>
    </div>
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
      default: '2.0s'
    }
  },
  computed: {
    bounceStyle () {
      return {
        backgroundColor: this.background,
        animationName: 'bounce',
        animationDuration: this.duration,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite'
      }
    },
    styles () {
      return {
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner {
    position: relative;
    display: inline-block;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
  }

  .double-bounce2 {
    animation-delay: -1.0s;
  }

  @keyframes bounce {
    0%, 100% {
     transform: scale(0.0);
    }
    50% {
      transform: scale(1.0);
    }
  }
</style>
