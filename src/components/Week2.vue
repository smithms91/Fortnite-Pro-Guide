<template>
  <div id="week2">
    <img src="./../assets/challenges/week2banner.png" alt="">
    <div class="content">
      <hr>
      <h3>Free Challenges</h3>
      <ul class="inside">
        <li><a href="#damage">Deal damage to opponents with assault rifles (1000)</a></li>
        <li><a href="#ammo">Search ammo boxes in a single match (7)</a></li>
        <li><a href="#paradise">Eliminate opponents in Paradise Palms (3) (<strong>HARD</strong>)</a></li>
      </ul>
      <h3>Battle Pass Challenges</h3>
      <ul class="inside">
        <li><a href="#baskets">Score a basket on different hoops (5)</a></li>
        <li><a href="#clay">Search chests in Loot Lake (7)</a></li>
        <li><a href="#map">Search between an oasis, rock archway, and dinosaurs (<strong>HARD</strong>)</a></li>
        <li><a href="#sniper">Get sniper rifle eliminations (2) (<strong>HARD</strong>)</a></li>
      </ul>
      <img class="blank" src="./../assets/challenges/blankweek2.jpg" alt="">
      <h5 id="damage">Deal damage to opponents with assault rifles (1000)</h5>
      <p>One of the more simple challenges. All that is really required for this one is playing the game. Maybe play a 50v50 so you can really do a lot of damage in one game. But this one is pretty straight forward.</p>
      <hr>
      <h5 id="ammo">Search ammo boxes in a single match (7)</h5>
      <p>This challenge may seem difficult and actually may take a few tries but if you actively search for ammo boxes it isn't too difficult. Land in places like <strong>Greasy Grove</strong> for example where there are TONS of ammo boxes. Land at the <strong>Hamburger Place</strong> as there are probably 7 ammo boxes in that building alone.</p>
      <hr>
      <h5 id="paradise">Eliminate opponents in Paradise Palms (3) (<strong>HARD</strong>)</h5>
      <p>This challenge is easy in the sense that tons of players land at Paradise Palms every game. Land quick, get a gun, and get to work!</p>
      <hr>
      <h5 id="baskets">Score a basket on different hoops (5)</h5>
      <p>This is a pretty unique challenge. You must be a high enough level on the <strong>Battle Pass</strong> to be able to complete it. It takes a little to get used to but once you get shooting down, you will be making 3 pointers like nothing.</p>
      <img class="blank" src="./../assets/challenges/basketballmap.png" alt="">
      <hr>
      <h5 id="clay">Search chests in Loot Lake (7)</h5>
      <p>Loot lake sucks. This challenge is annoying but believe it or not there are more chests at Loot Lake than you think. Some of them are extremely difficult to reach without being shot at but give this challenge a few attempts and I'm sure you'll get it.</p>
      <img class="blank" src="./../assets/challenges/lootlakechests.png" alt="">
      <hr>
      <h5 id="map">Search between an oasis, rock archway, and dinosaurs (<strong>HARD</strong>)</h5>
      <p>These challenges are always pretty difficult unless you know where to look. Luckily we know where to go.</p>
      <img class="blank" src="./../assets/challenges/paradisemap.jpg" alt="">
      <p>Here is an image from the ground level. It is just off the side of the mountain next to this odd shaped rock. Hope this helps!</p>
      <img class="blank" src="./../assets/challenges/paradisemapground.jpg" alt="">
      <hr>
      <h5 id="sniper">Get sniper rifle eliminations (2) (<strong>HARD</strong>)</h5>
      <p>Another challenge that may take some time depending on your Sniper skills. Although 2 kills isn't too difficult. Go into a 50v50 match and build a nice size base this shouldn't be too difficult.</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #week2 {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #week2 img {
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
    #week2 {
      padding: 10px;
    }

    #week2 img {
      width: 100%;
    }

    .content {
      width: 100%;
      padding: 10px 20px;
      font-size: 12px;
    }
  }
</style>


