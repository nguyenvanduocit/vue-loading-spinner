<template>
  <div v-bind:style="styles" class="spinner spinner--circle-5"></div>
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
  /*  hides this rule from IE9 and below */
  .spinner {
    transform: translate3d(0, 0, 0);
    position: relative;
    display: inline-block;
    background: rgba(25, 165, 152, 0.5);
    border-radius: 50%;
    overflow: hidden;
    text-indent: -9999px;
    /* Hides inner circles outside base circle at safari */
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  }
  .spinner:before, .spinner:after {
    content: '';
    position: absolute;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .spinner:before {
    animation: circle-5-spinner 3s infinite;
    transform-origin: 0 50%;
    left: 0;
    background: #c7efcf;
  }
  .spinner:after {
    animation: circle-5-spinner 3s 0.2s reverse infinite;
    transform-origin: 100% 50%;
    right: 0;
    background: #eef5db;
  }
  @keyframes circle-5-spinner {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>