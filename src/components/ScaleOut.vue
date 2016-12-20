<template>
    <div v-bind:style="styles" class="spinner spinner--scale-out"></div>
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
      default: '1.0s'
    }
  },
  computed: {
    styles () {
      return {
        width: this.size,
        height: this.size,
        backgroundColor: this.background,
        animationDuration: this.duration
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner {
    border-radius: 100%;
    display: inline-block;
    animation: sk-scaleout 1s ease-in-out infinite;
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
