<template>
  <div class="container border" id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-3 bg-secondary">
        <team-description v-if="teamName"></team-description>
      </div>
      <div class="col-9 px-4 py-3">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import teamDescription from './components/teamDescription.vue';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hello world!',
        teamName: false,
        startDate: '',
      }
    },
    watch: {
      '$route'(to, from) {
        this.teamName = to.params.teamName;
        this.startDate = to.params.startDate;
      }
    },
    components: {
      appHeader: Header,
      "team-description": teamDescription
    }
  }

</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all 0.5s;
  }

  .fade-leave-active {
    transition: all 0.5s;
    opacity: 0;
  }
</style>
