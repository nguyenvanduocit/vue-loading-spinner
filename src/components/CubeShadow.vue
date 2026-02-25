<template>
    <div :style="styles" class="spinner spinner--cube-shadow"></div>
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

const styles = computed(() => ({
  width: props.size,
  height: props.size,
  backgroundColor: props.color,
  animationDuration: props.duration,
}))
</script>

<style lang="scss" scoped>
  .spinner{
    animation: cube-shadow-spinner 1.8s cubic-bezier(0.75, 0, 0.5, 1) infinite;
  }
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
