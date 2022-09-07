<template>
  <div id="app">
  <div class="nav_bar">
<div class="nav_bar_left">
<router-link to="/"><strong>Main Page</strong></router-link>
</div>
<div class="nav_bar_right">
 
      
      <router-link to="/leagues/PL"><img class="zoom_logo"  src="@/assets/PremierLeague.png" width = "auto" height= "96" ></router-link>      
      <router-link to="/leagues/PD"><img class="zoom_logo"  src="@/assets/LaLiga.png" width = "auto" height= "96"  ></router-link>
      <router-link to="/leagues/SA"><img class="zoom_logo"  src="@/assets/SerieA.png" width = "auto" height= "96" ></router-link>
      <router-link to="/leagues/BL1"><img class="zoom_logo"  src="@/assets/BundesLiga.png" width = "auto" height= "96"  ></router-link>
      <router-link to="/leagues/FL1"><img class="zoom_logo"  src="@/assets/League1.png" width = "auto" height= "96"  ></router-link>
    
    </div>
    </div>
    <router-view/>

    <div style="background-color:#e5e5e5;text-align:center;padding:10px;margin-top:7px;">© copyright ea</div>
  </div>
</template>

<script>

export default {


}


</script>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}



  .nav_bar{
    
    background-color:dodgerblue;
    
    padding:25px;
    height: 120px;
    text-align:center;  
  }


  .nav_bar_left {
    width: 8%;
    float: left;
    padding: 2px;
    
  }

  .nav_bar_left a {
    
    
    color:salmon;
    font-size:50;
  }

    .nav_bar_right {
    width: 88%;
    
    float: right;
  }


    .zoom_logo {
    padding: 10px;
  }

  .zoom_logo:hover {
    transition: 0.5s;
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }


  router-link{
    text-decoration: none;
}
</style>
