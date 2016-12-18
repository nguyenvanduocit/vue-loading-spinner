<template>
  <div id="app">
    <div class="spinner-list">
      <div class="spinner-container">
        <rotate-square :size="size"></rotate-square>
      </div>
      <div class="spinner-container">
        <rotate-square-2 :size="size"></rotate-square-2>
      </div>
      <div class="spinner-container">
        <double-bounce :size="size"></double-bounce>
      </div>
      <div class="spinner-container">
        <stretch :size="size"></stretch>
      </div>
      <div class="spinner-container">
        <cube :size="size"></cube>
      </div>
      <div class="spinner-container">
        <cube-grid :size="size"></cube-grid>
      </div>
      <div class="spinner-container">
        <cube-shadow :size="size"></cube-shadow>
      </div>
      <div class="spinner-container">
        <scale-out :size="size"></scale-out>
      </div>
      <div class="spinner-container">
        <circle-spin :size="size"></circle-spin>
      </div>
      <div class="spinner-container">
        <circle-spin-2 :size="size"></circle-spin-2>
      </div>
      <div class="spinner-container">
        <circle-spin-3 :size="size"></circle-spin-3>
      </div>
      <div class="spinner-container">
        <circle-spin-4 :size="size"></circle-spin-4>
      </div>
      <div class="spinner-container">
        <circle-spin-5 :size="size"></circle-spin-5>
      </div>
      <div class="spinner-container">
        <circle-spin-6 :size="size"></circle-spin-6>
      </div>
      <div class="spinner-container">
        <three-dots :size="size"></three-dots>
      </div>
      <div class="spinner-container">
        <google-spin :size="size"></google-spin>
      </div>
      <div class="spinner-container">
        <gauge :size="size"></gauge>
      </div>
      <div class="spinner-container">
        <origami :size="size"></origami>
      </div>
      <div class="spinner-container">
        <hexagon :size="size"></hexagon>
      </div>
      <div class="spinner-container">
        <socket :size="size"></socket>
      </div>
    </div>
  </div>
</template>

<script>
import RotateSquare from './components/RotateSquare'
import RotateSquare2 from './components/RotateSquare2'
import DoubleBounce from './components/DoubleBounce'
import Stretch from './components/Stretch'
import Cube from './components/Cube'
import CubeGrid from './components/CubeGrid'
import CubeShadow from './components/CubeShadow'
import ScaleOut from './components/ScaleOut'
import CircleSpin from './components/Circle'
import CircleSpin2 from './components/Circle2'
import CircleSpin3 from './components/Circle3'
import CircleSpin4 from './components/Circle4'
import CircleSpin5 from './components/Circle5'
import CircleSpin6 from './components/Circle6'
import ThreeDots from './components/ThreeDots'
import GoogleSpin from './components/Google'
import Gauge from './components/Gauge'
import Origami from './components/Origami'
import Hexagon from './components/Hexagon'
import Socket from './components/Socket'
export default {
  name: 'app',
  components: {
    RotateSquare,
    RotateSquare2,
    DoubleBounce,
    Stretch,
    Cube,
    CubeGrid,
    CubeShadow,
    ScaleOut,
    CircleSpin,
    CircleSpin2,
    CircleSpin3,
    CircleSpin4,
    CircleSpin5,
    CircleSpin6,
    ThreeDots,
    GoogleSpin,
    Gauge,
    Hexagon,
    Socket,
    Origami
  },
  data () {
    return {
      size: '40px'
    }
  }
}
</script>

<style lang="scss" scoped>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.spinner-list{
  overflow-x: hidden;
}
.spinner-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 100vw;
  overflow: hidden;
}
</style>
