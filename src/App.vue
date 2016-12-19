<template>
  <div id="app">
    <div class="header">
      <h1 class="header--title">vue-loading-spinner v1.0</h1>
    </div>
    <div class="spinner-list">
      <div class="spinner-container" v-for="spinner in spinners">
        <component :is="spinner" :size="size"></component>
        <div class="name" v-text="spinner"></div>
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
      size: '40px',
      spinners: [
        'RotateSquare',
        'RotateSquare2',
        'DoubleBounce',
        'Stretch',
        'Cube',
        'CubeGrid',
        'CubeShadow',
        'ScaleOut',
        'CircleSpin',
        'CircleSpin2',
        'CircleSpin3',
        'CircleSpin4',
        'CircleSpin5',
        'CircleSpin6',
        'ThreeDots',
        'GoogleSpin',
        'Gauge',
        'Origami',
        'Hexagon',
        'Socket'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 100px;
  margin-top: 50px;
}
.header{
  .header--title{
    color: #41b883;
    font-size: 35px;
  }
}
.spinner-list{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.spinner-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 250px;
  min-width: 250px;
  width: 25%;
  overflow: hidden;
  .name{
    margin-top: 10px;
    color: #41b883;
    font-size: 18px;
  }
}
</style>
