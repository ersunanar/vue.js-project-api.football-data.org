<template>
<div class="mainpage">

  <div style="overflow:auto">

    <div class="menu">
    </div>

    <div class="main">
      <today-matches :PLs="PLs" :PDs="PDs" :SAs="SAs" :BL1s="BL1s" :FL1s="FL1s"></today-matches>
    </div>

    <div class="right">  
    </div>
  </div>

</div>
</template>

<script>

import TodayMatches from '../components/TodayMatches.vue'

export default {
  name: 'Team',
  components: {  
    TodayMatches
       
  },
  data() {
    
   return {
      PLs:[],
      PDs:[],
      SAs:[],
      BL1s:[],
      FL1s:[]
      
      
    }
  },

  mounted() {


    const url_today_matches = 'http://api.football-data.org/v2/matches';
    fetch(url_today_matches, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {
      
      response.matches.forEach(element => {

        
        if (element.competition.name == "Premier League") {
          this.PLs.push(element)
        }
        else if (element.competition.name == "Primera Division") {
          this.PDs.push(element)          
        }
        else if (element.competition.name == "Serie A") {
          this.SAs.push(element)          
        }
        else if (element.competition.name == "Bundesliga") {
          this.BL1s.push(element)          
        }
        else if (element.competition.name == "Ligue 1") {
          this.FL1s.push(element)          
        }
        
      });
     
    })



  }

}
</script>

<style>


.menu {
    float:left;
    width:20%;
    padding:15px 20px;
    text-align:center;
  }

  .main {
    float:left;
    width:60%;
    padding:15px 20px;
  }

  .right {
    float:left;
    width:20%;
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


    h4{
    color: red;
    text-align: left;

  }

    a {
    text-decoration: none;
  }

  h1 {
    color: darkblue;
    
  }



  

</style>