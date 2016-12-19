<template>
  <div v-bind:style="styles" class="spinner spinner--spin-line">
    <div v-bind:style="lineStyles" class="spinner-inner">

    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      default: '40px'
    },
    color: {
      default: '#41b883'
    },
    stroke: {
      default: '5px'
    }
  },
  computed: {
    lineStyles () {
      return {
        width: this.size,
        height: this.stroke,
        background: this.color,
        borderRadius: this.stroke
      }
    },
    styles () {
      let size = parseInt(this.size)
      return {
        width: this.size,
        height: this.size,
        transform: 'scale(' + (size / 75) + ')'
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
    transform-origin: center center;
    animation: spin-line 4s ease infinite;
  }
  @keyframes spin-line {
    0% {
      transform: rotate(-20deg);
      height: 5px;
      width: 75px;
    }
    5% {
      height: 5px;
      width: 75px;
    }
    30% {
      transform: rotate(380deg);
      height: 5px;
      width: 75px;
    }
    40% {
      transform: rotate(360deg);
      height: 5px;
      width: 75px;
    }
    55% {
      transform: rotate(0deg);
      height: 5px;
      width: 5px;
    }
    65% {
      transform: rotate(0deg);
      height: 5px;
      width: 85px;
    }
    68% {
      transform: rotate(0deg);
      height: 5px;
    }
    75% {
      transform: rotate(0deg);
      height: 5px;
      width: 1px;
    }
    78% {
      height: 5px;
      width: 5px;
    }
    90% {
      height: 5px;
      width: 75px;
      transform: rotate(0deg);
    }
    99%, 100% {
      height: 5px;
      width: 75px;
      transform: rotate(-20deg);
    }
  }
</style>
