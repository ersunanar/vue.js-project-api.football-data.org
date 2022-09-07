<template>
  <div>
     <div>
  <div class="flex-container">
    <button v-for="i in totalmatchday/2" :key="i"  @click="getSupposedMatchDay(i)" :id="i" >{{i}}</button>
  </div>
  <div class="flex-container">  
    <button v-for="i in totalmatchday/2" :key="i"  @click="getSupposedMatchDay(totalmatchday/2+i)" :id="totalmatchday/2+i" >{{totalmatchday/2+i}}</button>
  </div>
</div>

<hr>
   <h3>WEEK - {{supposedMatchDay}}</h3>
   
    <table >    
      <tr v-for="current_match in current_matches"  :key="current_match.id">
        <td>{{current_match.utcDate.substring(8,10)}}.{{current_match.utcDate.substring(5,7)}}.{{current_match.utcDate.substring(0,4)}}</td>
        <td>{{current_match.utcDate.substring(11,16).replace('00:00','--:--')}}</td>        
        <td td class="forLeft"><router-link :to="getTeamInfo(current_match.homeTeam.id)">{{current_match.homeTeam.name}}</router-link></td>        
        <td>{{current_match.score.fullTime.homeTeam}} - {{current_match.score.fullTime.awayTeam}}</td>        
        <td td class="forRight"><router-link :to="getTeamInfo(current_match.awayTeam.id)">{{current_match.awayTeam.name}}</router-link></td>            
                 
      </tr>
    </table > 
   </div>
</template>

<script>
export default {
  name: 'CurrentMatchDay',
  props:['current_matches', 'supposedMatchDay', 'totalmatchday'],
  methods: {
    getTeamInfo(id) {
      return `/teams/${id}`;
    },
  
  
    getSupposedMatchDay(match_day){
    this.current_matches = [];

    const url_supposedmatchday = `http://api.football-data.org/v2/competitions/${this.$route.params.code}/matches`;
    fetch(url_supposedmatchday, {headers: { 'X-Auth-Token': '9bc643810e6845d39bc9a39866147b3b'}})
    .then((response) => {return response.json()})
    .then((response) => {

      response.matches.forEach(element => {
        if(element.matchday==match_day){

          this.current_matches.push(element)
        }
        
      });
      this.supposedMatchDay = match_day
    })

  }
  
  
  
  }
//match.utcDate.substring(11,16).replace('00:00','--:--')
}

/*
<router-link :to="goProfile(gif.id)">
          <img :src="gif.images.fixed_height.url" alt="Trending gif">
        </router-link>
        */
</script>

<style>
.flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color:white;
  }
  
  .flex-container > div {
    background-color:white;
    border: 1px solid blue;
    color: darkgrey;
    
    width: 100px;
    margin: 5px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
  }


  .flex-container > div:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }


  .flex-container > div a{
    color: darkgrey;

  }

  .flex-container > div a:visited{
    color: darkgrey;

  }

  button{

    height: 30px;
    width: 50px;
    margin: 3px;


  }
</style>