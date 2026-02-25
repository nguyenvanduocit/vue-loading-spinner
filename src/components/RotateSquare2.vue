<template>
    <div :style="styles" class="spinner spinner--rotate-square-2"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
  color?: string
}>(), {
  size: '40px',
  color: '#41b883',
})

const styles = computed(() => ({
  width: props.size,
  height: props.size,
  '--bg-color': props.color,
}))
</script>

<style lang="scss" scoped>
  .spinner {
    position: relative;
    * {
        line-height: 0;
        box-sizing: border-box;
    }
    &:before {
      content: '';
      width: 100%;
      height: 20%;
      min-width: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      bottom: 0%;
      left: 0;
      border-radius: 50%;
      animation: rotate-square-2-shadow .5s linear infinite;
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      background: var(--bg-color);
      animation: rotate-square-2-animate .5s linear infinite;
      position: absolute;
      bottom:40%;
      left: 0;
      border-radius: 3px;
    }
  }

  @keyframes rotate-square-2-animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(20%) rotate(22.5deg);
    }
    50% {
      transform: translateY(40%) scale(1, .9) rotate(45deg);
      border-bottom-right-radius: 50%;
    }
    75% {
      transform: translateY(20%) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }


  @keyframes rotate-square-2-shadow {
    0%, 100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
</style>
