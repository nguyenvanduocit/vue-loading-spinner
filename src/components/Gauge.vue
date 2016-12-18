<template>
  <div class="spinner spinner--gauge"></div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
  /*  hides this rule from IE9 and below */
  .spinner {
    width: 60px;
    height: 30px;
    background: #6ca;
    -moz-border-radius-topleft: 32px;
    -webkit-border-top-left-radius: 32px;
    border-top-left-radius: 32px;
    -moz-border-radius-topright: 32px;
    -webkit-border-top-right-radius: 32px;
    border-top-right-radius: 32px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-indent: -9999px;
  }
  .spinner::before {
    animation: gauge-spinner 4000ms infinite ease;
    background: white;
    border-radius: 2px;
    content: '';
    position: absolute;
    left: 30px;
    top: 5.33333px;
    width: 4px;
    height: 26.66667px;
    transform-origin: 50% 100%;
  }
  .spinner::after {
    content: '';
    background: white;
    border-radius: 8px;
    position: absolute;
    left: 25.6px;
    top: 25.6px;
    width: 12.8px;
    height: 12.8px;
  }
  @keyframes gauge-spinner {
    0% {
      transform: rotate(-50deg);
    }
    10% {
      transform: rotate(20deg);
    }
    20% {
      transform: rotate(60deg);
    }
    24% {
      transform: rotate(60deg);
    }
    40% {
      transform: rotate(-20deg);
    }
    54% {
      transform: rotate(70deg);
    }
    56% {
      transform: rotate(78deg);
    }
    58% {
      transform: rotate(73deg);
    }
    60% {
      transform: rotate(75deg);
    }
    62% {
      transform: rotate(70deg);
    }
    70% {
      transform: rotate(-20deg);
    }
    80% {
      transform: rotate(20deg);
    }
    83% {
      transform: rotate(25deg);
    }
    86% {
      transform: rotate(20deg);
    }
    89% {
      transform: rotate(25deg);
    }
    100% {
      transform: rotate(-50deg);
    }
  }
</style>