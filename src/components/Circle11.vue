<template>
  <div v-bind:style="styles" class="spinner spinner--circle-11">
    <div class="spinner-inner"></div>
  </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .spinner-inner {
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    flex-shrink: 0;
    border: 1px solid;
    animation: rotate 1.3s linear 0s infinite;
    border-radius: 50%;
    &:after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      background: #41b883;
      border-radius: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      top: 0;
    }
  }
</style>
