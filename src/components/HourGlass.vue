<template>
  <div v-bind:style="styles" class="spinner spinner--hour-glass">
    <div v-bind:style="innerStyles" class="spinner-inner">
      <svg class="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none">
        <path class="middle" d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"/>
        <path class="outer" d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"/>
      </svg>
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
        transform: 'scale(' + (size / 64) + ')'
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
  $bg: #fff;
  $fill:#41b883;
  .spinner{
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  .hourglass{
    display:block;
    background:$bg;
    width:32px;
    height:64px;
    box-shadow:
            inset $bg 0 0 0 0,
            inset $fill 0 32px 0 0,
            inset $bg 0 0 64px 0;
    animation:hourglass 1s linear infinite;
  }

  .outer{
    fill:$fill;
  }

  .middle{
    fill:$bg;
  }

  @keyframes hourglass{
    0%{
      transform:rotate(0deg);
      box-shadow:
              inset $bg 0 0 0 0,
              inset $fill 0 32px 0 0,
              inset $bg 0 64px 0 0,
              inset $fill 0 64px 0 0;
    }
    80%{
      transform:rotate(0deg);
      box-shadow:
              inset $bg 0 32px 0 0,
              inset $fill 0 32px 0 0,
              inset $bg 0 32px 0 0,
              inset $fill 0 64px 0 0;
    }
    100%{
      transform:rotate(180deg);
      box-shadow:
              inset $bg 0 32px 0 0,
              inset $fill 0 32px 0 0,
              inset $bg 0 32px 0 0,
              inset $fill 0 64px 0 0;
    }
  }
</style>
