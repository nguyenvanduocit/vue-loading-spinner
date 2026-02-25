<template>
  <div :style="styles" class="spinner spinner--circle-2"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
  color?: string
  secondaryColor?: string
  stroke?: string
}>(), {
  size: '40px',
  color: '#41b883',
  secondaryColor: '#35495e',
  stroke: '5px',
})

const styles = computed(() => ({
  width: props.size,
  height: props.size,
  border: props.stroke + ' solid ' + props.color,
  borderTopColor: props.secondaryColor,
}))
</script>
<style lang="scss" scoped>
  .spinner {
    box-sizing: border-box;
    border-radius: 100%;
    border: 10px solid rgba(255, 255, 255, 0.2);
    animation: circle-2-spin 1s infinite linear;
  }
  @keyframes circle-2-spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
