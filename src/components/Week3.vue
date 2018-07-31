<template>
  <div id="week3">
    <img src="./../assets/challenges/week3banner.png" alt="">
    <div class="content">
      <hr>
      <h3>Free Challenges</h3>
      <ul class="inside">
        <li><a href="#damage">Deal damage to opponents in a single match (500)</a></li>
        <li><a href="#launchpad">Use a launchpad (1)</a></li>
        <li><a href="#treasure">Follow the treasure map in Flush Factory (1) (<strong>HARD</strong>)</a></li>
      </ul>
      <h3>Battle Pass Challenges</h3>
      <ul class="inside">
        <li><a href="#chests">Search chests in Fatal Fields (7)</a></li>
        <li><a href="#clay">Shoot a Clay Pigeon at different locations (5)</a></li>
        <li><a href="#haunted">Eliminate opponents in Haunted Hills (5)</a></li>
        <li><a href="#explosive">Explosive weapon eliminations (3) (<strong>HARD</strong>)</a></li>
      </ul>
      <img class="blank" src="./../assets/challenges/blankweek3.jpg" alt="">
      <h5 id="damage">Deal damage to opponents in a single match (500)</h5>
      <p>This challenge is fairly simple to complete all you have to do is continue to play the game. A faster method may be playing 50v50 as there is an easier chance of you doing damage.</p>
      <hr>
      <h5 id="launchpad">Use a launchpad (1)</h5>
      <p>Again this challenge just takes time to happen. There isn't much skill required. The 50v50 game mode offers more launch pads so that may be the way to go.</p>
      <hr>
      <h5 id="treasure">Follow the treasure map in Flush Factory (1) (<strong>HARD</strong>)</h5>
      <p>This was a more difficult treasure map to follow but luckily we have figured it out and included pictures. The location is just north west of Fatal Fields on a mountain.</p>
      <img class="blank" src="./../assets/challenges/fatalmap.jpg" alt="">
      <p>Once you land just look for the dirt pile on the edge of the mountain. It isn't too difficult to find.</p>
      <img class="blank" src="./../assets/challenges/fatalground.jpg" alt="">
      <hr>
      <h5 id="chests">Search chests in Fatal Fields (7)</h5>
      <p>This challenge is relatively simple as well. The only difficult part will be trying to accomplish this challenge while every other player is trying to complete it, so give it a few days. But the chest locations are displayed below.</p>
      <img class="blank" src="./../assets/challenges/fatalchestsmap.png" alt="">
      <hr>
      <h5 id="clay">Shoot a Clay Pigeon at different locations (5)</h5>
      <p>This is another interact with the environment challenge. Much like last week with the basketball hoops, this week you need to shoot 5 Clay Pigeons that are located around the map. Luckily I have the locations for you!</p>
      <img class="blank" src="./../assets/challenges/claymap.png" alt="">
      <hr>
      <h5 id="haunted">Eliminate opponents in Haunted Hills (5)</h5>
      <p>This challenge will take a few games to complete, but there isn't much to it. Land at Haunted Hills and get 5 kills. The sooner you attempt this challenge the better, because everyone else will be there with you!</p>
      <hr>
      <h5 id="explosive">Explosive weapon eliminations (3) (<strong>HARD</strong>)</h5>
      <p>This challenge is one of the more difficult challenges just because of how often you have an opportunity to complete it. You may be better off going into a 50v50 game where grenade launchers and rocket launchers are much more important.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>

  #week3 {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #week3 img {
    box-shadow: 1px 1px 25px -5px black;
  }
  
  .blank {
    width: 100%;
    margin: 20px 0;
  }

  .content {
    background-color: #cfd8dc;
    margin-top: 20px;
    padding: 20px 40px;
    width: 700px;
  }

  .inside {
    margin-left: 30px;
  }

  .inside a {
    display: inline-block;
    color: #333;
    text-decoration: underline;
  }

  @media only screen and (max-width: 1000px) {
    #week3 {
      padding: 10px;
    }

    #week3 img {
      width: 100%;
    }

    .content {
      width: 100%;
      padding: 10px 20px;
      font-size: 12px;
    }
  }

</style>


