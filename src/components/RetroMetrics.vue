<template>
  <div>
    <div class="row">
      <optimus-teams></optimus-teams>
    </div>
    <div class="row" v-if="!teamName">
        <h3>This page is Main page For Retro Meetings. You can select one team.</h3>
    </div>
    <div class="row" v-if="teamName">
      <h1>
        This team name is: {{ teamName }}
      </h1>
    </div>
  </div>
</template>

<script>
  import OptimusTeam from './Teams.vue';

  export default {
    data() {
      return {
        teamName: ''
      }
    },
    watch: {
      '$route'(to, from) {
        this.teamName = to.params.teamName;
      }
    },
    components: {
      optimusTeams: OptimusTeam
    }
  }

</script>
