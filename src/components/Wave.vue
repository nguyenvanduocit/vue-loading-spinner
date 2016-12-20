<template>
  <div v-bind:style="styles" class="spinner spinner--wave">
      <div></div>
      <div></div>
      <div></div>
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

    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .spinner > div {
    background-color: transparent;
    border: 1px solid #41b883;
    border-radius: 100%;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;
    width: 50px;
    height: 50px;
    animation: wave-jumper 1s 0s linear infinite;
  }
  .spinner > div:nth-child(2) {
    animation-delay: 0.33333s;
  }
  .spinner > div:nth-child(3) {
    animation-delay: 0.66666s;
  }

  @keyframes wave-jumper {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    5% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

</style>
