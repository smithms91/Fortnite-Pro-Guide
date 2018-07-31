<template>
  <div id="week1">
    <img src="./../assets/challenges/week1banner.png" alt="">
    <div class="content">
      <hr>
      <h3>Free Challenges</h3>
      <ul class="inside">
        <li><a href="#smg">Deal damage with SMGs to opponents (500)</a></li>
        <li><a href="#llama">Search a Supply Llama (1)</a></li>
        <li><a href="#nade">Clinger, Stink Bomb, or Grenade Eliminations (3) (<strong>HARD</strong>)</a></li>
      </ul>
      <h3>Battle Pass Challenges</h3>
      <ul class="inside">
        <li><a href="#snobby">Search Chests in Snobby Shores (7)</a></li>
        <li><a href="#bolts">Search floating Lightning Bolts (7)</a></li>
        <li><a href="#risky">Follow the treasure map found in Risky Reels (<strong>HARD</strong>)</a></li>
        <li><a href="#retail">Eliminate opponents in Retail Row (3) (<strong>HARD</strong>)</a></li>
      </ul>
      <img class="blank" src="./../assets/challenges/blankweek1.jpg" alt="">
      <h5 id="smg">Deal damage with SMGs to opponents (500)</h5>
      <p>With the current meta, SMG eliminations shouldn't be too hard to come by. This should only take a few games to complete.</p>
      <hr>
      <h5 id="llama">Search a supply Llama (1)</h5>
      <p>Llamas are pretty much based off RNG which can make them difficult to find, but when you are jumping out of the bus try and do your best to scout as much territory as possible to ensure your chances of finding one of these guys!</p>
      <img class="blank" src="./../assets/challenges/llama.jpg" alt="">
      <hr>
      <h5 id="nade">Clinger, Stink Bomb, or Grenade Eliminations (3) (<strong>HARD</strong>)</h5>
      <p>This is one of the more difficult challenges so far this season. The best advice I can offer is to join 50v50 games and save as many explosives as possible to throw at your opponents base when the time comes.</p>
      <hr>
      <h5 id="snobby">Search chests in Snobby Shores (7)</h5>
      <p>As with other chest challenges, give them a week or so to calm down and it really makes these challenges easier. Overall Snobby Shores has pretty good loot, but being on the west side of the map you are often left running much of the game to catch up to the circle.</p>
      <img class="blank" src="./../assets/challenges/snobbychests.png" alt="">
      <hr>
      <h5 id="bolts">Search floating Lightning Bolts (7)</h5>
      <p>You will see these floating randomly throughout the map. It isn't so much hard as time consuming to grab 7 of them. Be careful not to get shot as you are trying to get them as well!</p>
      <img class="blank" src="./../assets/challenges/bolts.jpg" alt="">
      <hr>
      <h5 id="risky">Follow the treasure map found in Risky Reels (<strong>HARD</strong>)</h5>
      <p>These challenges are listed as <strong>Hard</strong> but that is only if you don't know the location. Luckily we got you!</p>
      <img class="blank" src="./../assets/challenges/paradisemap.jpg" alt="">
      <p>Here is an image from the ground level. It is just off the side of the mountain next to this odd shaped rock. Hope this helps!</p>
      <img class="blank" src="./../assets/challenges/paradisemapground.jpg" alt="">
      <hr>
      <h5 id="retail">Eliminate opponents in Retail Row (3) (<strong>HARD</strong>)</h5>
      <p>Retail Row always has people. Get a good bus, get to the ground, grab a gun, and get fragging!</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #week1 {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #week1 img {
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
    #week1 {
      padding: 10px;
    }

    #week1 img {
      width: 100%;
    }

    .content {
      width: 100%;
      padding: 10px 20px;
      font-size: 12px;
    }
  }
</style>


