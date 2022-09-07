<template>
<div>
  <table >
   <tr><td><strong>Short Name:</strong></td><td>{{clubinfos.shortName}}</td></tr> 
    <tr><td><strong>Country:</strong></td><td>{{clubinfos.area.name}}</td></tr>
    <tr><td><strong>Address:</strong></td><td>{{clubinfos.address}}</td></tr>
    <tr><td><strong>Phone:</strong></td><td>{{clubinfos.phone}}</td></tr>
    <tr><td><strong>Website:</strong></td><td>{{clubinfos.website}}</td></tr>
    <tr><td><strong>e-mail:</strong></td><td>{{clubinfos.email}}</td></tr>
    <tr><td><strong>Founded in:</strong></td><td>{{clubinfos.founded}}</td></tr>
    <tr><td><strong>Colors:</strong></td><td>{{clubinfos.clubColors}}</td></tr>
    <tr><td><strong>Venue:</strong></td><td>{{clubinfos.venue}}</td></tr>
    <tr><td><strong>Coach:</strong></td><td>{{coach[0].name}}</td></tr>
  </table > 
</div>
</template>

<script>
export default {
  name: 'ClubInfo',
  props:['clubinfos','coach']
  

}
</script>