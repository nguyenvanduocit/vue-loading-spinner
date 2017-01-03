<template>
  <svg v-bind:style="styles" class="spinner spinner--pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 677.34762 182.15429">
    <g>
      <path class="body-pencil" d="M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z">
      </path>
      <path class="line" d="M134.482 157.147v25l518.57.008.002-25-518.572-.008z">
      </path>
    </g>
  </svg>
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
    styles () {
      return {
        width: this.size,
        height: 'auto',
        fill: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .line {
    animation: linePencil .8s infinite linear;
  }

  @keyframes linePencil {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150px);
    }
  }
</style>
