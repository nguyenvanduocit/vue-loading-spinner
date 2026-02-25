<template>
  <div :style="styles" class="spinner spinner--rotate-square-6">
    <div :style="outerStyles" class="inner-square inner-square-1"></div>
    <div :style="innerStyles" class="inner-square inner-square-2"></div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
  color?: string
}>(), {
  size: '90px',
  color: '#41b883',
})

function calcWidth(outerWidth: number): number {
  const r = 45 * Math.PI / 180
  const s = Math.abs(Math.cos(r))
  const c = Math.abs(Math.sin(r))
  return (outerWidth * c - outerWidth * s) / (Math.pow(c, 2) - Math.pow(s, 2))
}

const outerWidth = computed(() => calcWidth(parseInt(props.size)))

const outerStyles = computed(() => {
  const size = outerWidth.value + 'px'
  return {
    border: '2px solid ' + props.color,
    width: size,
    height: size,
  }
})

const innerStyles = computed(() => {
  const size = calcWidth(outerWidth.value) + 'px'
  return {
    border: '2px solid ' + props.color,
    width: size,
    height: size,
  }
})

const styles = computed(() => ({
  width: props.size,
  height: props.size,
}))
</script>
<style lang="scss" scoped>
  .spinner{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner-square {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
    }
    .inner-square-1 {
      animation: spinner--rotate-square-6 2.5s linear infinite;
    }
    .inner-square-2 {
      width: 44px;
      height: 44px;
      animation: spinner--rotate-square-6 2.5s linear infinite;
      animation-direction: reverse;
    }
  }
  @keyframes spinner--rotate-square-6 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
