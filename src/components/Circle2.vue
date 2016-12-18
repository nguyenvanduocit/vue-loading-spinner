<template>
  <div v-bind:style="styles" class="spinner spinner-circle-2"></div>
</template>
<script>
export default {
  props: {
    width: {
      default: '40px'
    },
    height: {
      default: '40px'
    },
    background: {
      default: '#41b883'
    },
    color: {
      default: '#35495e'
    },
    stroke: {
      default: '5px'
    }
  },
  computed: {
    styles () {
      return {
        width: this.width,
        height: this.height,
        border: this.stroke + ' solid ' + this.background,
        borderTopColor: this.color
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .spinner {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 100%;
    border: 10px solid rgba(255, 255, 255, 0.2);

    animation: spin 1s infinite linear;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>