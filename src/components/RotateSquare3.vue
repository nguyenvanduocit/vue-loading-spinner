<template>
    <svg  v-bind:style="styles" class="spinner spinner--cube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.00001 500.00001">
      <g :fill="color">
        <path class="b0" d="M66.734 66.734v366.533h366.532V66.734H66.734zm15 15h336.532v336.533H81.734V81.734z">
        </path>
        <path class="b2" d="M354.16 2.5v143.34H497.5V2.5H354.16zm10 10H487.5v123.34H364.16V12.5z">
        </path>
        <path class="b1" d="M0 2.5v143.34h143.34V2.5H0zm10 10h123.34v123.34H10V12.5z">
        </path>
        <path class="b3" d="M354.16 356.66V500H497.5V356.66H354.16zm10 10H487.5V490H364.16V366.66z">
        </path>
        <path class="b4" d="M0 356.66V500h143.34V356.66H0zm10 10h123.34V490H10V366.66z">
        </path>
      </g>
    </svg>
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
  .spinner {
    height: 40px;
    width: 40px;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }

  .b0 {
    animation: rotate-square-3-b0 4s infinite ease;
    transform-origin: 250px 250px;
  }

  .b1 {
    animation: rotate-square-3-b1 4s infinite ease;
  }

  .b2 {
    animation: rotate-square-3-b2 4s infinite ease;
  }

  .b3 {
    animation: rotate-square-3-b3 4s infinite ease;
  }

  .b4 {
    animation: rotate-square-3-b4 4s infinite ease;
  }

  @keyframes rotate-square-3-b0 {
    0% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(-90deg);
    }

    50% {
      transform: rotate(-180deg);
    }

    75% {
      transform: rotate(-270deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes rotate-square-3-b1 {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(0, 355px);
    }

    50% {
      transform: translate(355px, 355px);
    }

    75% {
      transform: translate(355px, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes rotate-square-3-b2 {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(-355px, 0);
    }

    50% {
      transform: translate(-355px, 355px);
    }

    75% {
      transform: translate(0, 355px);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes rotate-square-3-b3 {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(0, -355px);
    }

    50% {
      transform: translate(-355px, -355px);
    }

    75% {
      transform: translate(-355px, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes rotate-square-3-b4 {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(355px, 0);
    }

    50% {
      transform: translate(355px, -355px);
    }

    75% {
      transform: translate(0, -355px);
    }

    100% {
      transform: translate(0, 0);
    }
  }
</style>
