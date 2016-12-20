<template>
  <div class="spinner spinner--jawn">
    <div :style="styles" class="spinner-inner">
      <div :style="innerStyles" class="jawn"></div>
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
        transform: 'scale(' + (size / 70) + ')'
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
  .spinner-inner{
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .jawn {
    position: relative;
    background-color: #41b883;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    border-radius: 50%;

    &:after, &:before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }

    &:after {
      left: -10px;
      top: -5px;
      background-color: #f7484e;
      transform-origin: 15px 10px;
      animation: jawn-axis 1s linear infinite;
    }
    &:before {
      left: -25px;
      top: -15px;
      background-color: #34495e;
      transform-origin: 30px 20px;
      animation: jawn-axis 2s linear infinite;
    }
  }

  @keyframes jawn-axis {
    0% {
      transform: rotateZ(0deg) translate3d(0,0,0);
    }
    100% {
      transform: rotateZ(360deg) translate3d(0,0,0);
    }
  }
</style>
