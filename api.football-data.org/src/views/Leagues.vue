<template>
<div class="league">  
  
  <div style="overflow:auto"> 
    <div class="menu_league">
      <h2 style="text-align: center;">Scorers</h2>
      <scorers :scorers=scorers></scorers>
    </div>

    <div class="main_league">      
      <current-match-day :current_matches="current_matches" :supposedMatchDay="supposedMatchDay" :totalmatchday=totalmatchday></current-match-day>
      <br>
      <hr>
      <br>
      <h2 style="text-align: center;">Standing Table</h2>
      <br>      
      <standings :standings=standings></standings>
    </div>
    
    <div class="right_league">    
    </div>
  </div>

</div>
</template>

<script>

import Scorers from '@/components/Scorers.vue'
import Standings from '@/components/Standings.vue'
import CurrentMatchDay from '@/components/CurrentMatchDay.vue'



export default {
  name: 'League',
  components: {
    Scorers, Standings,CurrentMatchDay
       
  },
  data() {
    return {
      scorers:[],
      standings:[],
      current_matches:[],
      totalmatchday : 0,
      supposedMatchDay: 0
      
      
      
    }
  },


watch:{
     $route() {
     

      const url_scorer = `http://api.football-data.org/v2/competitions/${this.$route.params.code}/scorers`;
    fetch(url_scorer, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.scorers = response.scorers;
    })

    const url_standing = `http://api.football-data.org/v2/competitions/${this.$route.params.code}/standings?standingType=TOTAL`;
    fetch(url_standing, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.standings = response.standings[0].table;
    })

    const url_currentMachDay = `http://api.football-data.org/v2/competitions/${this.$route.params.code}/matches`;
    fetch(url_currentMachDay, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.current_matches = []
      response.matches.forEach(element => {
        if(element.matchday==element.season.currentMatchday){

          this.current_matches.push(element)
        }
        
      });
      this.totalmatchday = response.matches[response.matches.length-1].matchday
      this.supposedMatchDay = response.matches[0].season.currentMatchday
    })
}

},

created(){
  
  const url_scorer = `http://api.football-data.org/v2/competitions/${this.$route.params.code}/scorers`;
    fetch(url_scorer, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.scorers = response.scorers;
    })

    const url_standing = `http://api.football-data.org/v2/competitions/${this.$route.params.code}/standings?standingType=TOTAL`;
    fetch(url_standing, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      this.standings = response.standings[0].table;
    })

    const url_currentMachDay = `http://api.football-data.org/v2/competitions/${this.$route.params.code}/matches`;
    fetch(url_currentMachDay, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {

      response.matches.forEach(element => {
        if(element.matchday==element.season.currentMatchday){

          this.current_matches.push(element)
        }
        
      });
      this.totalmatchday = response.matches[response.matches.length-1].matchday
      this.supposedMatchDay = response.matches[0].season.currentMatchday
    })
}
}

</script>

<style>
.menu_league {
    float:left;
    width:25%;
    padding:15px 20px;
    text-align:center;
  }

  .main_league {
    float:left;
    width:50%;
    padding:15px 20px;
  }

  .right_league {
    float:left;
    width:10%;
    padding:15px 20px;
    text-align:center;
  }


  @media only screen and (max-width:620px) {
    /* For mobile phones: */
    .menu, .main, .right {
      width:100%;
    }
  }
  

table {
    border-collapse: collapse;
    width: 100%;
    color: black;
    font-size: 15px;
    font-family:Arial, Helvetica, sans-serif;
    
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

  table img:hover {
    transition: 0.5s;
    transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  h2{
    margin: 0px;
  }
  
  h3 {
    color: red;
    text-align: center;
  }

  h5{
    margin: 3px;
    text-align: center;
    color:darkblue;

  }
  h5 a:hover{
    color:darkblue;
    font-weight: bold;
    
  }

  a {
    text-decoration: none;
  }


</style>