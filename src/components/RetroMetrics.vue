<template>
  <div>
    <div class="row">
      <optimus-teams></optimus-teams>
    </div>
    <div class="row" v-if="!teamName">
      <h3>This page is Main page For Retro Meetings. You can select one team.</h3>
    </div>
    <div class="row" v-if="teamName">
      <div class="col-12">
        <h1>
          This team name is: {{ teamName }}
        </h1>
      </div>
      <div class="col-12 row">
        <div class="col-3">
          <startDate  placeholder="Start Date" v-model="startDateModel">
          </startDate>
        </div>
        <div class="col-4">
          <startDate class="col" placeholder="End Date" v-model="endDateModel">
          </startDate>
        </div>
        <div class="col">
          <router-link :to="{ name : 'teamOverview2', params: { teamName : teamName , startDate: startDateModel} }"
                       class="btn btn-secondary" tag="button">Get Data</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import OptimusTeam from './Teams.vue';
  import Datepicker from 'vuejs-datepicker';

  export default {
    data() {
      return {
        teamName: '',
        startDateModel:'',
        endDateModel:'',
      }
    },
    watch: {
      '$route'(to, from) {
        this.teamName = to.params.teamName;
      }
    },
    components: {
      optimusTeams: OptimusTeam,
      startDate: Datepicker,
      endDate: Datepicker
    }
  }

</script>
