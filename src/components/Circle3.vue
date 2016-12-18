<template>
  <div v-bind:style="styles" class="spinner"></div>
</template>
<script>
export default {
  props: {
    size: {
      default: '40px'
    },
    background: {
      default: '#41b883'
    },
    dotSize: {
      default () {
        let size = parseInt(this.size)
        return size / 3 + 1
      }
    }
  },
  computed: {
    styles () {
      let size = parseInt(this.size)
      let halfSize = size / 3
      return {
        width: this.size,
        height: this.size,
        border: '0px solid ' + this.background,
        boxShadow: '0 -' + halfSize + 'px 0 ' + this.dotSize + 'px ' + this.background + ' inset'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .spinner {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 50%;
    animation: rotate 1s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>