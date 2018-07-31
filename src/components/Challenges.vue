<template>
  <div id="challenge-container">
    <h1>Weekly Challenges</h1>
    <div class="week-container">
      <router-link to="/challenges/week3"><img class="weeks" id="week3" src="../assets/week3.png" alt=""></router-link>
      <router-link to="/challenges/week2"><img class="weeks" id="week2" src="../assets/week2.png" alt=""></router-link>
      <router-link to="/challenges/week1"><img class="weeks" id="week1" src="../assets/week1.png" alt=""></router-link>
    </div>
  </div>
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

  #challenge-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #cfd8dc;
  }

  #challenge-container h1 {
    font-family: "LuckiestGuy", sans-serif;
  }

  .week-container {
    text-align: center;
  }

  .weeks {
    margin: 10px 0;
    display: block;
  }

  @media only screen and (max-width: 800px) {
    #week3 {
      content:url("../assets/week3tablet.png");
    }

    #week2 {
      content:url("../assets/week2tablet.png");
    }

    #week1 {
      content:url("../assets/week1tablet.png");
    }
  }

  @media only screen and (max-width: 600px) {
    #week3 {
      content:url("../assets/week3mobile.png");
    }

    #week2 {
      content:url("../assets/week2mobile.png");
    }

    #week1 {
      content:url("../assets/week1mobile.png");
    }
  }

</style>


