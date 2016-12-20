<template>
  <div v-bind:style="styles" class="spinner spinner--texture"></div>
</template>
<script>
export default {
  props: {
    size: {
      default: '40px'
    }
  },
  computed: {
    styles () {
      return {
        width: this.size,
        height: this.size
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .spinner {
    flex-shrink: 0;
    border: 1px #41b883 solid;
    border-radius: 4px;
    position: relative;
    background: linear-gradient(45deg, transparent 49%, #41b883 50%, #41b883 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, #41b883 50%, #41b883 50%, transparent 51%, transparent);
    background-size: 16px 16px;
    background-position: 0% 0%;
    animation: spTexture 1s infinite linear;
  }
  @keyframes spTexture {
    from { background-position: 0px 0px; }
    to { background-position: -16px 0px; }
  }
</style>
