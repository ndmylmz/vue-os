<template>
  <div class="row col-12">
    <ul class="col-12">
      <h2>Member</h2>
      <div class="row col-12">
        <div class="col-6">
          <li v-for="developer in optimus[teamName].devs">
            {{developer}}
          </li>
        </div>
        <div class="col-6">
          <li v-for="qa in optimus[teamName].qa">
            {{qa}}
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        teamName: '',
        optimus:{
          Athos:{
            devs:["Yavuz", "Çağatay", "Çağan", "Yasin", "Murat", "Özlem"],
            qa:["Kubra", "Erkan"]
          },
          Aramis:{
            devs:[ "Ateş", "Aziza", "Sho", "Mohammed Akkad", "Velican"],
            qa:["Yaman", "Hakan"]
          },
          Porthos:{
            devs:["Alp Şenel", "Akif", "Yusuf", "Zahit", "Upol"," Ben"],
            qa:["Gizem", "Aycan", "Umut"]
          },
          Dartanyan:{
            devs:["Alican", "Nedim", "Bünyamin", "Kayahan", "Ersan", "Selman"],
            qa:["Caner", "Esra"]
          }
        },
        "teams-speciality": 'Web Services Masters',
        "hall-of-fame":{
          "dev-of-the-month": {
            "name": "Kayahan Güven",
            "profile-picture": ""
          },
          "qa-of-the-month": {
            "name": "Umut Çolak",
            "profile-picture": ""
          },
        }
      }
    },
    watch:{
      $route (to, from){
        this.teamName = to.params.teamName
      }
    }
  }
</script>
