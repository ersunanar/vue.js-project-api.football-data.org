<template>
<div class="team">

  <div class="clubLogo">
      <img :src="clubinfos.crestUrl"  width='128' height='128'>
  </div>

  <h2 class="clubName">{{clubinfos.name}}</h2>
  
  <div style="overflow:auto">  
    <div class="main_ClubInfoPage">
      <club-info :clubinfos="clubinfos" :coach="coach"></club-info>
      <br>
      <hr>
      <br>
      <players :goalkeepers="goalkeepers" :defenders="defenders" :midfielders="midfielders" :attackers="attackers"></players>
    </div>

    <div class="right_ClubInfoPage">  
      <club-matches :club_all_matches="club_all_matches"></club-matches>  
    </div>
    
  </div>
 
</div>
</template>

<script>

import Players from '@/components/Players.vue'
import ClubInfo from '@/components/ClubInfo.vue'
import ClubMatches from '@/components/ClubMatches.vue'


export default {
  name: 'Team',
  components: {
    Players, ClubInfo,ClubMatches
   
       
  },
  data() {
    
   return {
      coach: [],
      goalkeepers:[],
      defenders:[],
      midfielders:[],
      attackers:[],
      club_all_matches:[],
      clubinfos :{}
      
    }
  },

  watch: {

    $route(to,from) {

      this.coach = [];
      this.goalkeepers = [];
      this.midfielders = [];
      this.attackers = [],
      this.club_all_matches = [],
      this.clubinfos = {}
      

      console.log("to",to)
      console.log("from",from)
    const url_players = `http://api.football-data.org/v2/teams/${this.$route.params.id}`;
    fetch(url_players, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.clubinfos = response;
      
      response.squad.forEach(element => {
        if(element.role == "PLAYER" && element.position == "Goalkeeper"){
          this.goalkeepers.push(element)
        }
        else if (element.role == "PLAYER" && element.position == "Defence") {
          this.defenders.push(element)
        }
        else if (element.role == "PLAYER" && element.position == "Midfield") {
          this.midfielders.push(element)          
        }
        else if (element.role == "PLAYER" && element.position == "Offence") {
          this.attackers.push(element)          
        }
        else if (element.role == "COACH") {
          this.coach.push(element)    
        }
        
      });
      const arr = response.matches;
      const lastPosition = arr.length -1;
      this.totalmatchday = response.matches[lastPosition].matchday
    })

    const url_allmatches = `http://api.football-data.org/v2/teams/${this.$route.params.id}/matches`;
    fetch(url_allmatches, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.club_all_matches = response.matches;
    })

      
    }

  },

  created() {


    const url_players = `http://api.football-data.org/v2/teams/${this.$route.params.id}`;
    fetch(url_players, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.clubinfos = response;
      response.squad.forEach(element => {
        if(element.role == "PLAYER" && element.position == "Goalkeeper"){
          this.goalkeepers.push(element)
        }
        else if (element.role == "PLAYER" && element.position == "Defence") {
          this.defenders.push(element)
        }
        else if (element.role == "PLAYER" && element.position == "Midfield") {
          this.midfielders.push(element)          
        }
        else if (element.role == "PLAYER" && element.position == "Offence") {
          this.attackers.push(element)          
        }
        else if (element.role == "COACH") {
          this.coach.push(element)    
        }
        
      });
      this.totalmatchday = response.matches[response.matches.length-1].matchday
    })

    const url_allmatches = `http://api.football-data.org/v2/teams/${this.$route.params.id}/matches`;
    fetch(url_allmatches, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.club_all_matches = response.matches;
    })



  }

}
</script>

<style>


.menu_ClubInfoPage {
    float:left;
    width:20%;
    text-align:left;
    padding:15px 20px;
  }

  .menu_ClubInfoPage a {
    padding:8px;
    margin-top:7px;
    display:block;
    width:100%;
    color:orange;
  }

  .main_ClubInfoPage {
    float:left;
    width:35%;
    padding:15px 20px;
  }



  .right_ClubInfoPage {
    float:left;
    width:60%;
    padding:15px 20px;
    text-align:center;
  }

  @media only screen and (max-width:620px) {
    /* For mobile phones: */
    .menu_ClubInfoPage, .main_ClubInfoPage, .right_ClubInfoPage {
      width:100%;
    }
  }
  .clubLogo{
    text-align: center;
    padding: 10px;
  }

  .clubName{
    text-align: center;
    padding: 5px;
    font-size: 30px;
    font-weight: bold;
    margin: 0px;
  }

table {
    border-collapse: collapse;
    width: 100%;
    color: black;
    font-size: 15px;
    font-family:Arial, Helvetica, sans-serif;
    
  }


  table a{
    color: black;
    
  }
  table a:visited{
    color: black;
    
  }

  table a:hover{
    color:blue;
    font-weight: bold;
    
  }

  th, td {
  text-align: center;
  
  padding:8px;
  border-bottom: 1px solid #ddd;
}
  
  td.forLeft {
    text-align: left;
  }

  td.forRight {
    text-align: right;
  }
 
  tr:hover {background-color:#dbd9d9;}

    h2{
    margin: 0px;
  }

  a {
    text-decoration: none;
  }


  
</style>