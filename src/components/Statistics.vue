<template>
  <div class="col">
    <div class="statistic">
      <div v-for="(metrics, stateName) in teamMetrics.data.types" v-bind:key="metrics">
        <div class="col" v-if="isPreviousWeek == true" style="color: red;">{{stateName}}</div>
        <div>
          Time Spend:
          <span style="color: black;">{{metrics.duration}}</span> for
          <span style="color: black;">{{metrics.tasksCount}}</span> issues
        </div>
      </div>
    </div>
  </div>
  <!-- <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">States</th>
          <th scope="col">Previous 2 Week Metrics</th>
          <th scope="col">Current 2 Week Metrics</th>
          <th scope="col">Comparison</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(column, index) in teamMetrics" v-bind:key="column">
          <th scope="row">{{column.data.types}}</th>
          <td>{{column.data.types}}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table> -->
</template>

<script>
export default {
  props: ["teamMetrics", "isPreviousWeek"]
};
</script>
