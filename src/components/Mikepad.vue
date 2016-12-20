<template>
  <div v-bind:style="styles" class="spinner spinner--mikepad">
    <div v-bind:style="innerStyles" class="spinner-inner">
      <div class="binding"></div>
      <div class="pad">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
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
        transform: 'scale(' + (size / 31) + ')'
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }

  .spinner-inner {
    flex-shrink: 0;
  }

  .spinner-inner .binding {
    content : '';
    width : 27px;
    height : 4px;
    border : 2px solid #41b883;
    margin : 0 auto;
  }

  .spinner-inner .pad {
    width : 27px;
    height : 27px;
    border : 2px solid #41b883;
    border-top : 0;
    padding : 4px;
    margin : 0 auto;
  }

  .spinner-inner .line {
    width : 15px;
    margin-top : 4px;
    border-top : 2px solid #41b883;
    opacity : 0;
    animation : mikepad-writeline 3s infinite ease-in;
  }

  .spinner-inner .line:first-child {
    margin-top : 0;
  }

  .spinner-inner .line.line1 {
    animation-delay: 0s;
  }

  .spinner-inner .line.line2 {
    animation-delay: 0.5s;
  }

  .spinner-inner .line.line3 {
    animation-delay : 1s;
  }

  .spinner-inner .text {
    text-align : center;
    margin-top : 10px;
    font-size : 14px;
    color : #41b883;
  }
  @keyframes mikepad-writeline {
    0% { width : 0px; opacity: 0; }
    33% { width : 15px; opacity : 1; }
    70% { opacity : 1; }
    100% {opacity : 0; }
  }
</style>
