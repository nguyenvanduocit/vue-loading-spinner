<template>
  <div v-bind:style="styles" class="spinner spinner--circle-9">
    <div v-bind:style="innerStyles" class="spinner-inner">
      <div class='loading spin-1'>
        <div class='loading spin-2'>
          <div class='loading spin-3'>
            <div class='loading spin-4'>
              <div class='loading spin-5'>
                <div class='loading spin-6'></div>
              </div>
            </div>
          </div>
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
      return {
        transform: 'scale(' + (size / 120) + ')'
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
    width: 120px;
    height: 120px;
  }
  @keyframes circle-9-loading {
    0% {
      transform: rotate(0deg);
    }
    25%{
      transform: rotate(160deg);
    }
    50%{
      transform: rotate(0deg);
    }
    75%{
      transform: rotate(160deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .loading {
    background-color: transparent;
    border-radius: 50%;
    margin: 5px auto;
    animation: circle-9-loading 5s infinite linear;
  }

  .spin-1{
    border: 5px solid #f7484e ;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    width: 120px;
    height: 120px;
  }
  .spin-2{
    border: 5px solid #41b883 ;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    width: 100px;
    height: 100px;
    animation-delay: 1s;
  }
  .spin-3{
    border: 5px solid #d2d947 ;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    width: 80px;
    height: 80px;
    animation-delay: 1s;
  }
  .spin-4{
    border: 5px solid #f2a342 ;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    width: 60px;
    height: 60px;
    animation-delay: 1s;
  }
  .spin-5{
    border: 5px solid #34495e ;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    width: 40px;
    height: 40px;
    animation-delay: 1s;
  }
  .spin-6{
    border: 5px solid #fff ;
    width: 20px;
    height: 20px;
    animation-delay: 1s;
  }

</style>
