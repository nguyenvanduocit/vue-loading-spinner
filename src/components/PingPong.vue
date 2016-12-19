<template>
  <div v-bind:style="styles" class="spinner spinner--ping-pong">
    <div v-bind:style="innerStyles" class="spinner-inner">
      <div class="board">
        <div class="left">
        </div>
        <div class="right">
        </div>
        <div class="ball">
        </div>
        <div class="ballhit">
        </div>
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
      let baseSize = 250
      let ratio = (size > baseSize) ? baseSize / size : size / baseSize
      return {
        transform: 'scale(' + ratio + ')'
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .board {
    width:250px;
    position: relative;
  }

  .left,
  .right {
    height:50px;
    width:15px;
    background:#41b883;
    display: inline-block;
    position:absolute;
  }

  .left {
    left:0;
    animation: pingpong-position1 2s linear infinite;
  }
  .right {
    right:0;
    animation: pingpong-position2 2s linear infinite;
  }
  .ball,
  .ballhit {
    width:15px;
    height:15px;
    border-radius:50%;
    background:#41b883;
    position:absolute;
    animation: pingpong-bounce 2s linear infinite;
  }
  .ballhit {
    padding:4px;
    margin:-6px 0 0 -6px;
    border-radius:50%;
    background:#41b883;
    border:2px #41b883 solid;
    z-index:-1;
    animation: pingpong-bounce2 2s linear infinite;
  }
  @keyframes pingpong-position1 {
    0% {top:-60px;}
    25% {top:0;}
    50% {top:60px;}
    75% {top:-60px;}
    100% {top:-60px;}
  }
  @keyframes pingpong-position2 {
    0% {top:60px;}
    25% {top:0;}
    50% {top:-60px;}
    75% {top:-60px;}
    100% {top:60px;}
  }
  @keyframes pingpong-bounce {
    0% {top:-35px;left:10px;}
    25% {top:25px;left:225px;}
    50% {top:75px;left:10px;}
    75% {top:-35px;left:225px;}
    100% {top:-35px;left:10px;}
  }
  @keyframes pingpong-bounce2 {
    0% {top:-35px;left:10px; border:2px cornflowerblue solid;}
    24% {border:2px cornflowerblue solid;}
    25% {top:25px;left:225px; border:2px #41b883 solid;}
    49% {border:2px cornflowerblue solid;}
    50% {top:75px;left:10px; border:2px #41b883 solid;}
    74% {border:2px cornflowerblue solid;}
    75% {top:-35px;left:225px; border:2px #41b883 solid;}
    99% {border:2px cornflowerblue solid;}
    100% {top:-35px;left:10px; border:2px #41b883 solid;}
  }
</style>
