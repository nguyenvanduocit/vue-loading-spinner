<template>
  <h1>Spinner Test Page</h1>

  <section data-testid="default-spinners">
    <h2>Default Props</h2>
    <div class="grid">
      <div v-for="(Comp, name) in spinners" :key="name" class="spinner-card" :data-testid="name">
        <component :is="Comp" />
        <span>{{ name }}</span>
      </div>
    </div>
  </section>

  <section data-testid="custom-spinners">
    <h2>Custom Props</h2>
    <div class="grid">
      <div class="spinner-card" data-testid="custom-circle">
        <Circle size="80px" />
        <span>Circle 80px</span>
      </div>
      <div class="spinner-card" data-testid="custom-doublebounce">
        <DoubleBounce size="60px" color="#e74c3c" duration="1.5s" />
        <span>DoubleBounce custom</span>
      </div>
      <div class="spinner-card" data-testid="custom-lettercube">
        <LetterCube size="80px" color="#3498db" :letters="['V', 'U', 'E', ' ', '3', '!']" />
        <span>LetterCube custom</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Circle, Circle2, Circle3, Circle4, Circle5, Circle6, Circle7, Circle8, Circle9, Circle10, Circle11,
  CubeShadow, Diamond, DoubleBounce, Gauge, Google, Hexagon, HourGlass, Jawn, Jumper, LetterCube,
  MikePad, Origami, Pencil, PingPong, Plane, RotateSquare, RotateSquare2, RotateSquare3,
  RotateSquare4, RotateSquare5, RotateSquare6, ScaleOut, Socket, SpinLine, SquareGrid, Stretch,
  Texture, ThreeDots, TwoCube, Wave,
} from 'vue-loading-spinner'

const spinners: Record<string, any> = {
  Circle, Circle2, Circle3, Circle4, Circle5, Circle6, Circle7, Circle8, Circle9, Circle10, Circle11,
  CubeShadow, Diamond, DoubleBounce, Gauge, Google, Hexagon, HourGlass, Jawn, Jumper, LetterCube,
  MikePad, Origami, Pencil, PingPong, Plane, RotateSquare, RotateSquare2, RotateSquare3,
  RotateSquare4, RotateSquare5, RotateSquare6, ScaleOut, Socket, SpinLine, SquareGrid, Stretch,
  Texture, ThreeDots, TwoCube, Wave,
}
</script>
