<template>
  <div :style="styles" class="spinner spinner--texture"></div>
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
    flex-shrink: 0;
    border: 1px var(--bg-color) solid;
    border-radius: 4px;
    position: relative;
    background: linear-gradient(45deg, transparent 49%, var(--bg-color) 50%, var(--bg-color) 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, var(--bg-color) 50%, var(--bg-color) 50%, transparent 51%, transparent);
    background-size: 16px 16px;
    background-position: 0% 0%;
    animation: spTexture 1s infinite linear;
  }
  @keyframes spTexture {
    from { background-position: 0px 0px; }
    to { background-position: -16px 0px; }
  }
</style>
