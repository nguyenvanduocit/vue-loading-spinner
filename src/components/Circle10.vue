<template>
  <div v-bind:style="styles" class="spinner spinner--circle-10">
    <div v-bind:style="innerStyles" class="spinner-inner">
      <div class="loader-xbox"></div>
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
        transform: 'scale(' + (size / 100) + ')'
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
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .spinner-inner
  {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }

  .loader-xbox, .loader-xbox:before, .loader-xbox:after {
    position: absolute;
    border: 3px solid transparent;
    border-top: 3px solid #41b883;
    border-radius: 50%;
    animation: rotate linear infinite;
    content: '';
  }

  .loader-xbox {
    height: 100px;
    width: 100px;
    animation-duration: 1.05s;
  }

  .loader-xbox:before {
    height: 75px;
    width: 75px;
    top: 10px;
    left: 10px;
    border-top: 3px solid #f7484e;
    animation-duration: 10s;
  }

  .loader-xbox:after {
    height: 50px;
    width: 50px;
    top: 22px;
    left: 22px;
    border-top: 3px solid #f8b334;
    animation-duration: 4s;
  }

  @keyframes rotate {
    from {
      transform: rotateZ(360deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }

</style>
