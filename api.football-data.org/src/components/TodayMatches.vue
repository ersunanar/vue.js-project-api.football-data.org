<template>
<div>
<div>
  <h1 v-if="(PLs.length + PDs.length + SAs.length + BL1s.length + FL1s.length) > 0">Today's Matches</h1>
  <div v-if="PLs.length > 0"> 
  <h4>Premier League</h4>
  <table >
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Team Home</th>
      <th>Score</th>
      <th>Team Away</th>
    </tr>

    <tr v-for="pl in PLs"  :key="pl.id">
      <td>{{pl.utcDate.substring(8,10)}}.{{pl.utcDate.substring(5,7)}}.{{pl.utcDate.substring(0,4)}}</td>
      <td>{{pl.utcDate.substring(11,16).replace('00:00','--:--')}}</td>        
      <td td class="forLeft"><router-link :to="getTeamInfo(pl.homeTeam.id)">{{pl.homeTeam.name}}</router-link></td>        
      <td>{{pl.score.fullTime.homeTeam}} - {{pl.score.fullTime.awayTeam}}</td>        
      <td td class="forRight"><router-link :to="getTeamInfo(pl.awayTeam.id)">{{pl.awayTeam.name}}</router-link></td>            
    </tr>
  </table>
  </div>

  <div v-if="PDs.length > 0"> 
  <h4>La Liga</h4>
  <table >
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Team Home</th>
      <th>Score</th>
      <th>Team Away</th>
    </tr>

    <tr v-for="pd in PDs"  :key="pd.id">
      <td>{{pd.utcDate.substring(8,10)}}.{{pd.utcDate.substring(5,7)}}.{{pd.utcDate.substring(0,4)}}</td>
      <td>{{pd.utcDate.substring(11,16).replace('00:00','--:--')}}</td>        
      <td td class="forLeft"><router-link :to="getTeamInfo(pd.homeTeam.id)">{{pd.homeTeam.name}}</router-link></td>        
      <td>{{pd.score.fullTime.homeTeam}} - {{pd.score.fullTime.awayTeam}}</td>        
      <td td class="forRight"><router-link :to="getTeamInfo(pd.awayTeam.id)">{{pd.awayTeam.name}}</router-link></td>            
    </tr>
  </table>
  </div>

  <div v-if="SAs.length > 0"> 
  <h4>Serie A</h4>
  <table >
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Team Home</th>
      <th>Score</th>
      <th>Team Away</th>
    </tr>

    <tr v-for="sa in SAs"  :key="sa.id">
      <td>{{sa.utcDate.substring(8,10)}}.{{sa.utcDate.substring(5,7)}}.{{sa.utcDate.substring(0,4)}}</td>
      <td>{{sa.utcDate.substring(11,16).replace('00:00','--:--')}}</td>        
      <td class="forLeft"><router-link :to="getTeamInfo(sa.homeTeam.id)">{{sa.homeTeam.name}}</router-link></td>        
      <td>{{sa.score.fullTime.homeTeam}} - {{sa.score.fullTime.awayTeam}}</td>        
      <td class="forRight"><router-link :to="getTeamInfo(sa.awayTeam.id)">{{sa.awayTeam.name}}</router-link></td>            
    </tr>
  </table>
  </div>

  <div v-if="BL1s.length > 0">
  <h4>Bundesliga</h4>
  <table >
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Team Home</th>
      <th>Score</th>
      <th>Team Away</th>
    </tr>

    <tr v-for="bl1 in BL1s"  :key="bl1.id">
      <td>{{bl1.utcDate.substring(8,10)}}.{{bl1.utcDate.substring(5,7)}}.{{bl1.utcDate.substring(0,4)}}</td>
      <td>{{bl1.utcDate.substring(11,16).replace('00:00','--:--')}}</td>        
      <td class="forLeft"><router-link :to="getTeamInfo(bl1.homeTeam.id)">{{bl1.homeTeam.name}}</router-link></td>        
      <td>{{bl1.score.fullTime.homeTeam}} - {{bl1.score.fullTime.awayTeam}}</td>        
      <td class="forRight"><router-link :to="getTeamInfo(bl1.awayTeam.id)">{{bl1.awayTeam.name}}</router-link></td>            
    </tr>
  </table>
  </div>

  <div v-if="FL1s.length > 0">
  <h4>Ligue 1</h4>
  <table >
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Team Home</th>
      <th>Score</th>
      <th>Team Away</th>
    </tr>

    <tr v-for="fl1 in FL1s"  :key="fl1.id">
      <td>{{fl1.utcDate.substring(8,10)}}.{{fl1.utcDate.substring(5,7)}}.{{fl1.utcDate.substring(0,4)}}</td>
      <td>{{fl1.utcDate.substring(11,16).replace('00:00','--:--')}}</td>        
      <td class="forLeft"><router-link :to="getTeamInfo(fl1.homeTeam.id)">{{fl1.homeTeam.name}}</router-link></td>        
      <td>{{fl1.score.fullTime.homeTeam}} - {{fl1.score.fullTime.awayTeam}}</td>        
      <td class="forRight"><router-link :to="getTeamInfo(fl1.awayTeam.id)">{{fl1.awayTeam.name}}</router-link></td>            
    </tr>
  </table>
  </div>
  </div>

  <h1 v-if="(PLs.length + PDs.length + SAs.length + BL1s.length + FL1s.length) == 0">There is no match today</h1>


   </div>
</template>

<script>
export default {
  name: 'TodayMatches',
  props:['PLs','PDs','SAs','BL1s','FL1s'],

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