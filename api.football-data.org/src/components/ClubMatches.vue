<template>
  <div>
   
    <table >  
      <tr>
        <th>Competition</th>
        <th>Date</th>
        <th>Time</th>
        <th>Team Home</th>
        <th>Score</th>
        <th>Team Away</th>
      </tr>


      <tr v-for="match in club_all_matches"  :key="match.id">
        <td>{{match.competition.name}}</td>   
        <td>{{match.utcDate.substring(8,10)}}.{{match.utcDate.substring(5,7)}}.{{match.utcDate.substring(0,4)}}</td>
        <td>{{match.utcDate.substring(11,16).replace('00:00','--:--')}}</td>
        <td td class="forLeft"><router-link :to="getTeamInfo(match.homeTeam.id)">{{match.homeTeam.name}}</router-link></td>            
        <td>{{match.score.fullTime.homeTeam}} - {{match.score.fullTime.awayTeam}}</td>
        <td td class="forRight"><router-link :to="getTeamInfo(match.awayTeam.id)">{{match.awayTeam.name}}</router-link></td>            
              
      </tr>
    </table > 
   </div>
</template>

<script>
export default {
  name: 'ClubMatches',
  props:['club_all_matches'],
 methods: {
    getTeamInfo(id) {
      return `/teams/${id}`;
    }
  }

}

</script>

