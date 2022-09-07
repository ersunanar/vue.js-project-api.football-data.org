<template>
  <div>
   
    <table >
        <tr>
            <th>Player Name</th>
            <th>Club</th>            
            <th>Goals</th>
        </tr>
    
        <tr v-for="scorer in scorers" :key="scorer.player.name">
            <td class="forLeft">{{scorer.player.name}}</td>
            <td td class="forLeft"><router-link :to="getTeamInfo(scorer.team.id)">{{scorer.team.name}}</router-link></td>            
            <td>{{scorer.numberOfGoals}}</td>
        </tr>
    </table > 
   </div>
</template>

<script>
export default {
  name: 'Scorers',
  props:['scorers'],
  
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