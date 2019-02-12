<template>
  <div>
    <div class="row">
      <optimus-teams></optimus-teams>
    </div>
    <div class="row" v-if="!teamName">
      <h3>This page is Main page For Retro Meetings. You can select one team.</h3>
    </div>
    <!--<h1 v-if="teamName">
      This team name is: {{ teamName }}
    </h1>-->
    <div style="height: 10px; width: 100%"></div>

    <div v-if="teamName">
      <!-- <div v-for="teamMetric in teamMetrics.data.types" v-bind:key="teamMetric.id"> -->
        <!-- <div>{{teamMetrics}}</div> -->
        <team-metrics :teamName="teamName"></team-metrics>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import OptimusTeam from "./Teams.vue";
import TeamMetrics from "./TeamMetrics.vue";

export default {
  data() {
    return {
      teamName: "",
    };
  },
  watch: {
    $route(to, from) {
      this.teamName = to.params.teamName;
    }
  },
  components: {
    "optimus-teams": OptimusTeam,
    "team-metrics": TeamMetrics
  }
};
</script>
