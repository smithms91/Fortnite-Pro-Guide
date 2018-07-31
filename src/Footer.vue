<template>
  <footer class="page-footer font-small">
    <div class="container-fluid text-center text-md-left">
      <div class="row">
        <div class="col-md-6 mt-md-0 mt-3 left">
          <h5 class="text-uppercase">Keep in touch!</h5>
          <div class="icons">
            <i class="fab fa-discord down"></i>
            <i class="fab fa-youtube-square"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter-square"></i>
          </div>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3">
        <div class="col-md-3 mb-md-0 mb-3 right">
          <img src="./assets/linelogo.png" alt="">
          <ul class="list-unstyled">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/patchnotes">Patch Notes</router-link>
            </li>
            <li>
              <router-link to="/challenges">Challenges</router-link>
            </li>
            <li>
              <router-link to="/skins">Skins</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3 bottom">
      <span>© 2018 Copyright: </span><a href="https://mdbootstrap.com/bootstrap-tutorial/"> FortniteProGuide.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return{

    }
  }
}
</script>

<style scoped>

  footer .container-fluid {
    background-color: #37474f;
    color: #eceff1;
    padding: 10px 50px;
  }

  i {
    font-size: 35px;
    margin-right: 10px;
  }

  .down {
    position: relative;
    top: 2px;
    color: #7489DC;
  }

  .fa-youtube-square {
    color: rgba(244, 67, 54, 0.7);
  }

  .fa-facebook {
    color: #3B5998;
  }

  .fa-twitter-square {
    color: #42B6E7;
  }

  .row {
    align-items: center;
    justify-content: space-evenly;
  }

  .right {
    text-align: center !important;
  }

  .right img {
    width: 200px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  a {
    color: #eee;
  }

  .bottom {
    background-color: #263238;
    color: #eceff1;
  }

</style>


