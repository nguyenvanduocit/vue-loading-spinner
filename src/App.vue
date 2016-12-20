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
import RotateSquare3 from './components/RotateSquare3'
import RotateSquare4 from './components/RotateSquare4'
import RotateSquare5 from './components/RotateSquare5'
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
import CircleSpin7 from './components/Circle7'
import CircleSpin8 from './components/Circle8'
import CircleSpin9 from './components/Circle9'
import CircleSpin10 from './components/Circle10'
import ThreeDots from './components/ThreeDots'
import GoogleSpin from './components/Google'
import Gauge from './components/Gauge'
import Origami from './components/Origami'
import Hexagon from './components/Hexagon'
import Socket from './components/Socket'
import HourGlass from './components/HourGlass'
import Pencil from './components/Pencil'
import Jawn from './components/Jawn'
import LetterCube from './components/LetterCube'
import PingPong from './components/PingPong'
import Diamond from './components/Diamond'
import SpinLine from './components/SpinLine'
import Plane from './components/Plane'
export default {
  name: 'app',
  components: {
    RotateSquare,
    RotateSquare2,
    RotateSquare3,
    RotateSquare4,
    RotateSquare5,
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
    CircleSpin7,
    CircleSpin8,
    CircleSpin9,
    CircleSpin10,
    ThreeDots,
    GoogleSpin,
    Gauge,
    Hexagon,
    Socket,
    Origami,
    HourGlass,
    Pencil,
    Jawn,
    LetterCube,
    PingPong,
    Diamond,
    SpinLine,
    Plane
  },
  data () {
    return {
      size: '60px',
      spinners: [
        'RotateSquare',
        'RotateSquare2',
        'RotateSquare3',
        'RotateSquare4',
        'RotateSquare5',
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
        'CircleSpin7',
        'CircleSpin8',
        'CircleSpin9',
        'CircleSpin10',
        'ThreeDots',
        'GoogleSpin',
        'Gauge',
        'Origami',
        'Hexagon',
        'Socket',
        'HourGlass',
        'Pencil',
        'Jawn',
        'LetterCube',
        'PingPong',
        'Diamond',
        'SpinLine',
        'Plane'
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
    font-weight: normal;
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
    font-size: 16px;
  }
}
</style>
