import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {
  routes
} from './routes.js';

import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'  // default mode : hash
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
