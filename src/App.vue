<template>
  <div id="app">
    <rotate-square></rotate-square>
    <double-bounce></double-bounce>
    <stretch></stretch>
    <cube></cube>
    <cube-grid></cube-grid>
    <scale-out></scale-out>
    <circle-spin></circle-spin>
    <circle-spin-2></circle-spin-2>
    <circle-spin-3></circle-spin-3>
  </div>
</template>

<script>
import RotateSquare from './components/RotateSquare'
import DoubleBounce from './components/DoubleBounce'
import Stretch from './components/Stretch'
import Cube from './components/Cube'
import CubeGrid from './components/CubeGrid'
import ScaleOut from './components/ScaleOut'
import CircleSpin from './components/Circle'
import CircleSpin2 from './components/Circle2'
import CircleSpin3 from './components/Circle3'
export default {
  name: 'app',
  components: {
    RotateSquare,
    DoubleBounce,
    Stretch,
    Cube,
    CubeGrid,
    ScaleOut,
    CircleSpin,
    CircleSpin2,
    CircleSpin3
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
