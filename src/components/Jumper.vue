<template>
  <div :style="styles" class="spinner spinner--jumper">
    <div :style="innerStyles" ></div>
    <div :style="innerStyles" ></div>
    <div :style="innerStyles" ></div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
  color?: string
}>(), {
  size: '50px',
  color: '#41b883',
})

const styles = computed(() => ({
  width: props.size,
  height: props.size,
}))

const innerStyles = computed(() => ({
  ...styles.value,
  '--bg-color': props.color,
}))
</script>
<style lang="scss" scoped>
  .spinner{
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .spinner > div {
    background-color: var(--bg-color);
    border-radius: 100%;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;
    animation: jumper 1s 0s linear infinite;
  }
  .spinner > div:nth-child(2) {
    animation-delay: 0.33333s;
  }
  .spinner > div:nth-child(3) {
    animation-delay: 0.66666s;
  }
  @keyframes jumper {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    5% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

</style>
