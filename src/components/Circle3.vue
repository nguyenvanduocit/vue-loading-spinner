<template>
  <div :style="styles" class="spinner spinner--circle-3"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
  color?: string
  dotSize?: number
}>(), {
  size: '40px',
  color: '#41b883',
  dotSize: 0,
})

const styles = computed(() => {
  const size = parseInt(props.size)
  const halfSize = size / 3
  const dot = props.dotSize || (size / 3 + 1)
  return {
    width: props.size,
    height: props.size,
    border: '0px solid ' + props.color,
    boxShadow: '0 -' + halfSize + 'px 0 ' + dot + 'px ' + props.color + ' inset',
  }
})
</script>
<style lang="scss" scoped>
  .spinner {
    box-sizing: border-box;
    border-radius: 50%;
    animation: circle-3-rotate 1s infinite linear;
  }

  @keyframes circle-3-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
