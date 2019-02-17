<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <router-link v-for="team in optimusTeams" v-bind:to="{ name : 'retroChildrenLink', params: { teamName : team } }"
      tag="button" active-class="active" class="btn btn-secondary">{{ team }}</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        optimusTeams: ['Athos', 'Porthos', 'Aramis', 'Dartanyan']
      }
    }
  }

</script>
