<template>
  <div :style="styles" class="spinner spinner--plane">
    <div :style="innerStyles" class="spinner-inner">
      <div id="top" class="mask">
        <div class="plane"></div>
      </div>
      <div id="middle" class="mask">
        <div class="plane"></div>
      </div>

      <div id="bottom" class="mask">
        <div class="plane"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  size?: string
  color?: string
  secondaryColor?: string
}>(), {
  size: '40px',
  color: '#41b883',
  secondaryColor: '#32855f',
})

const innerStyles = computed(() => {
  const size = parseInt(props.size)
  return {
    width: size + 'px',
    height: props.size,
    transform: `scale(${size / 70})`,
    '--bg-color': props.color,
    '--secondary-color': props.secondaryColor,
  }
})

const styles = computed(() => {
  const size = parseInt(props.size)
  return {
    width: size + 'px',
    height: props.size,
  }
})
</script>
<style lang="scss" scoped>
  .spinner{
    position:relative;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .mask{
    position:absolute;
    border-radius:2px;
    overflow:hidden;
    perspective: 1000;
    backface-visibility: hidden;
  }

  .plane{
    background:var(--bg-color);
    width:400%;
    height:100%;
    position:absolute;
    transform : translate3d(0px,0,0);
    z-index:100;
    perspective: 1000;
    backface-visibility: hidden;

  }

  .animation{
    transition: all 0.3s ease;
  }



  #top .plane{
    z-index:2000;
    animation : trans1 1.3s ease-in infinite  0s backwards;
  }
  #middle .plane{
    transform : translate3d(0px,0,0);
    background : var(--secondary-color);
    animation : trans2 1.3s linear infinite  0.3s  backwards;

  }
  #bottom .plane{
    z-index:2000;
    animation : trans3 1.3s ease-out infinite  0.7s backwards;
  }



  #top{
    width:53px;
    height:20px;
    left:20px;
    top:5px;
    transform: skew(-15deg, 0);
    z-index:100;
  }

  #middle{
    width:33px;
    height:20px;
    left:20px;
    top:21px;

    transform: skew(-15deg, 40deg)
  }
  #bottom{
    width:53px;
    height:20px;
    top:35px;
    transform: skew(-15deg, 0)
  }

  p{
    color:#fff;
    position:absolute;
    left: -3px;
    top:45px;
    font-family:Arial;
    text-align:center;
    font-size:10px;
  }

  @keyframes trans1{
    from {
      transform : translate3d(53px,0,0)
    }
    to {
      transform : translate3d(-250px,0,0)
    }
  }

  @keyframes trans2{
    from {
      transform : translate3d(-160px,0,0)
    }
    to {
      transform : translate3d(53px,0,0)
    }
  }

  @keyframes trans3{
    from {
      transform : translate3d(53px,0,0)
    }
    to {
      transform : translate3d(-220px,0,0)
    }
  }

  @keyframes animColor{
    from {
      background : red;
    }
    25%{
      background : yellow;
    }
    50%{
      background : green;
    }
    75%{
      background : brown;
    }
    to {
      background : blue;
    }
  }
</style>
