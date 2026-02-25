<template>
  <span :style="styles" class="spinner spinner--rotate-diamond">
    <div :style="diamondStyle" class='diamond'></div>
    <div :style="diamondStyle" class='diamond'></div>
    <div :style="diamondStyle" class='diamond'></div>
  </span>
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

const diamondStyle = computed(() => {
  const size = parseInt(props.size)
  return {
    width: size / 4 + 'px',
    height: size / 4 + 'px',
    '--bg-color': props.color,
  }
})

const styles = computed(() => {
  const size = parseInt(props.size)
  return {
    width: props.size,
    height: size / 4 + 'px',
  }
})
</script>

<style lang="scss" scoped>
  $accent: #41b883;
  $duration: 1500ms;
  $timing: linear;

  .spinner {
    position: relative;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
    .diamond {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 2px;
      background: var(--bg-color);
      transform: translateX(-50%) rotate(45deg) scale(0);
      animation: diamonds $duration $timing infinite;
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation-delay: calc(-1 * calc($duration / 1.5) * $i);
        }
      }
    }
  }
  @keyframes diamonds {
    50% {
      left: 50%;
      transform: translateX(-50%) rotate(45deg) scale(1);
    }
    100% {
      left: 100%;
      transform: translateX(-50%) rotate(45deg) scale(0);
    }
  }
</style>
