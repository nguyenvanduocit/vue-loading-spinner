<template>
  <div v-bind:style="styles" class="spinner">
    <div v-bind:style="blobStyles" class="blob top"></div>
    <div v-bind:style="blobStyles" class="blob bottom"></div>
    <div v-bind:style="blobStyles" class="blob left"></div>
    <div v-bind:style="moveBlobStyles" class="blob move-blob"></div>
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
    blobStyles () {
      return {
        borderColor: this.color
      }
    },
    moveBlobStyles () {
      return {
        borderColor: this.color,
        background: this.color
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
  .spinner {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
    .blob {
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid #41b883;
      width: 10px;
      height: 10px;
      border-radius: 50%;

      &.top {
        top: 0;
        transform: translate(-50%, 0);
        animation: blob-top 1s infinite ease-in;
      }
      &.bottom {
        top: 100%;
        transform: translate(-50%, -100%);
        animation: blob-bottom 1s infinite ease-in;
      }
      &.left {
        left: 0;
        transform: translate(0, -50%);
        animation: blob-left 1s infinite ease-in;
      }
    }

    .move-blob {
      top: 0;
      transform: translate(-50%, 0);
      animation: blob-spinner-mover 1s infinite ease-in;
    }
  }

  @keyframes blob-bottom {
    25%, 50%, 75% {
      top: 50%;
      left: 100%;
      transform: translate(-100%, -50%);
    }
    100% {
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  @keyframes blob-left {
    25% {
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }
    50%, 100% {
      top: 100%;
      left: 50%;
      transform: translate(-50%, -100%);
    }
  }
  @keyframes blob-top {
    50% {
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
    75%, 100% {
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }
  }

  @keyframes blob-spinner-mover {
    0%, 100% {
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
    25% {
      top: 50%;
      left: 100%;
      transform: translate(-100%, -50%);
    }
    50% {
      top: 100%;
      left: 50%;
      transform: translate(-50%, -100%);
    }
    75% {
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }
  }
</style>
