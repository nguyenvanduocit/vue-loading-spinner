<template>
  <div v-bind:style="styles" class="spinner spinner--texture"></div>
</template>
<script>
export default {
  props: {
    size: {
      default: '40px'
    },
    color: {
      default: '#41b883'
    }
  },
  computed: {
    styles () {
      return {
        width: this.size,
        height: this.size,
        '--bg-color': this.color
      }
    }
  }
}
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
