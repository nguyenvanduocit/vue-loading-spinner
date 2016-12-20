<template>
  <div v-bind:style="styles" class="spinner spinner--circle-4"></div>
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
  .spinner{
    box-sizing: border-box;
    position: relative;
    border: 3px solid transparent;
    border-top-color: #f7484e;
    border-radius: 50%;
    animation: circle-4-spin 2s linear infinite;
    &:before, &:after{
      content:'';
      box-sizing: border-box;
      position: absolute;
      border: 3px solid transparent;
      border-radius: 50%;
    }

    &:before{
      border-top-color: #f8b334;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      animation: circle-4-spin 3s linear infinite;
    }

    &:after{
      border-top-color: #41b883;
      top: 6px;
      left: 6px;
      right: 6px;
      bottom: 6px;
      animation: spin 4s linear infinite;
    }
  }

  @keyframes circle-4-spin{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
