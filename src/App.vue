<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-stats></app-stats>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header';
import Banner from './Banner';
import Stats from './Stats';
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
    appBanner: Banner,
    appStats: Stats,
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

  body {
    font-family: "Roboto", sans-serif;
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
