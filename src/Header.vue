<template>
  <nav class="navbar navbar-expand-lg">
    <img src="./assets/logo.png" alt="">
    <button @click="navOpen = !navOpen" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{collapse: navOpen}" class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Rumors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Challenges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skins</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="googleSearch">
        <a :href="'https://google.com/search?q=' + googleSearch">Search</a>
      </form>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      navOpen: true,
      googleSearch: ""
    }
  }
}
</script>

<style scoped>

  .navbar {
    padding: 20px 50px;
    align-items: center;
    background-color: #eceff1;
  }

  nav img {
    width: 100px;
    margin-right: 20px;
  }

  li a {
    margin-top: 18px;
    padding: 5px;
    margin-right: 10px;
  }

  .nav-link {
    color: #37474f;
    transition: all .3s;
    border-bottom: 3px solid transparent;
  }
  .active,
  .nav-link:hover {
    /* background-color: red; */
    color: #607d8b;
    border-bottom: 3px solid #263238;
    transform: translateY(-5px);
  }

  .nav-link:active {
    transform: translateY(-4px);
  }

  form a {
    border: 1px solid black;
    padding: 5px 20px;
    color: #263238;
  }

</style>
