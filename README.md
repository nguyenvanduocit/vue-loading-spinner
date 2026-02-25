# vue-loading-spinner

> Loading spinner collection for Vue 3

## Installation

```bash
bun add vue-loading-spinner
```

## Usage

### Individual components

```vue
<template>
  <RotateSquare2 />
</template>

<script setup>
import { RotateSquare2 } from 'vue-loading-spinner'
</script>
```

### Plugin (register all components globally)

```ts
import { createApp } from 'vue'
import VueLoadingSpinner from 'vue-loading-spinner'
import 'vue-loading-spinner/dist/vue-loading-spinner.css'

const app = createApp(App)
app.use(VueLoadingSpinner)
```

### Props

All spinners accept a `size` prop (default `'40px'`). Most accept a `color` prop (default `'#41b883'`). Some accept `duration`, `secondaryColor`, or `spinnerColor`.

```vue
<Circle size="60px" />
<DoubleBounce size="50px" color="#3498db" duration="1.5s" />
<Hexagon size="80px" color="#e74c3c" spinner-color="#c0392b" />
```

### Composables

#### `useLoading`

Manage loading state with async support.

```vue
<template>
  <Circle v-if="isLoading" />
  <button @click="fetchData">Load</button>
</template>

<script setup>
import { Circle, useLoading } from 'vue-loading-spinner'

const { isLoading, withLoading } = useLoading()

const fetchData = () => withLoading(() => fetch('/api/data'))
</script>
```

#### `useSpinner` / `useScaledSpinner`

Internal composables for building custom spinners with consistent size/scale behavior.

## Available Spinners

Circle, Circle2-11, CubeShadow, Diamond, DoubleBounce, Gauge, Google, Hexagon, HourGlass, Jawn, Jumper, LetterCube, MikePad, Origami, Pencil, PingPong, Plane, RotateSquare, RotateSquare2-6, ScaleOut, Socket, SpinLine, SquareGrid, Stretch, Texture, ThreeDots, TwoCube, Wave

## Development

```bash
bun install
bun run build
bun run typecheck
```
