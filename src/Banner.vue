<template>
  <div id="banner">
    <slider :interval="5000" animation="fade">
      <slider-item>
        <img class="banner" src="./assets/1.png" alt="">
      </slider-item>
      <slider-item>
        <img class="banner" src="./assets/2.png" alt="">
      </slider-item>
      <slider-item>
        <img class="banner" src="./assets/3.png" alt="">
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  data () {
    return {
    }
  },
  components: {
    Slider,
    SliderItem
  }
}
</script>

<style>

  #banner {
    background-color: #455a64;
    height: 400px;
  }

  .banner {
    background-size: cover;
    height: 100%;
    width: 100%;
  }

  .text {
    text-align: center;
    width: 400px;
    background-color: rgba(100,100,100,.5);
    color: #eee;
    text-shadow: 1px 1px 2px black;
    padding: 30px;
  }

  .text h1 {
    font-size: 30px;
  }

  .text,
  .text h1 {
    margin-bottom: 20px;
  }

  .slider {
      height: 100% !important;
    }

  @media only screen and (max-width: 600px) {
    #banner {
      height: 150px;
    }
  }

  @media only screen and (min-width: 1500px) {
    #banner {
      height: 600px;
    }
  }

</style>
