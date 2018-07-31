<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  data () {
    return {
      dropDownValue: "pc",
      epicUsername: "shadypc"
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>

  *::before,
  *::after,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  #app {
    box-shadow: 2px 2px 50px -10px;
  }

  body {
    font-family: "Roboto", sans-serif;
    background: #fcfcfc;
  }

  @media only screen and (min-width: 1500px) {
    body {
      margin: 0 150px;
    }
    .v--modal-block-scroll {
      width: auto;
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

    .v--modal-box,
    .v--modal {
      width: auto !important;
    }
  }

  @font-face {
    font-family: "LuckiestGuy";
    src: url("./assets/fonts/LuckiestGuy.ttf");
  }

</style>
