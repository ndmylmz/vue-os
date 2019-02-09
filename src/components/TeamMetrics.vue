<template>
  <div class="row metrics">
    <div class="col">{{teamMetrics}}</div>
    <div class="col">2 of 3</div>
    <div class="col">3 of 3</div>
  </div>
</template>

<script>
// import RetroMetrics from './components/RetroMetrics.vue'
export default {
  props: ["teamMetrics"]
};
</script>
