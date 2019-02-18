<template>
  <table class="table table-bordered table-info">
    <thead class="thead-light">
      <tr>
        <th scope="col">State</th>
        <th scope="col">Last 2 week Metrics</th>
        <th scope="col">Current 2 eeks Metrics</th>
        <th scope="col">Comparison</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(metrics,index) in teamMetrics" v-bind:key="metrics">
        <th scope="row">{{states[index]}}</th>
        <td>{{metrics[states[index]].last.metric.duration}}</td>
        <td>{{metrics[states[index]].current.metric.duration}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: ["teamMetrics", "states"]
  };

</script>
