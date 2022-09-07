<template>
  <div>
   
    <table >
        <tr>
          <th>Position</th>
          <th>Logo</th>
          <th>Club</th>
          <th>Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>Lost</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
    
        <tr v-for="team in standings" :key="team.id">
            <td>{{team.position}}</td>
            <td><img :src="team.team.crestUrl"  width=32 height=32> </td>
            <td td class="forLeft"><router-link :to="getTeamInfo(team.team.id)">{{team.team.name}}</router-link></td>            
            <td>{{team.playedGames}}</td>
            <td>{{team.won}}</td>
            <td>{{team.draw}}</td>
            <td>{{team.lost}}</td>
            <td>{{team.goalsFor}}</td>
            <td>{{team.goalsAgainst}}</td>
            <td>{{team.goalDifference}}</td>
            <td>{{team.points}}</td>
        </tr>
    </table > 
   </div>
</template>

<script>
export default {
  name: 'Standings',
  props:['standings'],
 methods: {
    getTeamInfo(id) {
      return `/teams/${id}`;
    }
  }

}

/*
<router-link :to="goProfile(gif.id)">
          <img :src="gif.images.fixed_height.url" alt="Trending gif">
        </router-link>
        */
</script>