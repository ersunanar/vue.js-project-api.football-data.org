<template>
  <div>
   
<table >
        <tr>
            <th>Player Name</th>
            <th>Nationality</th>
            <th>Position</th>
            <th>Age</th>
        </tr>
    
        <tr v-for="gk in goalkeepers" :key="gk.id">
            <td class= 'forLeft'>{{gk.name}}</td>
            <td>{{gk.nationality}}</td>
            <td>{{gk.position}}</td>
            <td>{{new Date().getFullYear()-parseInt(gk.dateOfBirth.substring(0,4))}}</td>
        </tr>
        <tr v-for="def in defenders" :key="def.id">
            <td class= 'forLeft'>{{def.name}}</td>
            <td>{{def.nationality}}</td>
            <td>{{def.position}}</td>
            <td>{{new Date().getFullYear()-parseInt(def.dateOfBirth.substring(0,4))}}</td>
        </tr>

        <tr v-for="mid in midfielders" :key="mid.id">
            <td class= 'forLeft'>{{mid.name}}</td>
            <td>{{mid.nationality}}</td>
            <td>{{mid.position}}</td>
            <td>{{new Date().getFullYear()-parseInt(mid.dateOfBirth.substring(0,4))}}</td>
        </tr>

        <tr v-for="att in attackers" :key="att.id">
            <td class= 'forLeft'>{{att.name}}</td>
            <td>{{att.nationality}}</td>
            <td>{{att.position}}</td>
            <td>{{new Date().getFullYear()-parseInt(att.dateOfBirth.substring(0,4))}}</td>
        </tr>


    </table > 
   </div>
</template>

<script>
export default {
  name: 'Players',
  props:['goalkeepers','defenders','midfielders','attackers']


 /* methods: {
    getTeamInfo(code) {
      return `/teams/${id}`;
    }
  }*/

}

/*
<router-link :to="goProfile(gif.id)">
          <img :src="gif.images.fixed_height.url" alt="Trending gif">
        </router-link>
        */
</script>