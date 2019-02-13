<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light row border-bottom px-0">
    <div class="col-3">
      <a class="navbar-brand" href="#"><b>Optimus Scalability</b></a>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-9 border-left" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" :to="{ name : 'homeLink' }" tag="a" active-class="active" exact>Home</router-link>
        <router-link class="nav-item nav-link" :to="{ name : 'retroMainPageLink' }" tag="a" active-class="active">Retro
          Meetings</router-link>
        <router-link class="nav-item nav-link" :to="{ name : 'kpiLink' }" tag="a" active-class="active">KPI Results</router-link>
        <router-link class="nav-item nav-link" :to="{ name : 'slackLink' }" tag="a" active-class="active">Slack
          Integration</router-link>
      </div>
    </div>
  </nav>
</template>


<script>
  export default {}

</script>