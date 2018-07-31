<template>
  <div id="patch-notes-container">
    <div class="row">
      <div class="col-sm-8">
        <div class="card">
          <img class="card-img-top" src="../assets/patches/p5.10.jpg" alt="Patch v5.10">
          <div class="card-body">
            <h5 class="card-title">v5.10 is here.</h5>
            <p class="card-text">Unwrap the newest weapon in Battle Royale. Engage in close quarters combat with the high capacity, fast firing Compact SMG.</p>
            <p class="card-text">Celebrate #Fortnite1st with friends. Find birthday cake throughout the world and earn special cosmetics by completing challenges and quests in-game.</p>
            <a href="#" class="btn btn-secondary" @click="$modal.show('510modal');">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <img class="card-img-top" src="../assets/patches/p5.0.jpg" alt="Patch v5.0">
          <div class="card-body">
            <h5 class="card-title">v5.0 is here.</h5>
            <p class="card-text">Viking ships, desert outposts, and ancient statues have appeared across the island. Hop in an All Terrain Kart (ATK) with your squad and uncover all-new mysteries and locations that await.</p>
            <p class="card-text">Two new weapons make their way into Save the World and Battle Royale. Try these new additions for yourself in the v5.0 Content Update.</p>
            <a href="#" class="btn btn-secondary" @click="$modal.show('500modal');">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="card">
          <img class="card-img-top" src="../assets/patches/p4.5.jpg" alt="Patch v4.5">
          <div class="card-body">
            <h5 class="card-title">v4.5 is here.</h5>
            <p class="card-text">Celebrate summer with a bang! Explosions from the Grenade Launcher now emit firework effects for a limited time. Double the firepower and fun, the Dual Pistols can now be found in Battle Royale.</p>
            <p class="card-text">Test your aim and let your imagination run wild in the new Playground LTM.</p>
            <a href="#" class="btn btn-secondary" @click="$modal.show('450modal');">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <img class="card-img-top" src="../assets/patches/p4.4.jpg" alt="Patch v4.4">
          <div class="card-body">
            <h5 class="card-title">v4.4 is here.</h5>
            <p class="card-text">Eligible Traps can now be placed on ramps in both Battle Royale and Save the World. The Thermal Scope Assault Rifle also makes its debut in Battle Royale, so be careful where you hide.</p>
            <a href="#" class="btn btn-secondary" @click="$modal.show('440modal');">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <img class="card-img-top" src="../assets/patches/p4.3.png" alt="Patch v4.3">
          <div class="card-body">
            <h5 class="card-title">v4.3 is here.</h5>
            <p class="card-text">Players, start your Carts! Patch v4.3 introduces Shopping Carts to Battle Royale. Ride solo or grab a friend to cover you as you roll around the map together.</p>
            <a href="#" class="btn btn-secondary" @click="$modal.show('430modal');">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Section (Lots of code, don't open them) -->
    <modal class="patch-modal" name="510modal" height="auto" :scrollable="true">
      <a class="btn btn-outline-secondary" id="close" @click="$modal.hide('510modal')">Close</a>
      <h1 class="dark-top">Happy Birthday Fortnite Fans!</h1>
      <div class="patch-notes-description">Celebrate #Fortnite1st with friends. Find birthday cake throughout the world and earn special cosmetics by completing challenges and quests in-game.&nbsp;<br>
        <br>
        Playground is back and better than before. Challenge your friends to a duel and build incredible structures on your own private island. Wield the new Legendary weapon in Battle Royale, the Compact SMG.&nbsp;<br>
        <br>
        The Save the World storyline continues in the Canny Valley campaign. Get in-game and complete the Fortnite Birthday questline to unlock a special birthday reward!<br>
        <br>
        <strong><h4>#Fortnite1st Birthday</h4></strong><br>
        <p>We’ve got a birthday party planned for #Fortnite1st and you’re invited! Eat cake, party and bring your friends. Each Birthday Challenge you complete unlocks a slice of the birthday cosmetic set.&nbsp;
        <div style="text-align: center;"><img alt="BR05_Social_Bday-Back-Bling.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-10%2Foverview-text-v5-10%2FBR05_Social_Bday-Back-Bling-1920x1080-7f24a04c4afaaf1b0d000ec40da585fe52575643.jpg" width="auto"></div>
        <strong><h4>Playground LTM (Battle Royale)</h4></strong><br>
        <p>Playground mode is back on Wednesday, July 25! New team select options let you and your squad set up team battles for practice and training.&nbsp;<br>
        <br>
        <p>Race! Create and share your screenshots and cinematics on social.
        <div style="text-align: center;"><img alt="EN_BR04_YouTube_LTM-Playground.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-10%2Foverview-text-v5-10%2FEN_BR04_YouTube_LTM-Playground-1920x1080-a4f8554e6452b8d684b13c0f12e3c8731cc2aebc.jpg" width="auto"></div>
        <strong class="spacing"><h4>Compact SMG (Battle Royale)</h4></strong>
        <br>
        <p>Unwrap the newest weapon in Battle Royale. Engage in close quarters combat with the high capacity, fast firing Compact SMG.&nbsp;
        <div style="text-align: center;"><img alt="BR05_News_Header_16_9_Bobcat.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-10%2Foverview-text-v5-10%2FBR05_News_Header_16_9_Bobcat-1920x1080-ad3544fd33306e5e19b3031a7901e8698180bea2.jpg" width="auto"></div>
        <strong><h4>Canny Valley (Save the World)</h4></strong>
        <br>
        <p>Adventure into the desert of Canny Valley and explore Thunder Route 99... Immerse yourself in the story, uncover its secrets, and explore the new Arid Biome with your friends.
        <div style="text-align: center;"><img alt="StW05_Social_Canny-Valley.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-10%2Foverview-text-v5-10%2FStW05_Social_Canny-Valley-1920x1080-52ba46ccb847cf6c9d3d680e3b1bbb8813352d87.jpg" width="auto"></div>
        <strong><h4>Save the World Celebration</h4></strong>
        <br>
        <p>Celebrate #Fortnite1st with cake, loot, and a special in-game questline. Complete the questline to unlock Birthday Brigade Ramirez. While you’re partying, find and eat birthday cakes to earn event tickets which can be spent on the limited time Birthday Llama.
        <div style="text-align: center;"><img alt="StW05_Social_-Bday-Llama.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-10%2Foverview-text-v5-10%2FStW05_Social_-Bday-Llama-1920x1080-956e476358ce877d6b38e407455db4586776a2e1.jpg" width="auto"></div>

        <hr>
        <h2>General</h2>

        <ul>
          <li>New default keybindings for new players.
            <ul class="inside">
              <li>All keyboard layouts will continue to default to the QWERTY bindings for new players or those who reset their back to default.</li>
            </ul>
          </li>
          <li>Changed countdown timers to display more useful information
            <ul class="inside">
              <li>Shows hours left instead of days when under 72 hours.</li>
              <li>Shows hours:minutes: seconds left when below 13 hours.</li>
            </ul>
          </li>
          <li>Changed the background of the loading screen bullet points area to be partially translucent.</li>
          <li>Removed the “static noise” when switching tabs.</li>
          <li>The “Restore” button has been removed from the settings screen. Also, the “Reset Defaults” button has been renamed to “Reset”. &nbsp;
            <ul class="inside">
              <li>Leaving the settings screen before applying changes will give the option to apply changes and exit or discard changes and exit.&nbsp;</li>
            </ul>
          </li>
          <li>Double clicks now register as two clicks on a button, allowing for faster navigation through Next/Previous type buttons</li>
        </ul>
        &nbsp;<strong>Bug Fixes</strong>

        <ul>
          <li>Items on the ground will properly have their stack counts updated if the stack size changes while the player is currently looking at them.</li>
          <li>Fixed a frame delay on some text layouts, which would cause large blocks of text to reflow their wrapping one frame after seeing them.</li>
          <li>Corrected text shadows that were appearing incorrectly in certain areas of the UI.</li>
        </ul>

        <h2>Known Issues</h2>
        Wanting to track the top community issues? Head over to our Fortnite | Community Issues Trello board&nbsp;<a href="https://trello.com/b/Bs7hgkma/fortnite-community-issues">here</a>.

        <hr>
      </div>

      <h1 class="dark" id="brSection-anchor">Battle Royale</h1>
      <div class="patch-notes-description"><h2>Birthday Event</h2>

      <ul>
        <li>You can now find birthday cakes placed around the map with consumable slices next to them. Enjoy those tasty treats!
          <ul class="inside">
            <li>Cake slices give +5 health and +5 shield instantly when consumed.</li>
          </ul>
        </li>
        <li>Complete three birthday event challenges to unlock a new emote, spray, and Backbling.</li>
        <li>The Battlebus and Supply Drops have been decorated to celebrate #Fortnite1st.</li>
      </ul>

      <h2>Limited Time Mode: Playground</h2>
      <strong>Summary</strong><br>
      Playground is a low-pressure environment where friends can let their creativity run wild. Build massive structures. Practice with the weapons and items. Fight against your friends. This mode returns with improvements for a limited time on Wednesday, July 25. Have fun!<br>
      <br>
      <strong>What’s New?</strong>

      <ul>
        <li>Players can now switch teams in-game. Join the same team to work together creatively, join separate teams to practice fighting each other!
          <ul class="inside">
            <li>Note: Voice chat will remain on across all teams, future iterations of the mode will offer more customization.&nbsp;</li>
          </ul>
        </li>
        <li>Aim assist will work when using a gamepad against players on an opposing team.</li>
        <li>Matches will no longer end if one player leaves the server.</li>
        <li>Golf carts have been added and spawn 100% of the time.</li>
        <li>Ammo cans spawn 10x the amount of ammo.</li>
        <li>Removed grey vending machines, increased the chances of higher-tier machines spawning.</li>
        <li>Increased launch &amp; bounce pads spawn likelihood.</li>
        <li>Lowered forced glider deploy height, so players can get back into the action more quickly.</li>
        <li>Increased max rocket ammo cap to 60.</li>
        <li>Increased rocket ammo drop rates.</li>
        <li>Added 100 Supply Drops.</li>
        <li>Chests now spawn 3 weapons and more ammo &amp; consumables than normal.</li>
        <li>Floor loot now spawns 3 items.</li>
        <li>Increased Chug Jug and Slurp Juice spawn chances, decreased Bandages.</li>
        <li>Added Chug Jugs to floor loot.</li>
        <li>Respawn timer lowered from 10s to 3s.</li>
      </ul>
      <strong>Mode Details</strong>

      <ul>
        <li>Drop into the Battle Royale map alone or with up to a full squad for an hour.</li>
        <li>Players respawn immediately unless eliminated by the Storm.</li>
        <li>The Storm doesn't start closing in for 55 minutes and takes 5 minutes to close in.</li>
        <li>Resources gained from harvesting increased by ten times the normal amount.</li>
        <li>100 Llamas will be spawned on the map.</li>
        <li>Chests &amp; ammo boxes spawn 100% of the time.</li>
      </ul>

      <h2>Weapons + Items</h2>

      <ul>
        <li>Compact SMG added.
          <ul class="inside">
            <li>Available in Epic and Legendary variants.
              <ul class="inside">
                <li>23-24 base damage.</li>
              </ul>
            </li>
            <li>Uses Light Ammo.</li>
            <li>50 round capacity.</li>
            <li>Can be found from floor loot, chests, Supply Drops, and Vending Machines.</li>
          </ul>
        </li>
        <li>SMG changes (7/25):
          <ul class="inside">
            <li>SMG and Compact SMG accuracy bonus reduced from 35% to 15%.</li>
            <li>SMG damage reduced from 19/20/21 to 17/18/19.</li>
            <li>Compact SMG damage reduced from 23/24 to 21/22.</li>
            <li>SMG fire rate reduced from 13 to 12.</li>
            <li>Compact SMG fire rate reduced from 11 to 10</li>
            <li>SMG, Compact SMG, and Silenced SMG damage falloff.
              <ul class="inside">
                <li>Range reduced from 2400/3500/5000 to 2000/3000/4000.</li>
                <li>Percentage reduced from 100/80/65% to 100/70/40%.</li>
              </ul>
            </li>
            <li>Rare SMG and Compact SMGs drop rates slightly reduced.</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>Slurp Juice now grants 1 health every 0.5 seconds, up to a total of 75. If health is full, shield will be granted instead.</li>
        <li>Supply Drop loot rates adjusted.
          <ul class="inside">
            <li>Weapons (drops 1)
              <ul class="inside">
                <li>Assault Rifles to 25% from 14.2%.</li>
                <li>Explosives to 25% from 28.5%.</li>
                <li>Compact SMG 14.58%.</li>
                <li>Sniper Rifles to 14.58% from 28.5%.</li>
                <li>Heavy Shotgun to 10.42% from 7.1%.</li>
                <li>Minigun to 10.42% from 14.2%.</li>
                <li>Removed Hand Cannon, Dual Pistols, and Silenced Pistol.</li>
              </ul>
            </li>
            <li>Traps (drops 2)
              <ul class="inside">
                <li>Launch Pad to 44.44% from 9.6%.</li>
                <li>Cozy Campfire to 33.33% from 7.5%.</li>
                <li>Bouncer to 22.22% from 15%.</li>
                <li>Removed Damage Traps.</li>
              </ul>
            </li>
            <li>Consumables (drops 2)
              <ul class="inside">
                <li>Shield Potion to 20% from 19.1%</li>
                <li>Small Shield Potion to 17.50% from 12.7%</li>
                <li>Med Kit to 13.75% from 6.3%</li>
                <li>Slurp Juice to 11.25% from 5.11%</li>
                <li>Clinger to 10% from 6.3%</li>
                <li>Remote Explosives to 10% from 3.3%</li>
                <li>Impulse Grenade to 10% from 4%</li>
                <li>Chug Jug to 7.5% from 2.1%</li>
                <li>Removed Boogie Bombs, Grenades, Bandages, Stink Bombs, Port-a-Forts, and Bush.</li>
              </ul>
            </li>
            <li>Materials (drops 2)
              <ul class="inside">
                <li>Wood to 33% from 47.6%.</li>
                <li>Stone to 33% from 35.7%.</li>
                <li>Metal to 33% from 16.6%.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Gameplay</h2>

      <ul>
        <li>Changes to building materials.
          <ul class="inside">
            <li>Wood wall starting health to 80 from 100.</li>
            <li>Stone wall starting health to 80 from 90.</li>
            <li>Wood wall max health to 150 from 200.&nbsp;</li>
            <li>Metal wall max health to 500 from 400.</li>
            <li>Metal build time to 25s from 20s.</li>
          </ul>
        </li>
        <li>Storm Circle changes.
          <ul class="inside">
            <li>Safezone 2 wait time to 120 from 150.</li>
            <li>Safezone 2 shrink time to 120 from 90.</li>
            <li>Safezone 4 wait time to 90 from 120.</li>
            <li>Safezone 6 wait time to 60 from 90.</li>
            <li>Safezone 7 wait time to 45 from 60.</li>
            <li>Safezone 8 wait time to 30 from 60.</li>
            <li>Safezone 9 wait time to 30 from 45.</li>
            <li>Added moving circle to Safezone 6.</li>
          </ul>
        </li>
        <li>Added "Sprint By Default" option, when enabled this makes sprint the default movement. The sprint key will now be used to transition into walking.</li>
        <li>Newly-placed building pieces will now appear in a different color while players are still overlapping the structure.</li>
        <li>Improved handling of collision when building pieces are placed right on top of a player. It's much more likely for players to be moved outside of newly-placed structures.</li>
        <li>Pickaxe damage against enemy and ally player built structures increased to 75 base damage and 150 critical damage.</li>
        <li>The slow motion and confetti effects for a Victory Royale will now play for the winner regardless of how they win the game.</li>
        <li>Changing the gyro motion of the Nintendo Switch to rotate around the roll instead of the yaw.&nbsp;
          <ul class="inside">
            <li>This is intended to allow for the users to be able to hold the device in any situation and always have the motion react according to the screen direction instead of being in the Switch's world space.</li>
          </ul>
        </li>
      </ul>
      &nbsp;<strong>Bug Fixes</strong>

      <ul>
        <li>Fixed an issue causing bullets and projectiles to be blocked by invisible collision.&nbsp;
          <ul class="inside">
            <li>This was being caused by player placed map markers</li>
          </ul>
        </li>
        <li>Autorun can now be used while in vehicles. Fixed a logic issue in the autorun canceling code.&nbsp;
          <ul class="inside">
            <li>This should also fix autorun canceling when releasing the stick while using a gamepad.</li>
          </ul>
        </li>
        <li>Changed the button layout for Old School and Quick Builder configs so that the “change seat” action button is not the same as the “powerslide” button.</li>
        <li>Sniper rifle bullets no longer incorrectly stop when passing through certain trigger volumes.</li>
        <li>Eliminating players will now properly grant challenge progress.
          <ul class="inside">
            <li>If the same player knocks out and eliminates an enemy with two different weapons, they will get elimination quest progress for both weapons.<span style="display: none;">&nbsp;</span></li>
          </ul>
        </li>
        <li>Players will no longer get stuck in the coasting state if they change seats while in a vehicle.</li>
        <li>Pickaxes will no longer stretch and appear incorrectly if the slow-motion effect plays while players are riding in a vehicle.</li>
        <li>Fixed an issue where a player would not have a weapon out if hitting a bounce pad into a jump pad under certain network conditions.</li>
        <li>Players will no longer hold weapons while emoting if they’re riding in an All Terrain Kart.</li>
        <li>Players will no longer fall through floor or pushed through walls when placing or editing structures.</li>
        <li>Remote Explosives will now only show damage numbers when damage is done to players.</li>
        <li>Vehicles can no longer be flipped while standing on top of them.
          <ul class="inside">
            <li>This fixes the issue where players would sometimes become stuck or teleported if standing on a vehicle that flipped.</li>
          </ul>
        </li>
        <li>Crouching is no longer allowed while emoting.</li>
        <li>The Wave emote, emoticons,&nbsp;and sprays will now continue to play even if you’re moving.</li>
      </ul>

      <h2>Performance</h2>

      <ul>
        <li>Various server performance improvements focused on the 50v50 LTM.</li>
        <li>Server performance improvements were made to the custom matches used during competitive events.</li>
        <li>Significant All Terrain Kart (ATK) performance improvements.</li>
      </ul>

      <h2>Audio</h2>

      <ul>
        <li>Added spatialization to the sound played when a marker is placed on the map. Now you will hear it coming from where the in-world marker was placed.</li>
        <li>All Terrain Kart (ATK) audio improvements
          <ul class="inside">
            <li>Improved All Terrain Kart (ATK) audio attenuation fall-off.</li>
            <li>Added a unique sound when the All Terrain Kart (ATK) is destroyed.</li>
            <li>Added sounds for when the All Terrain Kart (ATK) is in water.</li>
          </ul>
        </li>
        <li>Improvements have been made to grenade bounce audio so they don’t sound as spammy under certain conditions.</li>
        <li>Lowered the volume of the AC/DC pickaxe.</li>
        <li>Added a unique sound for bouncing off a diving board.</li>
        <li>Added a unique sound for destroying cacti.</li>
        <li>Audio panning logic for Switch has been changed. Sources panning from one side to another will be more dramatic.</li>
      </ul>
      <strong>Bug Fixes</strong>

      <ul>
        <li>Conquest glider’s open and close sounds no longer stack when spamming the action.</li>
        <li>Twist emote music no longer overlaps with other emote music.</li>
        <li>Re-added metal impact sounds when shooting or pickaxing Shopping Carts.</li>
        <li>Weapon fire audio no longer cuts out when low on ammo for some weapons.</li>
      </ul>

      <h2>UI</h2>

      <ul>
        <li>Adjusted lobby nameplate arrangement to better account for long player names.</li>
        <li>Added the ability to combine stackable items in player inventory if the stack sizes aren't already capped.</li>
        <li>The Game Mode Select screen now sorts in the following order from left to right:
          <ul class="inside">
            <li>Solo, Duo, Squads</li>
          </ul>
        </li>
      </ul>
      <strong>Bug Fixes</strong>

      <ul>
        <li>Fixed an issue preventing players to select nothing as an Outfit and Backbling.
          <ul class="inside">
            <li>Removed the ‘Save and Exit’ option for items without variants.</li>
            <li>Double tap the accept hotkey/button to confirm your selection.</li>
          </ul>
        </li>
        <li>Fixed an issue in the locker where the shuffle icon for randomized outfits was drawn slightly differently to other shuffle icons.</li>
        <li>Removed an error message when trying to purchase the Battle Bundle while at tier 76 or above.</li>
        <li>The correct actions are now shown on the HUD when you get into a Shopping Cart for the first time after being in an All Terrain Kart (ATK).</li>
      </ul>

      <h2>Art + Animation</h2>
      <strong>Bug Fixes</strong>

      <ul>
        <li>Prevented sprays from affecting the eyes of the Rainbow Smash pickaxe.</li>
        <li>The Toilet Paper contrail animations now appear correctly.</li>
      </ul>

      <h2>Replay System</h2>

      <ul>
        <li>Changed the icon when a player has been downed to an exclamation mark.</li>
      </ul>
      <strong>Bug Fixes</strong>

      <ul>
        <li>Battle Bus positioning now appears correctly in replays.</li>
        <li>Fixed an issue with focus distance when changing cameras in replays.</li>
        <li>Fixed issues with drone cameras when viewing players in vehicles during replays.</li>
        <li>Fixed an issue where the camera controls would not display when toggling the HUD visibility.</li>
      </ul>

      <h2>Mobile</h2>

      <ul>
        <li>Downloading patches will now continue when you switch to a different app. When the download has completed, you’ll receive a notification.</li>
        <li>Fire mode selection now has preview videos to better illustrate the functionality.</li>
        <li>Added new placeable individual quick bar buttons to the HUD layout tool. Can be set to either locked Combat, locked Build, or Automatic mode to switch based on the player’s currently selected mode.</li>
        <li>Tapping a currently selected build item from the quick bar will now build the item.</li>
      </ul>
      <strong>Bug Fixes</strong>

      <ul>
        <li>Fixed texture streaming issues with the battle bus.</li>
        <li>Audible pops will no longer occur on iOS during loading screens and gameplay.</li>
      </ul>
      <hr>
      </div>
    </modal>
    <modal class="patch-modal" name="500modal" height="auto" :scrollable="true">
      <h1 class="dark-top" id="">Worlds Collide in Season 5!</h1>
      <div class="patch-notes-description"><p>Viking ships, desert outposts, and ancient statues have appeared across the island. Hop in an All Terrain Kart (ATK) with your squad and uncover all-new mysteries and locations that await.&nbsp;<br>
        <br>
        Tell me, partner...do ya feel lucky? Test that luck with the new Flintlock weapon set while you Challenge the Horde in the Road Trip event, now available in Save the World.</p>

        <p style="text-align: center;">&nbsp;</p>

        <div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen="true" class="embed-responsive-item" frameborder="0" src="https://www.youtube.com/embed/F3UNnrr1pg4" width="100%"></iframe></div>

        <p>New Season, new Battle Pass. 100 levels,&nbsp; over 100 new rewards. Available in-game right now for 950 V-Bucks.</p>

        <div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen="true" class="embed-responsive-item" frameborder="0" src="https://www.youtube.com/embed/hgZz911mFB8" width="100%"></iframe></div>

        <p><br>
        <strong>All Terrain Kart&nbsp;(Battle Royale)</strong><br>
        Powerslide into battle with the all-new All Terrain Kart (ATK)! Grab some friends and go for a ride.</p>

        <p style="text-align: center;"><img alt="BR05_Social_Launch_Golf-Cart.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-0%2FBR05_Social_Launch_Golf-Cart-1920x1080-8d4541a50fbbdd3e8cdda1df13f7a4346af9c31a.jpg" width="auto"></p>

        <p><strong>Rifts (Battle Royale)</strong><br>
        Test your courage and step through a Rift. You’re in for a wild ride.</p>

        <p style="text-align: center;"><img alt="BR05_Social_Launch_Rift.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-0%2FBR05_Social_Launch_Rift-1920x1080-c50897fdd5b9ff387ae09e78329fa88ccd9f0aca.jpg" width="auto"></p>

        <p><strong>Challenge the Horde (Save the World)</strong><br>
        Rally the squad and prepare for the ultimate challenge of survival and teamwork.</p>

        <p style="text-align: center;"><img alt="StW05_Social_HordeBash.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-0%2FStW05_Social_HordeBash-1920x1080-0ec370fc4236364482338f62be449f7926008521.jpg" width="auto"></p>

        <p><strong>Wild West Heroes (Save the World)</strong><br>
        Saddle up with the new Wild West Heroes, available during the Road Trip event.</p>

        <p style="text-align: center;"><img alt="StW05_WildWestHeroes.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-0%2FStW05_WildWestHeroes-1920x1080-32a37dc260527882e75d745d2883795578981b28.jpg" width="auto"></p>

        <p><strong>Flintlock Weapons (Save the World)</strong><br>
        Let the sparks fly! Fight off hordes of Husks with the new Flintlock Weapons set.</p>

        <p style="text-align: center;"><img alt="StW05_Flintlock_Weapons.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-0%2FStW05_Flintlock_Weapons-1920x1080-a7cebcba00915b6ea52f133d8f336eca3399485e.jpg" width="auto"></p>

        <hr size="2">
        <h1>General</h1>

        <ul>
          <li>When the "Invited to Party" prompt appears in the UI you can now immediately accept the invite rather than having to open the Party Finder.</li>
          <li>The News widget has been adjusted to avoid the need for a scrollbar in most cases.
          <ul>
            <li>A scroll option has been added for controller users in the event that scrolling is needed.</li>
          </ul>
          </li>
          <li>Updated consoles to use less shader storage. This improves patch sizes and reduces load times.</li>
          <li>Optimized file ordering to reduce load times on all platforms.</li>
          <li>The “Epic Friends” button now appears on the Main Menu when using a gamepad on Windows or Mac.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Fixed an issue that intermittently caused the Push-To-Talk setting to not function as intended.</li>
          <li>Blocked players will no longer show as suggested friends.</li>
        </ul>

        <h2>Known Issues</h2>

        <ul>
          <li>Wanting to track the top community issues? Head over to our Fortnite | Community Issues Trello board&nbsp;<a href="https://trello.com/b/Bs7hgkma/fortnite-community-issues">here</a>.</li>
        </ul>

        <hr>
      </div>

      <h1 class="dark" id="brSection-anchor">Battle Royale</h1>
      <div class="patch-notes-description">
        <h2>Weapons + Items</h2>

        <ul>
          <li>Shotguns will now indicate how many pellets hit, visible within the reticle.</li>
          <li>Adjusted shotgun spread patterns to be consistent with no random variation.</li>
          <li>Heavy Shotgun now fires 10 pellets rather than 5.
            <ul class="inside">
              <li>Maximum damage for the Heavy Shotgun remains unchanged.</li>
            </ul>
          </li>
          <li>After firing a shotgun, another shotgun cannot be fired for a very short time.</li>
          <li>Reduced Hunting Rifle aim assist when targeting to match that of other Sniper Rifles with projectile bullets.</li>
          <li>
          Lowered the vehicle knockback strength on Grenade, Sticky Grenade, Grenade Launcher, and Rocket Launcher.</li>
          <li>Remote Explosives must now first attach to an object before they can be detonated.</li>
          <li>Tac and Silenced SMG environmental damage now correctly matches player damage.</li>
          <li>Changed the damage drop-off profile for the Suppressed SMG to be the same as other SMGs.
            <ul class="inside">
              <li>Fall off starts at 24 meters from 28 meters.</li>
              <li>Damage reduced to 80% at 35 meters from 85% at 47.5 meters.</li>
              <li>Damage reduced to 65% at 50+ meters from 75% at 70+ meters.</li>
            </ul>
          </li>
        </ul>

        <h2>Gameplay</h2>

        <ul>
          <li>All Terrain Kart (ATK)
            <ul class="inside">
              <li>The new All Terrain Kart (ATK) has room for your entire squad.</li>
              <li>Get a speed boost after drifting.</li>
              <li>The roof acts as a bounce pad.</li>
              <li>Work together as rear passengers to leap over obstacles with the All Terrain Kart (ATK). Lean back and release at the same time for a higher jump.
                <ul class="inside">
                  <li>Lean back by holding S on keyboards or holding back on the thumbstick for controllers.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Map Updated
            <ul class="inside">
              <li>New Biome: Desert</li>
              <li>New Location: Paradise Palms</li>
              <li>New Location: Lazy Links</li>
              <li>A few unnamed POIs have also appeared across the island.</li>
              <li>Minimap Updated</li>
            </ul>
          </li>
        </ul>

        <div style="text-align: center;"><img alt="BR05_Social_Minimap_Names.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv5-0%2Fbr-header-v5-0%2FBR05_Social_Minimap_Names-2160x2160-d26b1cf523bbf943004c44c83a06c00c048d29a4.jpg" width="auto"></div>

        <ul>
          <li>The center of Storm circles 7, 8, and 9 can now shift in random directions (instead of simply shrinking). As the storm closes in, it will move &amp; shrink to the new location.</li>
          <li>Starting in Season 5, progressive challenges will no longer be restricted to a single season. You can now complete progressive challenges at your own pace.</li>
          <li>Progressive challenges are now completed by acquiring a fixed amount of XP and is no longer dependant on your season level.</li>
          <li>Gyro/motion controls have been added to the Nintendo Switch. Adjust these options in the Settings menu.</li>
          <li>Weekly challenges are now split into two sections, free and Battle Pass. The first 3 challenges will be available for free while the last 4 are only available if you own the Battle Pass. The threshold to unlock the weekly challenge reward will remain at 4.</li>
          <li>Down But Not Out players now have smaller collision. Previously their collision was at the standing height which blocked DBNO players from crawling under doors and blocked building collision in some cases.
            <ul class="inside">
              <li>Players that were crouching when knocked Down But Not Out will be returned to a crouching state upon revival.</li>
            </ul>
          </li>
          <li>Emoting will now interrupt sprinting.</li>
          <li>You now earn XP for reviving teammates in 50v50 and Teams of 20 LTMs up to three times per match (30XP, 10XP, 10XP).</li>
          <li>Weapon reticle will now fade slightly when reloading, out of ammo, or changing weapons.</li>
          <li>The player camera can now see out of the water when walking in lakes.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Launch Pads and Cozy Campfires now destroy overlapping small objects when placed.</li>
          <li>Reduced trigger volume for floor Damage Trap to better match visuals and prevent triggering when standing on ledges above.</li>
          <li>Supply Llamas now fall to the ground if the object they were standing on is destroyed.</li>
          <li>Autorun will no longer cancel if you let go of the stick and it slightly flicks backward while using a gamepad.</li>
          <li>Fixed issue where Autorun could be active while using a Shopping Cart.</li>
          <li>The first Storm circle will now consistently do 1 damage.</li>
          <li>Players will no longer get stuck in a doorway if they were standing in it when the door closed.</li>
          <li>Fixed an issue that prevented some weapon animations from playing.</li>
          <li>Autorun can no longer be activated while walking backward.</li>
          <li>Textures will now consistently appear correctly while in Edit Mode.</li>
          <li>Fixed a crash that could occur when logging out.</li>
        </ul>

        <h2>Performance</h2>

        <ul>
          <li>Improved performance of Shopping Carts on both the game client and server.</li>
        </ul>

        <h2>Audio</h2>

        <ul>
          <li>Added unique ambient audio to the new desert biome. More unique ambient audio for the map will be coming in future updates!</li>
          <li>Lowered the volume of the Battle Pass Challenge success sound.</li>
          <li>UI audio has been redesigned, all button&nbsp;and interface sounds updated.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Dual Pistol fire sound will no longer get cut off if you switch weapons immediately after firing.</li>
          <li>The True Love emotes audio will no longer overlap with itself if multiple players use it near each other.</li>
          <li>The funky electronic track to the Dance Moves emote on Mobile/Switch platforms has been re-enabled.</li>
        </ul>

        <h2>UI</h2>

        <ul>
          <li>We now allow users to enable the same sound visualizer on all platforms that were created for mobile - however, while the visualizer is enabled, audible sound effects will be muted. Mobile platforms are unaffected by this change and will retain sound effects and the visualizer. You can find this new option under the Accessibility tab in the settings.</li>
          <li>Streamer mode no longer just says "Player###", instead it now uses the player's cosmetic character as their display name "Character[###]". So instead of “Eliminated Player100” you may see, “Eliminated Rust Lord[100]”.&nbsp; Anyone eliminating someone in streamer mode will now see Streamer[###].</li>
          <li>Added extra audio and visual fanfare to the Victory Royale end of match sequence.</li>
          <li>The “Dialogue Audio”, “Global Chat”, and “Auto Equip Better Weapons” options have been removed as they have no function in Battle Royale.</li>
          <li>Zooming in and out on the map is now twice as fast with the controller.</li>
          <li>The “Play Again” button will now allow players to preview pickaxe visual and sound effects in the Item Shop, Battle Pass, and Locker.</li>
          <li>New faster animation for displaying XP sources have been added to the end of match stats screen.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Map markers will now re-appear if removed and added back to the exact same location.</li>
          <li>End of match stats now appears correctly on all platforms in their correct numeric format.</li>
          <li>Key bindings for weapon and structure sections in the HUD are now displayed properly.</li>
          <li>A typo was removed from the item description for the Victory Lap harvesting tool.</li>
          <li>Controller input will no longer fail when at the Main Menu.</li>
          <li>Fixed an inconsistency in the UI that was displayed when placing a trap in some cases.</li>
          <li>“Distance Traveled” is now reported correctly in the Match Stats screen.</li>
        </ul>

        <h2>Art + Animation</h2>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Revive animations are no longer skipped if the player was reloading when downed.</li>
          <li>Effects now appear properly when jumping with the Pot of Gold Harvesting Tool.</li>
          <li>Prevented sprays from affecting props used in emotes (e.g., the basketball from Baller).</li>
        </ul>

        <h2>Replay System</h2>

        <ul>
          <li>“Camera type” is now localized in the view settings header.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Gamepads will no longer continuously rumble when a replay is paused.</li>
          <li>The Main Menu will no longer become unresponsive if the Friends List is opened while a replay is paused.</li>
          <li>Nameplates no longer block input on camera settings.</li>
          <li>Nameplates no longer disappear if the camera is directly above a player.</li>
          <li>The bottom portion of the nameplate will no longer become cut off.</li>
          <li>Nameplates on PS4 will now show team number &amp; weapon.</li>
          <li>Weapon animations will now play in replays after scrubbing the timeline.</li>
          <li>Timeline markers no longer disappear on saved replays on PS4 and Xbox One.</li>
          <li>Shopping Cart visual and audio effects will no longer break in replays.</li>
          <li>The “Revive” and “Drive” prompt will no longer persist in replays if a player was eliminated while being revived or near a Shopping Cart.</li>
        </ul>

        <h2>Mobile</h2>

        <ul>
          <li>Autofire has been added as an option on mobile platforms. Enabling this causes the player's weapon to automatically fire when the reticle is over an enemy that is within range.</li>
          <li>Players will be given the option to select their preferred fire mode after launching. All players can change their preferred fire mode by navigating to Options, Custom HUD Layout, then choosing the ‘Select Fire Mode’ option and confirming their selection.
            <ul class="inside">
              <li>Tap-to-fire.</li>
              <li>A dedicated fire button.</li>
              <li>Autofire.</li>
            </ul>
          </li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>The Thermal Scoped AR now has the proper visual effects on all devices.</li>
          <li>Vehicle passengers can now detonate Remote Explosives.</li>
          <li>Entering build mode while holding the “fire” button will no longer adversely affect your ability to build in the future.</li>
          <li>Health and Shield numbers will no longer be displayed as your own while spectating.</li>
        </ul>
        <hr>
      </div>
    </modal>
    <modal class="patch-modal" name="450modal" height="auto" :scrollable="true">
      <h1 class="dark-top">Double Tap!</h1>
      <div class="patch-notes-description">Celebrate summer with a bang! Explosions from the Grenade Launcher now emit firework effects for a limited time. Double the firepower and fun, the Dual Pistols can now be found in Battle Royale. Test your aim and let your imagination run wild in the new Playground LTM. The quadrilogy questline comes to an end... Witness the conclusion of Blockbuster in its final chapter, now available in Save the World!<br>
        <br>
        <strong><p>Dual Pistols (Battle Royale)</p></strong><br>
        <p>Experience two times the fun and firepower with Dual Pistols, the newest weapon introduced to Battle Royale.</p>
        <img alt="BR04_Social_Double-Pistol.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-5%2FBR04_Social_Double-Pistol-1920x1080-492b3c09165b3b4bc94fcdaea41a98a9285d6b25.jpg" width="auto">
        <br>
        <strong><p>Playground LTM (Battle Royale)</p></strong><br>
        <p>Train, explore, battle! Show us your creativity in the new Playground LTM as you drop onto the island with up to 3 friends.</p>
        <img alt="BR04_Social_LTM-Playground-(1).jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-5%2FBR04_Social_LTM-Playground-%281%29-1920x1080-b7f811a498f54cd5ab359e468b76e6ab2a4f6139.jpg" width="auto">
        <br>
        <strong><p>Map Markers (Battle Royale)</p></strong><br>
        <p>Go towards the light! Visual indicators are now shown in-game wherever friendly map markers are placed.</p>
        <img alt="BR04_Social_Map-Markers.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-5%2FBR04_Social_Map-Markers-1920x1080-b61faa06de8a7f4ef4b8c9cbe049269eeff85161.jpg" width="auto">
        <br>
        <strong><p>Blockbuster Event Part 4 (Save the World)</p></strong><br>
        <p>Discover how the quadrilogy ends in the finale of the Blockbuster event.</p>
        <img alt="StW04_Social_Shadow-Ops.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-5%2FStW04_Social_Shadow-Ops-1920x1080-bd145bff642e6cb2d7d1ba2c177bef7993b18111.jpg" width="auto">
        <br>
        <strong><p>Builder Pro (Save the World)</p></strong><br>
        <p>Build at lightning speeds, the long-awaited Builder Pro controller layout comes to Save the World.</p>
        <img alt="StW03_Social_720p.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-5%2FStW03_Social_720p-1280x720-a60886c19123a11532eff81a473399bed82bb64b.jpg" width="auto">
        <hr>
        <h2 style="text-align: left;">General</h2>

        <ul>
          <li style="text-align: left;">Celebrate summer with the Fireworks Launcher, which has been added as a seasonal item that has firework explosions and replaces the Grenade Launcher for a limited time. (cosmetic change only).</li>
          <li style="text-align: left;">Blocks that are removed while in edit mode are now opaque rather than clear. Blue, white, and red colors still indicate build status.
            <ul class="inside">
              <li style="text-align: left;">Adjusted to limit player's ability to peek through structures while editing.</li>
            </ul>
          </li>
          <li style="text-align: left;">Save the World and Battle Royale keybindings are now separated. Settings in one mode will not affect the settings of the other.</li>
          <li style="text-align: left;">Changed the button that lets you re-roll one daily quest or challenge from 'Abandon Quest' to 'Replace Quest', to make the behavior more obvious.</li>
        </ul>

        <h2 style="text-align: left;">Known Issues</h2>

        <ul>
          <li style="text-align: left;">Wanting to track the top community issues? Head over to our Fortnite | Community Issues Trello board <a href="https://trello.com/b/Bs7hgkma/fortnite-community-issues">here</a>.</li>
        </ul>
        <hr>
      </div>

      <h1 class="dark" id="brSection-anchor">Battle Royale</h1>
      <div class="patch-notes-description">
        <h2>Limited Time Modes</h2>

        <h2>Playground&nbsp;</h2>
        <strong>Summary</strong><br>
        Playground is a low-pressure environment where friends can let their creativity run wild. Build massive structures. Practice with the weapons and items. Fight against your friends. Have fun!<br>
        <br>
        <strong>Mode Details</strong>

        <ul>
          <li>You’ll have one hour to create, play and train as you wish. Hop in and try out version 1 of Playground!</li>
          <li>Drop into the Battle Royale map with a squad of friends for an hour</li>
          <li>Friendly Fire is on&nbsp;</li>
          <li>Players respawn on elimination unless downed by the storm</li>
          <li>The storm doesn't start closing in for 55m, and takes 5 minutes to close in</li>
          <li>Resources gathered grant 10x the normal rate.</li>
          <li>100 Llamas will be spawned on the map</li>
          <li>Chests &amp; Ammo Boxes spawn 100% of the time</li>
        </ul>

        <h2>Final Fight Teams of 12&nbsp;</h2>
        <strong>Summary</strong><br>
        Make it to the final circle and then fight for the Victory Royale!<br>
        <br>
        <strong>Mode Details</strong>

        <ul>
          <li>Final Fight plays similar to standard Battle Royale, but instead of the storm circles closing all the way in, they stop part way through the match.&nbsp;</li>
          <li>When the circles have finished closing in, the Final Countdown timer will begin.</li>
          <li>The remaining teams will battle it out until the timer expires.</li>
          <li>The team with the most players remaining at the end of the timer wins!</li>
          <li>In the event of a tie, the two (or more) teams tied for the lead win the match.</li>
        </ul>

        <h2>Weapons + Items</h2>

        <ul>
          <li>Dual Pistols Added
            <ul class="inside">
              <li>Available in Epic and Legendary variants.
                <ul class="inside">
                  <li>41-43 base damage.</li>
                </ul>
              </li>
              <li>Uses Medium Ammo.</li>
              <li>Shoots both pistols with one pull of the trigger.</li>
              <li>Can be found from floor loot, chests, and Supply Drops.</li>
              <li>Does not use first shot accuracy.</li>
            </ul>
          </li>
          <li>Significant jumps that are landed with the Shopping Cart now appear in the elimination feed (height, distance, and time).</li>
          <li>Weapon damage to structures now correctly scales with rarity.</li>
          <li>Shotgun damage to structures has been reduced by 50% for Pump Shotgun, and 25% for both Tactical Shotgun and Heavy Shotgun.</li>
          <li>Explosions now damage all structures within range, whether or not they are visible from the explosion center.</li>
          <li>We’re making the following changes to further solidify the identities and strengths of Tactical and Silenced SMGs.
            <ul class="inside">
              <li>Tactical SMG
                <ul class="inside">
                  <li>Removed first shot accuracy.</li>
                  <li>Increased base accuracy by 25%.</li>
                  <li>Lowered the sprinting accuracy penalty by 15%.</li>
                  <li>Lowered the ADS bonus by 10 %.</li>
                  <li>Increased damage by +2.</li>
                </ul>
              </li>
              <li>Silenced SMG
                <ul class="inside">
                  <li>Increased base accuracy by 10%.</li>
                  <li>Increased ADS accuracy bonus by 20%.</li>
                  <li>Increased damage by +2.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Shotgun ammo now drops in stacks of 4 instead of 5.</li>
          <li>Grenade Launcher visuals have been temporarily changed to shoot fireworks instead. This is a cosmetic change only.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Boogie Bomb explosions are no longer blocked by vehicles.</li>
          <li>Thermal Scoped Rifle will now consistently exhibit intended accuracy while&nbsp;scoped in.&nbsp;</li>
          <li>Clingers can no longer stick to players through the ceiling or floor.</li>
          <li>Spike traps placed on a ceiling no longer damage players on the floor above.</li>
          <li>The Thermal Scoped Rifle no longer highlights opened chests.</li>
          <li>Weapons will no longer appear to fire while switching weapons under certain network conditions.</li>
        </ul>

        <h2>Gameplay</h2>

        <ul>
          <li>Progress for elimination quests will now be granted if you down an enemy with the required weapon rather than needing to actually eliminate them with it.</li>
          <li>In Build Mode, walls will now try to build at a closer location when placement is blocked due to lack of structural support. Stairs, Floors, and Roofs are not affected.</li>
          <li>Auto-open doors no longer functions while in the Down-But-Not-Out state.</li>
          <li>Pickaxes will no longer hit the Shopping Cart if you are riding as the passenger.</li>
          <li>Players in the Down-But-Not-Out state can no longer enter Shopping Carts.</li>
          <li>Improvements made to the auto pickup weapons feature to better handle picking up large groups of weapons.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Items dropped in water now stay above the water's surface.</li>
          <li>Excessive fall damage is no longer applied when under certain network conditions.</li>
          <li>Supply Drop crates no longer briefly persist in the world after being opened if it was shot down.</li>
          <li>Smoothed out the location of all soccer balls and basketballs while under varying network conditions.</li>
          <li>Players are no longer able to hit building weak spots through other buildings.</li>
          <li>Having the Sprint Cancels Reloading setting turned on will no longer prevent players from auto-reloading their weapon after sprinting.</li>
          <li>Fixed an issue that applied a constant force to players if they were hit by a Shopping Cart.</li>
          <li>Doors that are interacted with multiple times rapidly no longer get out of sync with their state on the server.</li>
          <li>Fixed an issue where if a player was using a consumable and then exchanged it for a different pickup, it would select the pickaxe instead of the new item.</li>
          <li>Chests no longer create invalid pickups, such as a 2x Chug Jug instead of 2 individual Chug Jug pickups.
            <ul class="inside">
              <li>This created an issue that caused players to be unable to pick up building materials.</li>
            </ul>
          </li>
          <li>Players are now awarded an elimination if the opposing player bounced off terrain and took fall damage before taking enough damage to be eliminated.</li>
          <li>Fixed a small number of accounts that had incorrect Week 5 Challenges.</li>
          <li>Mushrooms no longer spawn on trees in Moisty Mire.</li>
          <li>Fixed an issue that prevented the ability to open chests by preemptively holding the interact button while approaching the chest.</li>
          <li>Fixed a gap in the terrain that was caused by the sporting goods store in Greasy Grove being slightly moved by accident.</li>
        </ul>

        <h2>Performance</h2>

        <ul>
          <li>Improved performance of skydiving on all platforms (especially Switch), by reducing rendering related CPU hitches</li>
          <li>Fixed a source of hitching on Xbox one. In rare instances, this was causing up to 2-second hitches for some players</li>
          <li>Improved framerate around swing-sets by adjusting physics.</li>
          <li>Improved performance by doing less work when players are moving outside of your view.</li>
          <li>Improved performance for moving ammo and weapon pickups.</li>
          <li>Improved player movement updates in large team games. This should make the movement of other players appear smoother.</li>
          <li>Fixed skydiving rings ticking the entire match.</li>
        </ul>

        <h2>Audio</h2>

        <ul>
          <li>Changes to enemy building audio (friendly building audio remains the same).
            <ul class="inside">
              <li>Increased volume of enemy building audio.</li>
              <li>Increased range of enemy building audio by 2 building tiles.</li>
            </ul>
          </li>
          <li>Added variation to water footsteps on mobile and Nintendo Switch platforms.</li>
          <li>Re-balanced bass content for surround sound mix.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Reallowed the first few milliseconds of audio to play if an emote is triggered while jumping.</li>
          <li>Suspension audio on cars is no longer spammed when jumping or sliding off of them.</li>
          <li>Shopping Carts no longer spam their collision audio if flipped upside down.</li>
          <li>Fixed issue that caused doors to play an open and a close sound when opened.</li>
          <li>Fixed the slowed audio for the Step it Up emote.</li>
        </ul>

        <h2>UI</h2>

        <ul>
          <li>The switch seat icon is now hidden when you can't switch seats.</li>
          <li>The minimap now draws the whole map and bus paths instead of nothing when on the Starter Island.</li>
          <li>Existing map markers are removed when landing after jumping from the Battle Bus to reduce map clutter.</li>
          <li>Custom voice chat output devices can be selected on PC.</li>
          <li>Removed damage numbers from Shopping Carts and added a health bar.</li>
          <li>HUD Elimination and Down-But-Not-Out notifications have received updated animations.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Damage numbers no longer overlap if damage is done to both shield and health.</li>
          <li>Object stacks no longer appear as 0 ammo when looted.</li>
          <li>Map marker icons now properly appear even while on the Starter Island.</li>
          <li>Fixed an issue where sometimes map markers wouldn't be removed when pressing right click and moving the mouse slightly.</li>
          <li>Fixed an issue where the player was unable to drop or split an item after dropping a full stack of items.</li>
        </ul>

        <h2>Art + Animation</h2>

        <ul>
          <li>The cape on the Battlehound* Outfit is now available as Back Bling.</li>
          <li>Added capes to the Ventura* and Venturion* Outfits.</li>
          <li><em>*Anyone who purchased these Outfits has&nbsp;been granted the Back Bling to be used on any other Outfit.</em></li>
          <li>A pillar of light will now appear at the location where&nbsp;friendly map markers are placed.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Visual effects for the Oracle Axe Pickaxe and&nbsp;Ominous Orb Back Bling now appear correctly on consoles.</li>
          <li>Back Bling no longer appears in low detail while spectating players.</li>
        </ul>

        <h2>Replay System</h2>

        <ul>
          <li>Removed ProAm replays from the Replay Browser.</li>
          <li>Replay Browser entries will now scroll if text doesn't fit.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>The Replay Browser no longer loses gamepad focus if chat window is opened.</li>
        </ul>

        <h2>Spectating</h2>
        <strong>Bug Fixes</strong>

        <ul>
          <li>The shield bar&nbsp;no longer incorrectly fills and empties&nbsp;when switching between players in spectator mode.</li>
          <li>Storm effects no longer get stuck on players that were in the Storm while being spectated even after leaving the Storm or after switching to a new player.</li>
        </ul>

        <h2>Mobile</h2>

        <ul>
          <li>Added settings on mobile for low power mode and scalability.</li>
          <li>Improved touch interaction logic to be more consistent and reliable.</li>
          <li>Touch rotation sensitivity in the locker has been reset.</li>
        </ul>
        &nbsp;<strong>Bug Fixes</strong>

        <ul>
          <li>Vibration setting no longer resets to the wrong value on mobile devices.</li>
          <li>Fixed a bug where lower end mobile devices weren’t displaying the whole island while on the bus.</li>
          <li>Volume on mobile devices will no longer occasionally become muted.</li>
        </ul>
      </div>
    </modal>
    <modal class="patch-modal" name="440modal" height="auto" :scrollable="true">
      <h1 class="dark-top" id="">Mind Your Step.</h1>
      <div class="patch-notes-description">
        <p>Eligible Traps can now be placed on ramps in both Battle Royale and Save the World. The Thermal Scope Assault Rifle also makes its debut in Battle Royale, so be careful where you hide. Fight alongside a mysterious new mythic hero in the next installment of the Blockbuster quadrilogy, Blockbuster Part 3: The Cloaked Star.<br> &nbsp;</p>

        <p><strong>Thermal Scope Assault Rifle (Battle Royale)</strong><br>
        You never know who’s watching. The Thermal Scope Assault Rifle is now available in Battle Royale, and it sees more than enemies.</p>

        <p style="text-align: center;"><img alt="BR04_Patch-Notes_ThermalScopeSniper.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-4%2Foverview-text-v4-4%2FBR04_Patch-Notes_ThermalScopeSniper-1920x1080-c3e5ca6aa073d69a0f0363bd81cb98a22f7d7198.jpg" width="auto"></p>

        <p><br>
        <strong>Traps on Ramps (Battle Royale and Save the World)</strong><br>
        Players and Husks had better watch their steps, certain Traps can now be placed on ramps in both game modes.</p>

        <p style="text-align: center;"><img alt="BR04_Social_BouncerTrap.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-4%2Foverview-text-v4-4%2FBR04_Social_BouncerTrap-1920x1080-ed27fba8ef2352375fdda672a2c3333071b0db80.jpg" width="auto"></p>

        <p><br>
        <strong>Blockbuster Part 3: The Cloaked Star (Save the World)</strong><br>
        Stealthy and mysterious, a new Ninja joins the fight to Save the World and he gets straight to the point. Join up with this Hero in part 3 of the Blockbuster questline!</p>

        <p style="text-align: center;"><img alt="StW04_Social_CloakedNinja.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-4%2Foverview-text-v4-4%2FStW04_Social_CloakedNinja-1920x1080-27d0131ffb373fcf257913b9802502089c3ace0d.jpg" width="auto"></p>

        <hr>

        <h2>General</h2>

        <ul>
          <li>Several types of traps can now be placed on player-built stairs and sloping roofs.
            <ul class="inside">
              <li>The Bouncer in Battle Royale.</li>
              <li>Wooden Spikes, Retractable Spikes, Flame Grill Traps, Freeze Traps, and Healing Pads in Save the World.</li>
            </ul>
          </li>
          <li>Added separate sliders for 'Mouse Sensitivity X' and 'Mouse Sensitivity Y' to the options menu.
            <ul class="inside">
              <li>Your current sensitivity settings will not be changed.</li>
              <li>Previously, vertical mouse sensitivity (Y) was always 70% of horizontal sensitivity (X).</li>
              <li>New players will now start with the same default sensitivity for both horizontal and vertical aim.</li>
            </ul>
          </li>
          <li>Added a quick visual transition to building pieces as you move and aim in Build Mode.</li>
          <li>Damage numbers will now round down instead of up in Save the World, Battle Royale, and replays.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Chat windows no longer close unexpectedly while typing on consoles.</li>
          <li>The search button will now work properly when sprinting up to chests and ammo crates.</li>
          <li>Text&nbsp;no longer cuts off in some languages on the confirmation message of the settings screen.</li>
          <li>Fixed Turbo Building not working if you quickly tried to build right after entering Build Mode.</li>
          <li>Renamed “Shadowplay Highlights” to “NVIDIA Highlights” in the options.</li>
        </ul>

        <h2>Known Issues</h2>

        <ul>
          <li>Wanting to track the top community issues? Head over to our Fortnite | Community Issues Trello board <a href="https://trello.com/b/Bs7hgkma/fortnite-community-issues">here</a>.</li>
        </ul>
        <hr>
      </div>

      <h1 class="dark" id="brSection-anchor">Battle Royale</h1>
      <div class="patch-notes-description">
        <h2>General</h2>
        <ul>
          <li>
          <p>Intelligent Delivery/Split Download (Xbox).</p>
            <ul class="inside">
              <li>This is a new method for patching Fortnite. Battle Royale will only download the files necessary to play, which allows for smaller download sizes on future updates.</li>
            </ul>
          </li>
        </ul>

        <h2>Limited Time Mode: Sniper Shootout v3</h2>

        <p><strong>Summary</strong></p>

        <p>In this Limited Time Mode, players will do battle using snipers &amp; scoped assault rifles.</p>

        <p><strong>What's New since v2?</strong></p>

        <ul>
          <li>Scoped Assault Rifles have been added to floor loot &amp; chests.</li>
          <li>The Crossbow has been removed.</li>
          <li>Ammo drop rates have returned to normal.
            <ul class="inside">
              <li>Ammo boxes had extra ammo in v2.</li>
            </ul>
          </li>
          <li>Epic &amp; Legendary Sniper Rifles are no longer limited to chests &amp; Supply Drops.
            <ul class="inside">
              <li>Can now be found as floor loot as well.</li>
            </ul>
          </li>
        </ul>

        <p><strong>Mode Details</strong></p>

        <ul>
          <li>The only available weapons are Sniper Rifles and Scoped AR's.</li>
          <li>Floor Loot spawns are reduced by 50%.</li>
          <li>Building resources received from farming reduced by 25%.</li>
          <li>Reviving "Down But Not Out" teammates in Duos &amp; Squads is deactivated, players are immediately eliminated.</li>
          <li>Profile Stats are tracked in this mode.</li>
        </ul>

        <h2>Limited Time Mode: 50v50 v3</h2>

        <p><strong>Summary</strong></p>

        <p>Two teams of fifty players fight to the finish!</p>

        <p><strong>What's New since v2?</strong></p>

        <ul>
          <li>A new, larger Storm circle has been added to the beginning of the match.</li>
          <li>Extra supply drops fall in the new circle, giving more players a chance to find an open one.</li>
          <li>Supply drops now come in batches of 4-8 (up from 3-6), fall every two minutes, and only lands in the first two Storm circles.</li>
          <li>The damage applied over time while in the Down But Not Out state has been changed to the default of 2 damage per tick.</li>
          <li>Bonus resources earned from farming reduced from +75% to +25%.</li>
          <li>The Storm circles are now more likely to bias towards the center of the map, this helps make the bus flight path less important.</li>
        </ul>

        <p><strong>Mode Details</strong></p>

        <ul>
          <li>Each team has a bus, approaching the island from opposite directions. On the map, the friendly bus has a blue outline, the enemy has a red outline.</li>
          <li>The map has a dotted line, which indicates the "battle lines" between the two teams. Crossing the line will make running into enemies more likely.</li>
          <li>Due to this being a "large squad" mode, Profile Stats will not be tracked. Daily &amp; Weekly challenges will still work, with the exception of the Squad-based challenges.</li>
        </ul>

        <p><strong>Loot</strong></p>

        <ul>
          <li>Increased chances of chests spawning from 50-70% to 75-90%.</li>
          <li>Increased chances of ammo boxes spawning from 65-80% to 75-90%.</li>
          <li>Farming resources increased by 25% over the default.</li>
          <li>Increased floor loot spawn likelihood by 15%.</li>
          <li>Floor loot spawns double ammo.</li>
          <li>Ammo boxes spawn triple ammo.</li>
          <li>Chests spawn double ammo &amp; consumables.</li>
          <li>Supply drops spawn double ammo, an extra consumable, resource, and trap.</li>
        </ul>

        <h2>Weapons + Items</h2>

        <ul>
          <li>Thermal Scoped Assault Rifle.
            <ul class="inside">
              <li>Available in Epic and Legendary variants.
                <ul class="inside">
                  <li>36-37 base damage.</li>
                </ul>
              </li>
              <li>Can see chests, Supply Drops, enemy heat signatures, and more.</li>
              <li>Uses Medium ammo.</li>
              <li>Can be found from floor loot, chests, and Supply Drops.</li>
            </ul>
          </li>
          <li>Renamed ‘Assault Rifle with Scope’ to ‘Scoped Assault Rifle’</li>
          <li>The maximum range of most weapons increased to 275 meters from 250 meters to match the distance that players are visible.</li>
          <li>The Jetpack has been Vaulted.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Shopping Carts no longer cause client crashes and have been re-enabled</li>
          <li>The Bouncer Trap no longer floats in the air.</li>
          <li>Crouching while scoped in Loot Lake will no longer cause your view to be underwater.</li>
          <li>You can now throw Remote Explosive while sprinting.</li>
        </ul>

        <h2>Gameplay</h2>

        <ul>
          <li>A new soccer stadium has been added to the northern area of the map.</li>
          <li>Added new light color options to Carbide and Omega.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Pickaxes are no longer missing from the quick bar for players who join the match late.</li>
          <li>Currently equipped traps no longer change to a different trap unexpectedly when trying to place one into an empty space.</li>
          <li>Lightly pulling backward on the gamepad movement thumbstick while in the Shopping Cart will no longer make you move forward.</li>
          <li>Players will no longer get stuck shooting their weapon when switching seats and firing simultaneously in the Shopping Cart.</li>
          <li>Passengers ejecting from the Shopping Cart at high speeds will no longer get a large impulse.</li>
          <li>Players will no longer crash when viewing friends leaderboard.</li>
          <li>Improved interaction of players and Shopping Carts with soccer and basketballs.</li>
          <li>Improved network simulation of soccer and basketballs when kicked by other players.</li>
          <li>The Shopping Cart will no longer destroy unbreakable objects.</li>
          <li>Fixed an issue causing Shopping Carts from flipping over when hitting a Supply Drop.</li>
          <li>Shopping Carts will no longer float in the air after the platform they were on is destroyed.</li>
        </ul>

        <h2>Performance</h2>

        <ul>
          <li>Client and server optimizations for Shopping Carts.</li>
          <li>Fixed a hitch on mobile when landing.</li>
          <li>Rendering CPU optimizations for all platforms.</li>
        </ul>

        <ul>
          <li>Fixed an issue where antivirus software was causing hitches on PC.</li>
        </ul>

        <h2>Audio</h2>

        <ul>
          <li>The following adjustments have been made to footstep audio.
            <ul class="inside">
              <li>Increased&nbsp;the volume of enemy footsteps by 25%.</li>
              <li>Changed volume falloff of footsteps from Logarithmic to Linear.</li>
              <li>Increased range of footsteps by one building tile.</li>
            </ul>
          </li>
          <li>Added more detail to the Battle Bus audio.</li>
          <li>Lowered the volume of Hop Rocks activation, deactivation, and in-use sounds.</li>
          <li>Made the teleport rez-in sound when returning to the lobby more subtle.</li>
          <li>Improved soccer and basketball audio by adding rolling and bouncing sounds.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Fixed cases where certain sounds wouldn't play in highly populated areas like Tilted Towers or the pre-game island.</li>
        </ul>

        <h2>UI</h2>

        <ul>
          <li>Added in a new style for the options screen.</li>
          <li>Replays from the E3 Fortnite Pro-Am are now available to view inside the client.&nbsp;</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>HP bars no longer only show 1 HP if you switch between teammates while spectating.</li>
          <li>Interact prompts no longer display on chests for Shopping Cart passengers.</li>
        </ul>

        <h2>Art + Animation</h2>

        <ul>
          <li>The following emotes have had facial animations added to them.
            <ul class="inside">
              <li>True Love</li>
              <li>Tidy</li>
              <li>Breaking Point</li>
              <li>Pure Salt</li>
              <li>Kiss Kiss</li>
              <li>Face Palm</li>
              <li>Jubilation</li>
              <li>Finger Guns</li>
              <li>Disco Fever</li>
              <li>Fresh</li>
              <li>Take the L</li>
              <li>Make it Rain</li>
              <li>Hootenanny</li>
              <li>Squat Kick</li>
              <li>Step it Up</li>
              <li>Flippin' Sexy</li>
            </ul>
          </li>
          <li>Updated the B<span id="cke_bm_406E" style="display: none;">&nbsp;</span>attle Bus visuals and animations.</li>
          <li>Battle Bus now has animating parts and flashing party lights when flying. &nbsp;</li>
          <li>All battle bus models in the world have higher resolution.</li>
        </ul>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Animations will now play properly when exiting the Shopping Cart while simultaneously switching seats.</li>
          <li>Opening effects will now properly play after searching Supply Drops.</li>
          <li>“Wavey” effects now properly appear on Willow trees.</li>
          <li>Fixed an issue where sprays where not displaying correctly on some objects.</li>
        </ul>

        <h2>Replay System</h2>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Fixed an issue where markers on the replay timeline would not be cleared when changing player.</li>
          <li>Shopping Carts replicate more accurately while scrubbing through replays.</li>
        </ul>

        <h2>Mobile</h2>

        <p><strong>Bug Fixes</strong></p>

        <ul>
          <li>Crash fixes and stability improvements.</li>
          <li>Players will no longer experience a short hitch when landing from the Battle Bus.</li>
        </ul>

        <hr>
      </div>
    </modal>
    <modal class="patch-modal" name="430modal" height="auto" :scrollable="true">
     <h1 class="dark" >3...2...1,</h1>
     <div class="patch-notes-description">Players, start your Carts! Patch v4.3 introduces Shopping Carts to Battle Royale. Ride solo or grab a friend to cover you as you roll around the map together.<br>
      <br>
      <p>Lights, camera, action! Complete part two of the Blockbuster questline in Save the World. Finish and unlock the newest Mythic Hero!</p>
      <br>
      <p>Have feedback? Let us know on our social channels.</p>
      <br>
      <b>Shopping Carts (Battle Royale)</b>
      <p>Ready, set, GO! Race across the map in Shopping Carts. Find one in Battle Royale now.</p>

      <div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen="true" class="embed-responsive-item" frameborder="0" src="https://www.youtube.com/embed/ig6kXeKSlFc" width="100%"></iframe></div>
      <br>
      <br>
      <b>Challenge Progression (Battle Royale)</b><br>
      Know your goals! UI elements have been added so you can track your Challenges in-match.<br><br>

      <p style="text-align: center;"><img alt="BR04_PatchNotes_ChallengeProgression.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-3%2Foverview-text-v4-3%2FBR04_PatchNotes_ChallengeProgression-1920x892-52edc6ebb0fcda1c0309cfbc05bf1e9bf93a7d2b.jpg" width="auto"></p><br>
      <b>Blockbuster Event Part Two (Save the World)</b><br>
      Blockbuster returns with part two - A Hero is Born. Reunite with Ray and join the effort to save Spitfire. Part two of the Blockbuster Event is playing now!<br><br>
      <img alt="BR04_Social_Carbide.jpg" height="auto" src="https://cdn2.unrealengine.com/Fortnite%2Fpatch-notes%2Fv4-3%2Foverview-text-v4-3%2FBR04_Social_Carbide-1920x1080-7e29c8bcc09534b24a5735e61ce778afdba4f81a.jpg" width="auto"><br>
      <br>
      <strong>VOIP on PC (Save the World)</strong><br>
      Communication is key. Talk to your team over voice chat on PC.
      <hr>
      <h2 dir="ltr">General</h2>

      <ul>
        <li>Turbo Build: Structures now build faster after the first building piece is placed.
          <ul class="inside">
            <li>Your first structure is built 0.15 seconds after holding the button (unchanged), any additional structures built while Turbo Building are placed after 0.05 seconds.</li>
            <li>This fixes the issue that was occasionally causing a structure not to place when quickly building.</li>
            <li>The reason there’s a difference in timing between the first structure placed (0.15s) and Turbo Built structures (0.05s) is to allow additional time for players to switch structure type or rotate pieces.</li>
          </ul>
        </li>
        <li>Added a toggle for 'Edit Mode Aim Assist' ingame options.
          <ul class="inside">
            <li>This has always been enabled for controller users. &nbsp;You now have the option to enable or disable this feature.</li>
            <li>Edit Mode Aim Assist attracts your aim towards the closest building square and partially confines your crosshair to the building piece your editing.</li>
          </ul>
        </li>
        <li>Save the World and Battle Royale now have their own unique loading screens following mode select.</li>
      </ul>
      <strong>Bug Fixes</strong>

      <ul>
        <li>Turbo Building is no longer cancelled when cycling through Traps to get to a new building piece on your quick bar.</li>
        <li>The "out of resources" sound effect no longer plays repeatedly while trying to Turbo Build without any resources.</li>
        <li>Menu sliders no longer become unresponsive on controllers after a tooltip pops up.</li>
        <li>Having a full backpack will no longer cause picked up items to disappear when dropped on the ground.</li>
        <li>Fixed issues while aiming diagonally when using a controller.
          <ul class="inside">
            <li>The stick input was not correctly translating into camera rotation causing the camera to never reach its maximum turn rate when aiming diagonally.</li>
            <li>Camera input curves have also been slightly tuned to account for the change in diagonal aiming speeds.</li>
          </ul>
        </li>
        <li>Fixed player movement corrections upon landing from a jump after activating sprint mid-air.</li>
        <li>Fixed a crash that could happen when logging out.</li>
        <li>Fixed an issue that caused black line streaks to appear on other players far off in the distance</li>
      </ul>

      <h2>Known Issues</h2>

      <ul>
        <li>Wanting to track the top community issues? Head over to our <em>Fortnite | Community Issues</em> Trello board <a href="https://trello.com/b/Bs7hgkma/fortnite-community-issues">here</a>.</li>
      </ul>
      <hr>
      </div>
      
      <h1 class="dark">Battle Royale</h1>
      <div class="patch-notes-description">
        <h2>Weapons + Items</h2>
        <ul>
          <li>Added new foraged item: Mushrooms
            <ul class="inside">
              <li>Mushrooms will grant 5 shield (up to 100).</li>
              <li>Can be found around shady wooded or swampy areas.</li>
            </ul>
          </li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Jetpack fuel meter now displays correctly when swapping to a different Jetpack.</li>
          <li>Traps no longer wait for the player built structure to finish building before triggering.</li>
          <li>Vending Machines can no longer be destroyed by Remote Explosives.</li>
        </ul>

        <h2>Gameplay</h2>

        <ul>
          <li>Added rideable Shopping Carts.
            <ul class="inside">
              <li>Room for two - push it around or ride as a passenger!</li>
              <li>Can shoot from passenger seat.</li>
              <li>Found scattered around the world in various locations.</li>
              <li>Fall damage enabled.</li>
            </ul>
          </li>
        </ul>

        <h2>Limited Time Mode:&nbsp;<strong>Blitz! v2</strong></h2>

        <ul>
          <li>Summary
            <ul class="inside">
              <li>Faster storms, more loot, exciting finishes!</li>
            </ul>
          </li>
          <li>What's New?
            <ul class="inside">
              <li>Updated with all of the new weapons &amp; items that have come out since Blitz was last released: Port-a-fort, Clinger, LMG &amp; more.</li>
              <li>Bus flight height has been lowered to allow players to get into the fight more quickly.</li>
            </ul>
          </li>
          <li>Mode Details
            <ul class="inside">
              <li>The storm is already closing in at the beginning of the match, choose your landing spot carefully!</li>
              <li>Wait time between storms is significantly shorter than usual; maximum match length is 15 minutes.</li>
              <li>Increased chances of treasure chests spawning from 50-70% to 80-90%.</li>
              <li>Increased chances of ammo boxes spawning from 65-80% to 85-95%.</li>
              <li>Resource harvesting amounts increased by 50%.</li>
              <li>Increased materials found on ground from 30 to 75 per instance.</li>
              <li>Increased the number, spawn rate &amp; descent speed of Supply Drops.</li>
              <li>All stats are counted in this mode.</li>
            </ul>
          </li>
        </ul>

        <h2>Limited Time Mode:&nbsp;<strong>Teams of 20 v2</strong></h2>

        <ul>
          <li>Summary
            <ul class="inside">
              <li>Five teams of twenty players fight to the finish!</li>
            </ul>
          </li>
          <li>What's New?
            <ul class="inside">
              <li>Each team now has their own bus, to make it easier to drop together.</li>
              <li>Chests &amp; Supply Drops now spawn extra ammo and consumables.</li>
            </ul>
          </li>
          <li>Mode Details
            <ul class="inside">
              <li>Each team is composed of five squads of four players.</li>
              <li>Increased chances of treasure chests spawning from 50-70% to 60-80%.</li>
              <li>Increased chances of ammo boxes spawning from 65-80% to 75-90%.</li>
              <li>Supply Drops always come in batches of 5 instead of random amounts per Storm Circle. Supply Drop rate increased from 180 (+/- 30s) to 210 (+/- 30s).</li>
              <li>Teams of 20 has six Storm Circles instead of nine. Most matches will end within 20 minutes.&nbsp;</li>
              <li>All stats except for wins are counted in this mode.</li>
            </ul>
          </li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Shotgun fire adjusted to help alleviate situations where it would hit world objects instead of players.</li>
          <li>Opened treasure chests won’t appear unopened when viewed from a long distance.</li>
          <li>Players now face the correct direction when jumping from the Battle Bus.</li>
          <li>You can no longer headshot downed players through their bodies.</li>
          <li>Shots to the upper chest and neck won’t count as a headshot.</li>
          <li>Items that fall off the map won't teleport to the nearest player anymore.</li>
          <li>Supply Drops no longer collide with items on the ground while landing.</li>
          <li>Visual effects no longer appear delayed after opening Supply Drops.</li>
        </ul>

        <h2>Performance</h2>

        <ul>
          <li>Major optimization pass to the end of match UI in order to reduce hitching on elimination.</li>
          <li>Fixed a case where traps and weapons were being improperly removed from memory between matches and causing in-game hitches.</li>
          <li>Major optimization for distance field ambient occlusion on PC, PS4 Pro and Xbox One X (GPU optimization).</li>
          <li>Optimized translucency rendering on consoles in all scenes (GPU optimization).</li>
          <li>Made additional improvements to material loading. This will help buildings and characters stream in even faster and reduce hitching.</li>
          <li>Lowered CPU cost of moving simulated networked characters, especially those invisible or furthest away from the player.</li>
        </ul>

        <h2>Audio</h2>

        <ul>
          <li>Improved rhythm of footsteps on dirt and grass to be more consistent.&nbsp;</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Bouncing grenade audio will no longer be heard after the grenade explodes.</li>
        </ul>

        <h2>UI</h2>

        <ul>
          <li>Streamer mode now anonymizes your name for other players.</li>
          <li>The Self-Service Cosmetic Returns feature has been re-enabled.
            <ul class="inside">
              <li>More information is available here: <a href="http://epic.gm/q5qv">LINK</a></li>
            </ul>
          </li>
          <li>Large team modes like 20v20 will be selected by default for new players when one is available.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Locker and Store item rotation speed is no longer based on your controller or mouse sensitivity setting.</li>
          <li>You can now zoom in on the map screen with the gamepad.</li>
          <li>You can now customize the button used to open the full screen map while spectating.</li>
          <li>Binding locker emotes is now working as intended.</li>
          <li>Player's level and experience values will no longer appear as 0 in the match stats screen when eliminated.</li>
          <li>Player’s score and XP gains will no longer go off the bottom of the match stats screen after completing a match.</li>
          <li>Consumable timers will now display in all cases.</li>
        </ul>

        <h2>Art + Animation</h2>

        <ul>
          <li>Added custom Hunting Rifle firing animations for player and weapon.</li>
          <li>A visual effect is now played whenever a player joins or leaves the party or changes their outfit on the pre-game lobby screen.&nbsp;</li>
          <li>Slightly updated the animation while in DBNO.&nbsp;</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Holding consumables while using the jetpack no longer causes animation issues.</li>
          <li>The animation for jumping while eating foraged items has been fixed.</li>
        </ul>

        <h2>Replay System</h2>

        <ul>
          <li>Smoothed out Replay Drone controls.</li>
          <li>Added an option to preserve camera settings when switching cameras.</li>
          <li>Changed sorting order in Replay Browser. Out of date and corrupt replays are now at the bottom of the list.</li>
        </ul>

        <h2>Mobile</h2>

        <ul>
          <li>Voice chat is here!
            <ul class="inside">
              <li>Voice chat with your party can now be enabled in settings. Push-to-Talk with your party members!&nbsp;</li>
            </ul>
          </li>
          <li>Editing different stair configurations will work more consistently.</li>
        </ul>
        <strong>Bug Fixes</strong>

        <ul>
          <li>Fixed an issue causing players to be unable to download Fortnite even if they had enough storage space.</li>
          <li>General fixes to input touch state to better support *many* fingers.</li>
          <li>Trajectory indicators no longer appear when entering DBNO.</li>
          <li>Supply drop health numbers now update correctly when damaged.</li>
          <li>Fixed an issue where touching the quickbar when weapon switching is unavailable could cause your inventory to be stuck on the wrong weapon.</li>
        </ul>
      </div>
    </modal>
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
  
  #patch-notes-container {
    margin: auto;
    padding: 40px;
  }

  .card {
    margin-bottom: 40px;
  }

  .card-body {
    position: relative;
  }

  .card-body h5 {
    position: absolute;
    top: -50px;
    font-size: 36px;
    font-family: "LuckiestGuy", sans-serif;
    color: #eee;
  }

  img {
    width: 100%;
  }

  .patch-notes-description {
    padding: 40px;
  }

  h2 {
    font-family: "LuckiestGuy", sans-serif;
  }
  
  h4 {
    margin: 10px 0 -10px 0;
    font-size: 20px;
  }

  .dark {
    font-family: "LuckiestGuy", sans-serif;
    text-align: center;
    font-size: 52px;
  }

  .dark-top {
    font-family: "LuckiestGuy", sans-serif;
    text-align: center;
    font-size: 52px;
    margin-top: 40px;
  }

  .inside {
    margin-left: 20px;
  }

  body .v--modal-block-scroll {
    width: auto !important;
  }

  strong p {
    margin: 40px 0 -10px 0;
  }

  #close {
    position: relative;
    left: 50%;
    top: 25px;
    width: 100px;
    transform: translateX(-50%);
  }
</style>


