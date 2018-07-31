<template>
  <div id="stats-container">
    <div class="epic-info">
      <h1>Look up your stats!</h1>
      <input type="text" v-model="epicUsername" placeholder="Enter your Epic Username">
      <button @click="sendInfo">Submit</button>
    </div>
    <div class="info-container" v-show="show">
      <h1>{{epicStats.epicUserHandle}}</h1>
      <div class="all-stats">
        <div class="card solo">
          <h3>Solos</h3>
          <p>Wins: <span>{{epicStats.stats.p2.top1.value}}</span></p>
          <p>Kills: <span>{{epicStats.stats.p2.kills.value}}</span></p>
          <p>KD: <span>{{epicStats.stats.p2.kd.value}}</span></p>
          <p>Kills Per Game (avg): <span>{{epicStats.stats.p2.kpg.value}}</span></p>
          <p>Total Matches: <span>{{epicStats.stats.p2.matches.value}}</span></p>
          <p>Win Percent: <span>{{epicStats.stats.p2.winRatio.value}}%</span></p>
        </div>
        <div class="card duo">
          <h3>Duos</h3>
          <p>Wins: <span>{{epicStats.stats.p10.top1.value}}</span></p>
          <p>Kills: <span>{{epicStats.stats.p10.kills.value}}</span></p>
          <p>KD: <span>{{epicStats.stats.p10.kd.value}}</span></p>
          <p>Kills Per Game (avg): <span>{{epicStats.stats.p10.kpg.value}}</span></p>
          <p>Total Matches: <span>{{epicStats.stats.p10.matches.value}}</span></p>
          <p>Win Percent: <span>{{epicStats.stats.p10.winRatio.value}}%</span></p>
        </div>
        <div class="card squad">
          <h3>Squads</h3>
          <p>Wins: <span>{{epicStats.stats.p9.top1.value}}</span></p>
          <p>Kills: <span>{{epicStats.stats.p9.kills.value}}</span></p>
          <p>KD: <span>{{epicStats.stats.p9.kd.value}}</span></p>
          <p>Kills Per Game (avg): <span>{{epicStats.stats.p9.kpg.value}}</span></p>
          <p>Total Matches: <span>{{epicStats.stats.p9.matches.value}}</span></p>
          <p>Win Percent: <span>{{epicStats.stats.p9.winRatio.value}}%</span></p>
        </div>
      </div>
      <button v-show="show" @click="show = false">Close Stats</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dropDownValue: "pc",
      epicUsername: "",
      epicStats: {
        epicUserHandle: "",
        stats: {
          // Solo
          p2: {
            top1: "",
            kills: "",
            kd: "",
            kpg: "",
            matches: "",
            winRatio: ""
          },
          // Duo
          p10: {
            top1: "",
            kills: "",
            kd: "",
            kpg: "",
            matches: "",
            winRatio: ""
          },
          // Squad
          p9: {
            top1: "",
            kills: "",
            kd: "",
            kpg: "",
            matches: "",
            winRatio: ""
          }
        }
      },
      show: false
    }
  },
  methods: {
    sendInfo() {
      // let baseUrl = process.env.baseUrl || "http://localhost:3000";
      axios.post("/fortnite", {
        dropDownValue: this.dropDownValue,
        epicUsername: this.epicUsername
      }).then((response) => {
        this.epicStats = response.data;
        console.log(this.epicStats);
      }).catch((error) => {
        console.log(error);
      })
      this.show = true;
    }
  }
}
</script>

<style scoped>

  .epic-info {
    text-align: center;
    background-color: #666;
    padding: 20px;
  }

  .epic-info h1 {
    margin: 40px;
    font-size: 40px;
    color: #eceff1;
    text-shadow: 1px 1px 10px rgba(0,0,0,.25);
    font-family: "LuckiestGuy", sans-serif;
  }

  .epic-info input,
  .epic-info button {
    padding: 10px;
    margin-bottom: 25px;
  }

  .epic-info input {
    width: 250px;
    margin-right: -5px;
  }

  .epic-info button {
    padding: 10px 30px;
    background-color: #333;
    border: 1px solid #333;
    color: #eee;
    outline: none;
  }

  .info-container {
    text-align: center;
    background-color: #666;
    padding-bottom: 40px;
    font-family: "LuckiestGuy", sans-serif;
  }
  
  .info-container h1 {
    padding: 0 0 30px 0;
  }

  .info-container button {
    padding: 10px 50px;
    font-size: 24px;
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
    background-color: #333;
    color: #eee;
    border: 2px solid #000;
  }

  .all-stats {
    display: flex;
    justify-content: space-evenly;
    
  }
  
  .card {
    padding: 40px;
    margin: 20px 0 40px 0;
    background-color: #eee;
    text-align: left;
    position: relative;
    box-shadow: 0px 0px 20px -5px black;
  }

  .card h3 {
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 30px;
    background-color: #90a4ae;
    padding: 5px 30px;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 15% 100%);
  }

  .card p {
    margin: 5px 0;
    border-bottom: 1px solid teal;
  }

  .card p span {
    font-size: 25px;
    margin-left: 10px;
  }

</style>

