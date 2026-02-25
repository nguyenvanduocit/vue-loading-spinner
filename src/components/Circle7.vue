<template>
  <div :style="styles" class="spinner spinner--circle-7">
    <div class="spinner-inner">

    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
}>(), {
  size: '40px',
})

const styles = computed(() => {
  const size = parseInt(props.size)
  return {
    width: props.size,
    height: props.size,
    transform: 'scale(' + (size / 75) + ')',
  }
})
</script>
<style lang="scss" scoped>
  $loader-color: #41b883;
  .spinner{
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .spinner-inner {
    display: inline-block;
    position: relative;
    border-radius: 100%;
    animation: circle-7-spin 3.25s infinite;
    transform: rotate(0deg);
    animation-delay: -.5s;

    &:after, &:before {
      position: absolute;
      content: '';
      height: 20px;
      width: 20px;
      display: block;
      background: $loader-color;
      border-radius: 100%;
      animation: circle-7-shrink 3.25s infinite;
      animation-delay: -.5s;
    }

    &:before {
      left: 70%;
    }

    &:after {
      top: 70%;
    }
  }

  @keyframes circle-7-spin {
    0% {
      transform: rotate(0deg);
      height: 100%;
      width: 100%;
    }
    33% {
      height: 0;
      width: 0;
    }
    55% {
      transform: rotate(720deg);
      height: 0;
      width: 0;
    }

    70% {
      height: 100%;
      width: 100%;
      margin-top: 0;
    }

    100% {
      height: 100%;
      width: 100%;
      transform: rotate(360deg);
      margin-top: 0;
    }
  }

  @keyframes circle-7-shrink {
    0%, 100% {
      height: 20px;
      width: 20px;
    }
    33%, 55% {
      height: 0;
      width: 0;
    }

    70% {
      height: 20px;
      width: 20px;
    }
  }
</style>
