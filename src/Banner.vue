<template>
  <div id="banner">
    <slider :interval="5000" animation="fade">
      <slider-item>
        <div class="image image1">
          <div class="text">
            <h1>Halloween skins making a comeback?</h1>
            <p>People have been speculating that the legendary Skull Trooper skin may be coming back as well as the scythe. We are not sure exactly how they plan to bring it back but based off how accurate other leaks are I would say there is a pretty good chance.</p>
          </div>
        </div>
      </slider-item>
      <slider-item>
        <div class="image image2">
          <div class="text">
            <h1>Whats your favorite skin?</h1>
            <p>Epic games has over 100 amazing skins that if you were to purchase all of, it would cost somewhere around $3,500. If you have every skin congratulations you have spent a LOT of money on a FREE game. Haha, but no really.</p>
          </div>
        </div>
      </slider-item>
      <slider-item>
        <div class="image image3">
          <div class="text">
            <h1>Who's trying to shoot hoops?</h1>
            <p>A challenge in Week 2's Battle Pass is to make 5 baskets around the map. The addition of the basketball emote and the golf ball emote are so awesome. Epic games is killing it, keep it up!</p>
          </div>
        </div>
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

  .slider {
    height: 100% !important;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
  }

  .image1 {
    background-image: url("assets/1.png");
  }

  .image2 {
    background-image: url("assets/2.jpg");
  }

  .image3 {
    background-image: url("assets/3.jpg");
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

</style>
