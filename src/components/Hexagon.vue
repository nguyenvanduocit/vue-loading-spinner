<template>
  <div v-bind:style="styles" class="spinner spinner--hexagon">
    <div v-bind:style="innerStyles" class="spinner-inner">
      <ul class="hexagon-container">
        <li class="hexagon hex_1"></li>
        <li class="hexagon hex_2"></li>
        <li class="hexagon hex_3"></li>
        <li class="hexagon hex_4"></li>
        <li class="hexagon hex_5"></li>
        <li class="hexagon hex_6"></li>
        <li class="hexagon hex_7"></li>
      </ul>
    </div>
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
    innerStyles () {
      let size = parseInt(this.size)
      return {
        transform: 'scale(' + (size / 164) + ')'
      }
    },
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
    overflow: hidden;
  }
  .spinner-inner {
    position: relative;
    width: 160px;
    height: 160px;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid #a5a69e;
    transform-origin: top left;
    display: block;
    &:before {
      content: '';
      width: 164px;
      height: 164px;
      display: block;
      position: absolute;
      border: 7px solid #41b883;
      border-radius: 50%;
      top: -2px;
      left: -2px;
      box-sizing: border-box;
      // border-bottom-color: transparent;
      // border-left-color: transparent;
      // border-right-color: transparent;
      clip: rect(0px, 35px, 35px, 0px);
      z-index: 10;
      animation: hexagon-rotate infinite;
      animation-duration: 3s;
      animation-timing-function: linear;
    }
    &:after {
      content: '';
      width: 164px;
      height: 164px;
      display: block;
      position: absolute;
      border: 2px solid #c1bebb;
      border-radius: 50%;
      top: -2px;
      left: -2px;
      box-sizing: border-box;
      // transform: hexagon-rotate(30deg);
      // border-bottom-color: transparent;
      // border-left-color: transparent;
      // border-right-color: transparent;
      clip: rect(0px, 164px, 150px, 0px);
      z-index: 9;
      // animation: hexagon-rotate2 infinite, hexagon-rotate3 infinite;
      // animation-duration: 3s;
      // animation-timing-function: linner;
      animation: hexagon-rotate2 3s linear infinite;
    }
  }

  .hexagon-container {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    top: 33px;
    left: 41px;
    border-radius: 50%;
  }

  .hexagon {
    position: absolute;
    width: 40px;
    height: 23px;
    background-color: #41b883;
    &:before {
      content: "";
      position: absolute;
      top: -11px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 11.5px solid #41b883;
    }
    &:after {
      content: "";
      position: absolute;
      top: 23px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 11.5px solid #41b883;
    }
  }

  @each $index,
  $top,
  $left in (1, 0px, 0px),
          (2, 0px, 42px),
          (3, 36px, 63px),
          (4, 72px, 42px),
          (5, 72px, 0px),
          (6, 36px, -21px),
          (7, 36px, 21px) {
    $time: 3s; // thx to @zeakd for this formula
    $delay: $time / 14;
    .hexagon.hex_#{$index} {
      top: $top;
      left: $left;
      //cubic-bezier(.155,1.105,.295,1.12)
      animation: hexagon-Animasearch $time ease-in-out infinite;
      animation-delay: $delay*$index;
    }
  }

  @keyframes hexagon-Animasearch {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    15%,
    50% {
      transform: scale(0.5);
      opacity: 0;
    }
    65% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes hexagon-rotate {
    0% {
      transform: rotate(0);
      clip: rect(0px, 35px, 35px, 0px);
    }
    50% {
      clip: rect(0px, 40px, 40px, 0px);
    }
    100% {
      transform: rotate(360deg);
      clip: rect(0px, 35px, 35px, 0px);
    }
  }

  @keyframes hexagon-rotate2 {
    0% {
      transform: rotate(0deg);
      clip: rect(0px, 164px, 150px, 0px);
    }
    50% {
      clip: rect(0px, 164px, 0px, 0px);
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(720deg);
      clip: rect(0px, 164px, 150px, 0px);
    }
  }

  @keyframes hexagon-rotate3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
