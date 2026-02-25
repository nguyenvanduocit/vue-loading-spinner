<template>
    <div :style="styles" class="spinner spinner--stretch">
      <div :style="rectStyles" class="rect rect-1"></div>
      <div :style="rectStyles" class="rect rect-2"></div>
      <div :style="rectStyles" class="rect rect-3"></div>
      <div :style="rectStyles" class="rect rect-4"></div>
      <div :style="rectStyles" class="rect rect-5"></div>
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
  duration: '1.2s',
})

const rectStyles = computed(() => ({
  backgroundColor: props.color,
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
    text-align: center;
    font-size: 10px;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .rect{
    animation: sk-stretchdelay 1.2s ease-in-out infinite;
  }
  .spinner > div {
    height: 100%;
    width: 10%;
    display: inline-block;
  }

  .spinner .rect-2 {
    animation-delay: -1.1s;
  }

  .spinner .rect-3 {
    animation-delay: -1.0s;
  }

  .spinner .rect-4 {
    animation-delay: -0.9s;
  }

  .spinner .rect-5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
    }
  }
</style>
