<template>
  <div class="container">
    <div id="form" v-if="!teamName" class="">
      Select a team :
      <div class="row">
        <div class="container row">
          <div class="btn-group col" role="group">
            <div v-for="team in optimusTeams" class="form-check form-check-inline" @click="formSelectedTeam = team">
              <input class="form-check-input" type="radio" name="teamSelect" :id="'team-' + team" :value="team">
              <label class="form-check-label" :for="'team-' + team">{{ team }}</label>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row container">
        <div class="col p-0">
          Start Date
        </div>
        <div class="col">
          End Date
        </div>
        <div class="w-100 p-1"></div>
        <div class="col">
          <date-picker input-class="form-control" format="dd-MM-yyyy" id="startDate" @input="changeDate('startDate')" placeholder="Start Date"
            class="row"></date-picker>
        </div>
        <div class="col">
          <date-picker input-class="form-control" format="dd-MM-yyyy" id="endDate" @input="changeDate('endDate')" placeholder="End Date"
            class="row"></date-picker>
        </div>
        <div class="w-100 p-2"></div>
        <div class="col p-0">
          <router-link :to="{ name : 'retroChildrenLink', params: { teamName : formSelectedTeam }, query: { startDate, endDate} }"
            tag="button" active-class="active" class="btn btn-primary">Submit</router-link>
        </div>
      </div>
    </div>

    <div v-if="teamName" class="container row">
      <h1 class="col">{{ teamName }}</h1>
      <div class="col text-right">
        <router-link :to="{ name : 'retroMainPageLink'}" tag="button" active-class="active" class="btn btn-secondary team-nav">Back</router-link>
      </div>
      <br>
      <team-metrics :teamName="teamName"></team-metrics>
    </div>
  </div>
</template>

<script>
  import TeamMetrics from "./TeamMetrics.vue";
  import Datepicker from 'vuejs-datepicker';

  export default {
    data() {
      return {
        optimusTeams: ['Athos', 'Porthos', 'Aramis', 'Dartanyan'],
        teamName: this.$route.params.teamName,
        formSelectedTeam: '',
        startDate: '',
        endDate: ''
      };
    },
    watch: {
      $route(to, from) {
        this.teamName = to.params.teamName;
      }
    },
    components: {
      "team-metrics": TeamMetrics,
      "date-picker": Datepicker
    },
    methods: {
      changeDate(dateType) {
        setTimeout(() => {
          this[dateType] = $('#' + dateType).val();
        }, 250);
      }
    }
  };

</script>
