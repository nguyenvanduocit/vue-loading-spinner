<template>
  <div class="spinner loading spinner-origami">
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
    <span class="slice"></span>
  </div>
</template>
<style lang="scss" scoped>
  @for $i from 1 through 6 {
    @keyframes origami-show-#{$i}{
      from{
        transform: rotateZ(60* $i + deg) rotateY(-90deg) rotateX(0deg);
        border-left-color: #9c2f2f;
      }
    }
    @keyframes origami-hide-#{$i}{
      to{
        transform: rotateZ(60* $i + deg) rotateY(-90deg) rotateX(0deg);
        border-left-color: #9c2f2f;
      }
    }

    @keyframes origami-cycle-#{$i}{

      $startIndex: $i*5;
      $reverseIndex: (80 - $i*5);

      #{$startIndex * 1%}{
        transform: rotateZ(60* $i + deg) rotateY(90deg) rotateX(0deg);
        border-left-color: #9c2f2f;
      }
      #{$startIndex + 5%},
      #{$reverseIndex * 1%}{
        transform: rotateZ(60* $i + deg) rotateY(0) rotateX(0deg);
        border-left-color: #f7484e;
      }

      #{$reverseIndex + 5%},
      100%{
        transform: rotateZ(60* $i + deg) rotateY(90deg) rotateX(0deg);
        border-left-color: #9c2f2f;
      }
    }
  }

  @keyframes origami-flip{
    0%{
      transform: rotateY(0deg) rotateZ(-60deg);
    }
    100%{
      transform: rotateY(360deg) rotateZ(-60deg);
    }
  }

  .spinner{
    font-size: 20px;
    display: block;
    width: 3.75em;
    height: 4.25em;
    transform-origin: center center;
    transform: rotateY(180deg) rotateZ(-60deg);

    .slice{
      border-top: 1.125em solid transparent;
      border-right: none;
      border-bottom: 1em solid transparent;
      border-left: 1.875em solid #f7484e;
      position: absolute;
      top: 0px;
      left: 50%;
      transform-origin: left bottom;
      border-radius: 3px 3px 0 0;
    }

    @for $i from 1 through 6 {
      .slice:nth-child(#{$i}) {
        transform: rotateZ(60* $i + deg) rotateY(0deg) rotateX(0);
        animation: .15s linear .9 - $i*.08s origami-hide-#{$i} both 1;
      }
    }


    &.loading{
      animation: 2s origami-flip steps(2) infinite both;
      @for $i from 1 through 6 {
        .slice:nth-child(#{$i}) {
          transform: rotateZ(60* $i + deg) rotateY(90deg) rotateX(0);
          animation: 2s origami-cycle-#{$i} linear infinite both;
        }
      }
    }

  }
</style>