<template>
    <div :style="styles" class="spinner spinner--double-bounce">
      <div class="double-bounce1" :style="bounceStyle"></div>
      <div class="double-bounce2" :style="bounceStyle"></div>
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
  duration: '2.0s',
})

const bounceStyle = computed(() => ({
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
    position: relative;
    display: inline-block;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: double-bounce 2.0s ease-in-out infinite;
  }

  .double-bounce2 {
    animation-delay: -1.0s;
  }

  @keyframes double-bounce {
    0%, 100% {
     transform: scale(0.0);
    }
    50% {
      transform: scale(1.0);
    }
  }
</style>
