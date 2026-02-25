<template>
    <div :style="styles" class="spinner spinner--two-cube">
      <div :style='cubeStyles' class="cube1"></div>
      <div :style='cubeStyles' class="cube2"></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
  color?: string
  duration?: string
}>(), {
  size: '40px',
  color: '#41b883',
  duration: '1.8s',
})

const cubeStyles = computed(() => ({
  backgroundColor: props.color,
  animationName: 'sk-cubemove',
  animationDuration: props.duration,
}))

const styles = computed(() => ({
  width: props.size,
  height: props.size,
}))
</script>

<style lang="scss" scoped>
  .spinner {
    display: inline-block;
    position: relative;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }

  .cube1, .cube2 {
    width: 25%;
    height: 25%;
    position: absolute;
    top: 0;
    left: 0;
    animation: sk-cubemove 1.8s ease-in-out infinite;
  }

  .cube2 {
    animation-delay: -0.9s;
  }

  @keyframes sk-cubemove {
    25% {
      top: 0;
      left: calc(100% - 25%);
      transform: rotate(-90deg) scale(0.5);
    }
    50% {
      top: calc(100% - 25%);
      left: calc(100% - 25%);
      transform: rotate(-179deg);
    }
    50.1% {
      top: calc(100% - 25%);
      left: calc(100% - 25%);
      transform: rotate(-180deg);
    }
    75% {
      top: calc(100% - 25%);
      left: 0;
      transform: rotate(-270deg) scale(0.5);
    }
    100% {
      top: 0;
      left: 0;
      transform: rotate(-360deg);
    }
  }
</style>
