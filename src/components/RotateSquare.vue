<template>
  <div :style="styles" class="spinner spinner--rotate-square"></div>
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
  duration: '1.2s',
})

const styles = computed(() => ({
  backgroundColor: props.color,
  width: props.size,
  height: props.size,
  animationDuration: props.duration,
}))
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
