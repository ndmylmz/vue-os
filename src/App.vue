<template>
  <div class="container border" id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-3 bg-secondary">
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

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Hello world!'
      }
    },
    components: {
      appHeader: Header
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
