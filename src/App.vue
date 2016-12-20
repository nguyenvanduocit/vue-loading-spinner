<template>
  <div id="app">
    <div class="header">
      <h1 class="header--title">vue-loading-spinner v1.0</h1>
    </div>
    <div class="intro">
      <p>Just another collection of loading spinners with Vue.js, alot of spinners</p>
      <a class="btn" href="https://github.com/nguyenvanduocit/vue-loading-spinner">Github</a>
    </div>
    <div class="spinner-list">
      <div class="spinner-container" v-for="spinner in spinners">
        <component :is="spinner.component" :size="size"></component>
        <div class="name" v-text="spinner.path"></div>
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
import Mikepad from './components/Mikepad'
import Jumper from './components/Jumper'
import Wave from './components/Wave'
import Texture from './components/Texture'
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
    Plane,
    Mikepad,
    Jumper,
    Wave,
    Texture
  },
  data () {
    return {
      size: '60px',
      spinners: [
        {
          'component': 'RotateSquare',
          'path': 'RotateSquare'
        },
        {
          'component': 'RotateSquare2',
          'path': 'RotateSquare2'
        },
        {
          'component': 'RotateSquare3',
          'path': 'RotateSquare3'
        },
        {
          'component': 'RotateSquare4',
          'path': 'RotateSquare4'
        },
        {
          'component': 'RotateSquare5',
          'path': 'RotateSquare5'
        },
        {
          'component': 'CubeShadow',
          'path': 'CubeShadow'
        },
        {
          'component': 'Cube',
          'path': 'Cube'
        },
        {
          'component': 'CubeGrid',
          'path': 'CubeGrid'
        },
        {
          'component': 'DoubleBounce',
          'path': 'DoubleBounce'
        },
        {
          'component': 'Stretch',
          'path': 'Stretch'
        },
        {
          'component': 'ScaleOut',
          'path': 'ScaleOut'
        },
        {
          'component': 'Jumper',
          'path': 'Jumper'
        },
        {
          'component': 'Wave',
          'path': 'Wave'
        },
        {
          'component': 'CircleSpin',
          'path': 'Circle'
        },
        {
          'component': 'CircleSpin2',
          'path': 'Circle2'
        },
        {
          'component': 'CircleSpin3',
          'path': 'Circle3'
        },
        {
          'component': 'CircleSpin4',
          'path': 'Circle4'
        },
        {
          'component': 'CircleSpin5',
          'path': 'Circle5'
        },
        {
          'component': 'CircleSpin6',
          'path': 'Circle6'
        },
        {
          'component': 'CircleSpin7',
          'path': 'Circle7'
        },
        {
          'component': 'CircleSpin8',
          'path': 'Circle8'
        },
        {
          'component': 'CircleSpin9',
          'path': 'Circle9'
        },
        {
          'component': 'CircleSpin10',
          'path': 'Circle10'
        },
        {
          'component': 'GoogleSpin',
          'path': 'GoogleSpin'
        },
        {
          'component': 'ThreeDots',
          'path': 'ThreeDots'
        },
        {
          'component': 'Gauge',
          'path': 'Gauge'
        },
        {
          'component': 'Origami',
          'path': 'Origami'
        },
        {
          'component': 'Hexagon',
          'path': 'Hexagon'
        },
        {
          'component': 'Socket',
          'path': 'Socket'
        },
        {
          'component': 'HourGlass',
          'path': 'HourGlass'
        },
        {
          'component': 'Pencil',
          'path': 'Pencil'
        },
        {
          'component': 'Jawn',
          'path': 'Jawn'
        },
        {
          'component': 'LetterCube',
          'path': 'LetterCube'
        },
        {
          'component': 'PingPong',
          'path': 'PingPong'
        },
        {
          'component': 'Diamond',
          'path': 'Diamond'
        },
        {
          'component': 'SpinLine',
          'path': 'SpinLine'
        },
        {
          'component': 'Plane',
          'path': 'Plane'
        },
        {
          'component': 'Mikepad',
          'path': 'Mikepad'
        },
        {
          'component': 'Texture',
          'path': 'Texture'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 100px;
  margin-top: 50px;
}
.header{
  .header--title{
    color: #41b883;
    font-size: 48px;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 10px;
  }
}
.intro{
  color: #7f8c8d;
  margin-bottom: 50px;
}
.btn{
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 30px;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  text-transform: uppercase;
  text-decoration: none;
  &:hover{
    background-color: #57d69c;
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
