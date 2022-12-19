<template>
  <div v-bind:style="styles" class="spinner spinner--jumper">
    <div v-bind:style="innerStyles" ></div>
    <div v-bind:style="innerStyles" ></div>
    <div v-bind:style="innerStyles" ></div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      default: '50px'
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
      }
    },
    innerStyles() {
      return {
        ...this.styles,
        '--bg-color': this.color
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
    background-color: var(--bg-color);
    border-radius: 100%;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;
    animation: jumper 1s 0s linear infinite;
  }
  .spinner > div:nth-child(2) {
    animation-delay: 0.33333s;
  }
  .spinner > div:nth-child(3) {
    animation-delay: 0.66666s;
  }
  @keyframes jumper {
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
