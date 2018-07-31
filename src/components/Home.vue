<template>
  <div id="home-container">
    <app-banner></app-banner>
    <app-stats></app-stats>
    <h1 class="rumor-title">Current Item Shop</h1>
    <div class="part-rumors">
      <img src="../assets/currentshop.png" alt="">
    </div>
  </div>
</template>

<script>
import Banner from '../Banner';
import Stats from '../Stats';

export default {
  data () {
    return {
      dropDownValue: "pc",
      epicUsername: "shadypc"
    }
  },
  components: {
    appBanner: Banner,
    appStats: Stats
  }
}
</script>

<style scoped>

  *::before,
  *::after,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  #home-container {
    font-family: "Roboto", sans-serif;
    background-color: #cfd8dc;
    padding: 0 0 40px 0;
  }

  .part-rumors img {
    width: 100%;
    padding: 40px;
  }

  .card {
    box-shadow: 2px 2px 30px -15px black;
  }

  .card-body {
    padding: 1.25rem;
  }

  .card-body a {
    margin-top: 20px;
    padding: 0.375rem 0.75rem;
  }

  .rumor-title {
    text-align: center;
    margin: 40px 0 20px 0;
    font-family: "LuckiestGuy", sans-serif;
  }

  .rumor-button {
    padding: 10px 30px;
    background-color: grey;
    color: #eee;
    border-radius: 2px;
    display: block;
    text-align: center;
    width: 200px;
    margin: 40px auto 0 auto;
  }

  @media only screen and (min-width: 1500px) {
    body {
      margin: 0 150px;
    }
  }

  @media only screen and (max-width: 1000px) {
    body {
      margin: 0;
    }
  }

  @media only screen and (max-width: 850px) {
    body {
      margin: 0;
    }

    .all-stats {
      flex-direction: column;
      padding: 50px 100px;
    }

  }

  @media only screen and (max-width: 500px) {
    .all-stats {
      padding: 0;
    }
  }

</style>
