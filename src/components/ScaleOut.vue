<template>
    <div :style="styles" class="spinner spinner--scale-out"></div>
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
  duration: '1.0s',
})

const styles = computed(() => ({
  width: props.size,
  height: props.size,
  backgroundColor: props.color,
  animationDuration: props.duration,
}))
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
