<template>
  <div v-bind:style="styles" class="spinner spinner--rotate-square-5">
    <div v-bind:style="innerStyles" class="spinner-inner">
      <span class="load3 one"></span>
      <span class="load3 two"></span>
      <span class="load3-center"></span>
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
    }
  },
  computed: {
    innerStyles () {
      let size = parseInt(this.size)
      return {
        transform: 'scale(' + (size / 80) + ')'
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
  $loader-color: #41b883;
  .spinner{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .spinner-inner{
    position: relative;
    width: 75px;
    height: 75px;
  }
  .load3-center {
    display: inline-block;
    position: absolute;
    background: $loader-color;
    transform: rotate(45deg);
    height: 30px;
    width: 30px;
    left: 23px;
    top: 23px;
    border-radius: 3px;
    animation: rotate-square-5-pulse 1s ease infinite;
  }

  .load3 {
    display: inline-block;
    position: relative;
    width: 75px;
    height: 75px;
    transform: rotate(45deg);
    &:after, &:before {
      position: absolute;
      content: '';
      height: 10px;
      width: 10px;
      display: block;
      top: 0;
      border-radius: 3px;
      background: $loader-color;
      animation-delay: -.5s;
    }

    &:after {
      right: 0;
      animation: rotate-square-5-square-tr 2s ease infinite;
      animation-delay: .125s;
    }

    &:before {
      animation: rotate-square-5-square-tl 2s ease infinite;
      animation-delay: .125s;
    }
  }

  .load3.two {
    position: relative;
    top: -75px;

    &:after, &:before {
      bottom: 0;
      top: initial;
    }

    &:after {
      animation: rotate-square-5-square-br 2s ease infinite;
      animation-direction: reverse;
    }

    &:before {
      animation: rotate-square-5-square-bl 2s ease infinite;
      animation-direction: reverse;
    }

  }

  @keyframes rotate-square-5-square-tl {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 62.5px);
    }
    50% {
      transform: translate(62.5px, 62.5px);
    }
    75% {
      transform: translate(62.5px, 0);
    }
  }

  @keyframes rotate-square-5-square-bl {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, -62.5px);
    }
    50% {
      transform: translate(62.5px, -62.5px);
    }
    75% {
      transform: translate(62.5px, 0);
    }
  }

  @keyframes rotate-square-5-square-tr {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-62.5px, 0);
    }
    50% {
      transform: translate(-62.5px, 62.5px);
    }
    75% {
      transform: translate(0, 62.5px);
    }
  }

  @keyframes rotate-square-5-square-br {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-62.5px, 0);
    }
    50% {
      transform: translate(-62.5px, -62.5px);
    }
    75% {
      transform: translate(0, -62.5px);
    }
  }

  @keyframes rotate-square-5-pulse {
    0%, 100% {
      transform: scale(1) rotate(45deg);
    }
    75% {
      transform: scale(.25) rotate(45deg)
    }
  }
</style>
