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
          <router-link class="nav-item nav-link" :to="{ name : 'testcomponent' }" tag="a" active-class="active"> Test Componenet</router-link>
      </div>
    </div>
  </nav>
</template>


<script>
  export default {}

</script>

/*
Router-link kulllanılmasının sebebleri
- Tıklandığında sayfayı direk olarak reload etmiyor. Bu linkler üzerinde bir click listener çalışarak yönlendirmeyi
dingle page olarka yapıyor.
- Değişken active classları var. Hangi sayfada olunduğunu anlamamızı kolaylaştırıyor.
- tag="li" <- list item gibi davranmasını sağlıyor. - active-class -> kendisi active olduğunda ayrıca başka bir class
  ekleyebiliyoru böylece. Burada bootstrap classı olan active classı ekledik.
  - exact -> buradaki path exact olduğunda active classı eklenmesini yani sayfayı tanımasını sağlıyor.
  */
